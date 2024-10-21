
let emlements = document.querySelectorAll('.user-front .elements')
let ele1 = document.getElementById('ele1')
let ele2 = document.getElementById('ele2')
let ele3 = document.getElementById('ele3')
let ele4 = document.getElementById('ele4')
let ele5 = document.getElementById('ele5')
let more = document.getElementById('more')
let info1 = document.getElementById('info1')
let gridbox = document.getElementById('gridbox')
let right = document.getElementById('right')
let qoulity = document.getElementById('qoulity')
let indexmenu = document.getElementById('indexmenu')
let openbutton = document.getElementById('opembutton')
let emailsub = document.getElementById('emailsub')
let message = document.getElementById('message');
let menuopen = false

function showmessage(color,that){
    message.style.transform = 'translateX(-50%) translateY(100px)'
    setTimeout(()=>{message.style.transform = 'translateX(-50%) translateY(-200px)'},2500)
    message.style.backgroundColor = color
    message.innerHTML = that
}
window.addEventListener('scroll',() =>{
    if(innerWidth >= 1100){
        if(scrollY >= 650){
            info1.style.opacity = '1'
            info1.style.transform = 'translateY(00px)'
        }
    }else{
        if(scrollY >= 100){
            info1.style.opacity = '1'
            info1.style.transform = 'translateY(00px)'
        }
    }
})
window.addEventListener('scroll',() =>{
    if(innerWidth >= 1100){
        if(scrollY >= 1200){
            gridbox.style.opacity = '1'
            gridbox.style.transform = 'translateY(00px)'
        }
        if(scrollY >= 1200){
            qoulity.style.opacity = '1'
            qoulity.style.transform = 'translateY(00px)'
        }
        if(scrollY >= 1250){
            right.style.opacity = '1'
            right.style.transform = 'translateY(00px)'
        }
    }else{
        if(scrollY >= 650){
            gridbox.style.opacity = '1'
            gridbox.style.transform = 'translateY(00px)'
        }
        if(scrollY >= 750){
            qoulity.style.opacity = '1'
            qoulity.style.transform = 'translateY(00px)'
        }
        if(scrollY >= 1000){
            right.style.opacity = '1'
            right.style.transform = 'translateY(00px)'
        }
    }
})

function openmenu(){
    if(innerWidth >= 700){
        if(!menuopen){
            indexmenu.style.width = '400px'
            menuopen = true
            this.style.transform ='rotateY(180deg)'
        }else{
            indexmenu.style.width = '0'
            menuopen = false
            this.style.transform ='rotateY(0deg)'
        }
    }else if((innerWidth >= 410)){
        if(!menuopen){
            indexmenu.style.width = '290px'
            menuopen = true
            this.style.transform ='rotateY(180deg)'
        }else{
            indexmenu.style.width = '0'
            menuopen = false
            this.style.transform ='rotateY(0deg)'
        }
    }else{
        if(!menuopen){
            indexmenu.style.width = '210px'
            menuopen = true
            this.style.transform ='rotateY(180deg)'
        }else{
            indexmenu.style.width = '0'
            menuopen = false
            this.style.transform ='rotateY(0deg)'
        }
    }

}





// post email




function sendtheemail(event){
    event.preventDefault(); // Stop the form from submitting
    if(emailsub.value){
        fetch(location.href,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                emailsub:emailsub.value,
            })
        }   
        ).then(async respons => {
            await respons.json()
            showmessage('#2bae66','Thank You')
            emailsub.value = ''
            location.href = '#'
        })
    }
}


