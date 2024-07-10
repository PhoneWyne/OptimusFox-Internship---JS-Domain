// let p = new Promise((resolve, reject) => {
//     let a = 3;
//     if (a === 2){
//         //resolve
//         resolve('Success');
//     } else{
//         //reject
//         reject('Failed');
//     }
// })
// // p.then(resolve state).catch(reject state)
// p.then((message) => {
//     console.log(`This is in then/resolve state ${message}`);
// }).catch((message) => {
//     console.log(`This is in catch/reject state ${message}`);
// })

// const x = () => {return new Promise((resolve, reject) =>{
//     let y = 1;
//     if (y === 1){
//         resolve("Success x");
//     } else {
//         reject("Failed x");
//     }
// })}

// x().then((message) => {
//     console.log(message);
// }).catch((message)=> {
//     console.log(message);
// })

const recordVideoOne = new Promise ((resolve, reject) => {
    resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise ((resolve, reject) => {
    resolve('Video 3 Recorded');
}); 

// Promise.all([array of Promises]).then(resolve state).catch(reject state)
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => 
    {console.log(message)
})
// Promise.race exits when the very first Promise resolves, does not wait for rest of promises to finish