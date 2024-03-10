const API_URL = "https://jsonplaceholder.typicode.com/photos";
const postwrapper = document.querySelector(".post-wrapper")

async function fetchData(api){
    let data = await fetch(api)
    data
    .json()
    .then(res=> createCard(res))
    .catch(err=>console.log(err))
}
fetchData(API_URL)

function createCard(data){
    data.forEach((post)=>{
      let card = document.createElement("div")
      card.className = "col-3"
      card.innerHTML=`
      <div class="card  p-3 mb-3 "> 
      <img src ="${post.url}"alt="rasm">
      <p>${post.title}</p>
          </div> `
       postwrapper.appendChild(card)          
    })
}