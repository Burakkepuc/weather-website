
let url;
const weatherForm = document.querySelector('form')
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
// messageOne.textContent ='From Javascript';



weatherForm.addEventListener('submit', (e) =>{
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ' '
  e.preventDefault()
  const location = search.value

  url = `/weather?address=${encodeURIComponent(location)}`;
  
  fetch(url).then((response) =>{
    response.json().then((data) => {
      if(data.error){
       messageOne.textContent = 'Please try another location!'
      }
      else{
        messageOne.textContent = (data.location);
        messageTwo.textContent = (data.forecast);
      }
    })
  })
  

  
})