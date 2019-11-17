const ps = document.querySelectorAll('p')

ps.forEach( function(){
    if(p.textContent.includes('The')){
        p.remove()
    }
})