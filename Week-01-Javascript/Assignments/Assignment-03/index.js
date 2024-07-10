const axios = require('axios');
// Question 1
const fetchAlbums = async () => {
    try {
        //fetch from albums route
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        //.json() to parse response 
        const albums = await response.json();
        //chain functions on albums array, .filter().map
        const filteredAlbums = albums
            .filter(album => album.title)
            .map(album => ({
                id: album.id,
                userId: album.userId,
                title: album.title
            }));
        return filteredAlbums;
    } catch (error) {
        // console.log(`Error : ${error}`);
        throw error;
    }
};

fetchAlbums()
    // .then(albums => console.log(`Returned list of all albums with a title ${albums}`))
    .then(albums => console.log("Albums :", albums))
    .catch(error => console.log(`There was an error in returning lits of albums ${error}`));

// Question 2
const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // data property to parse response
        const posts = response.data;
        const filteredPosts = posts
            .filter(post => post.title) //filter out all those without title
            .sort((a, b) => a.id - b.id); //sort ascending order by numerical ID
        return filteredPosts
    } catch (error){
        throw error;
    }
};

fetchPosts()
    .then(posts => console.log("Posts: ", posts))
    .catch(error => console.log(`There was an error in fetching list of posts ${error}`));

// Question 3 , return users with emails, and total amount of users with phone number
const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
  
      const filteredUsers = users.filter(user => user.email); //filter out all users without email
      const totalPhoneNumberUsers = filteredUsers.reduce((count, user) => {
        // increment count only if phone number exists
        return user.phone ? count + 1 : count;
      }, 0); // Calculate the total number of users that have a phone number listed
  
      return {
        filteredUsers,
        totalPhoneNumberUsers
      };
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
};

fetchUsers()
  .then(result => {
    console.log('Filtered Users with an email:', result.filteredUsers);
    console.log('Total users that have a phone Number:', result.totalUsersWithPhoneNumber);
  })
  .catch(error => console.log(`There was an error in fetching list of users with emails and total count of phone numbers ${error}`));


// Question 5, filter out completed todos, i.e. todos whose compeleted = True
async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
      
      const filteredTodos = todos
        // filtering out completed todos, and only keeping those, whose completed=false
        .filter(todo => !todo.completed)
        .map(todo => ({
          id: todo.id,
          title: todo.title
        }));
      
      return filteredTodos;
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

// Test the function
fetchTodos().then(filteredTodos => {console.log(filteredTodos);});
  