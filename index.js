const users = document.getElementById("users");
const posts = document.getElementById("posts");

let selectUser = 2;
let allPosts;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let allUsers = json;
    console.log(allUsers)
    for (let user of allUsers) {
      users.innerHTML += `<li id="${user.id}" onclick="setUser(this.id)" >${user.name}</li>`;
    }
    
  return fetch("https://jsonplaceholder.typicode.com/posts") 
    
  })
  .then((response) => response.json())
    .then((json) => {
      allPosts = json;
      showPosts()
    });
  
function showPosts(){
  posts.innerHTML = '';
  for (let post of allPosts) {
    if(post.userId == selectUser){
      posts.innerHTML +=
    `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>        
    </li>`;
    }
    
  }
}
const setUser = (e)=>{
  selectUser = e;
  showPosts()
}