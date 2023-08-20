
function getRandomQuote() {
const random = fetch('https://quotes15.p.rapidapi.com/quotes/random/',{
    'method': 'GET',
    'headers': {
 'X-RapidAPI-Key': '8a216ecda4msh31d8dbb9faccd91p11b72djsnd066efb4e158',
 'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
}
 })
 .then(res => res.json())
 .then(res => {
     console.log(res)
     console.log(res.content)

     document.getElementById('quotes').innerHTML = res.content
     
    })
    .catch(err => {
        console.log(err)
    })
}
    
document.getElementById('btn')
.addEventListener('click', ()=> {
    getRandomQuote()
    
})