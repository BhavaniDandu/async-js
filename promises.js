const posts=[ 
    {title:'Post one',body:'This is post one'},
    {title:'post Two',body:'This is post two'}
];
    function getPosts(){
        setTimeout(() => {
            let output='';
            posts.forEach((post,index) => {
                output +=`<li>${post.title}</li>`;

            });
            document.body.innerHTML=output;
        },1000);
    }

function createPost(post){
    return new Promise((resolve,reject) => {

    setTimeout(() => {
        posts.push(post);

        const error=true;

        if(!error) {
          resolve();
        } else {
            reject('Error:something went wrong');
        }        
        }, 2000) ;
    });
}


//Aync/Await
//async function init() {
  //  await createPost({title:'post Three',body:'This is post three'});
    //getPosts()}
//init();


//Asunc/Await//Fetch

async function fetchUsers() {
    const res=await fetch
    ('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);
}
fetchUsers();

//createPost({title:'Post Three',body:'This is post three'})
//.then(getPosts)
//.catch(err => console.log(err));
//promises all
//const promise1=Promise.resolve('Hello world');
//const promise2=10;
//const promise3=new Promise((resolve,reject) => 
//setTimeout(resolve,2000,'Goodbye')
//);
//const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
 
//Promise.all([promise1,promise2,promise3,promise4]).then(values =>
  //  console.log(values));