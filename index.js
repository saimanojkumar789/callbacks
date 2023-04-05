const posts = [
    { title : 'Post1', body : 'Post one'},
    { title : 'Post2', body : 'Post two'},
    { title : 'Post3', body : 'Post three'}
];

const user = {lastActivityTime : new Date().getTime()};
function createPost(post){
    return new Promise( (resolve,reject) => {
        posts.push(post);
        resolve();
    })
}

function updateLastUserActivityTime(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            user.lastActivityTime = new Date().getTime();
            resolve();
        },1000);
    })
}

function getPosts(){
    posts.forEach( post => console.log(post.title));
}

Promise.all([createPost({ title : 'Post5', body : 'Post five'}),updateLastUserActivityTime])
.then( () => {
    getPosts();
    console.log(user.lastActivityTime);
});