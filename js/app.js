
import {users} from '../data/users.js';

const tbodyEl = document.querySelector('tbody');
const addbtnEl=document.querySelector('.add-btn')
const modal=document.querySelector('.modal-overlay')
const closeBtn=document.querySelector('.close-btn')
const cancelBtn=document.querySelector('.cancel-btn')
const userForm=document.querySelector('.user-form')


console.log(userForm);


window.deleteUser = function(id) {
console.log(id);



  let userIndex = users.findIndex((item) => item.id === id);
if(userIndex==-1){
  return;
}



 users.splice(userIndex, 1);
  updateUi(users);
};

function updateUi() {
  tbodyEl.innerHTML = '';

  users.forEach(user => {
    const {id, firstName, lastName, email, age, role, image} = user;

    tbodyEl.innerHTML += `
      <tr>
        <td>${id}</td>
        <td>
          <img src="${image}" class="user-img">
        </td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td><span class="role admin">${role}</span></td>
        <td>
          <button on class="update-btn">update</button>
        </td>
        <td>
          <button onclick="deleteUser(${id})" class="delete-btn">delete</button>
        </td>
      </tr>
    `
  });
}

updateUi(users);


addbtnEl.addEventListener('click',()=>{
  modal.classList.remove("hidden")
});

closeBtn.addEventListener('click',()=>{
  modal.classList.add("hidden")
});

cancelBtn.addEventListener('click',()=>{
  modal.classList.add("hidden")
});


document.addEventListener('keydown',(e)=>{
  if(e.code=='Esccape'){
    modal.classList.add("hidden")
  }
});

userForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const formData=new FormData(e.target)
let newFormData={
    id: users.length===0 ? 1:users.at(-1).id+1,
    firstName:formData.get("fristName") ,
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    age: formData.get("age"),
    role: formData.get("role"),
    image: formData.get("image")
}
users.push(newFormData)
updateUi(users)
userForm.reset()
 modal.classList.add("hidden")

})



