console.log('Client-side javascript')
const vale =  document.querySelector('input')
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
 let address = vale.value
 fetch('http://localhost:3000/weather?address=' + address).then((response) => {
    document.getElementById('quer').innerHTML = 'Loading...'
    document.getElementById('quer2').innerHTML = ''

 response.json().then((data) => {
     if(data.error) {
        document.getElementById('quer').innerHTML = data.error
     } else {
     
            document.getElementById('quer').innerHTML = data.location
            document.getElementById('quer2').innerHTML = data.forecast

        
     }
    })
 }).catch(err => console.log(err)) 

})

 