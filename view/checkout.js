

let checkprocheckout = document.getElementById('checkprocheckout')
let indexmenu = document.getElementById('indexmenu')
let openbutton = document.getElementById('opembutton')
let checkpro = document.getElementById('checkpro')
let message = document.getElementById('message');
let total = document.getElementById('total');
    
let menuopen = false
let brain;
if(localStorage.item){
    brain = JSON.parse(localStorage.getItem('item'))


}else{
    brain=[]
}
function totalitem(){
    let all = 0;
    for(let k =0 ;k<brain.length;k++){
        all += parseInt(brain[k].itemprice)
    }
    total.innerHTML = `${all} Dh`
}
totalitem()
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


function showincheckout(){
    if(brain.length != 0){
        for(let j = 0;j<brain.length;j++){
            let shema = `
            <div class="product" id="product">
            <div class="image" style="background-image:url(${brain[j].imageItem.slice(5,-2)})"></div>
            <div class="title">${brain[j].titleitem}</div>
            <div class="size">${brain[j].bordersize}</div>
            <div class="type">${brain[j].bordertype}</div>
            <div class="glass">${brain[j].borderglass}</div>
            <div class="price">${brain[j].itemprice}</div>
            <i class='bx bxs-trash-alt' onclick="delet.call(this)"></i>
            </div>`
            checkprocheckout.innerHTML += shema
        }
    }else{
        checkprocheckout.innerHTML = 'Your Cart is empty'
        checkprocheckout.style.fontWeight = '700'
    }
}
showincheckout()


function showmessage(color,that){
    message.style.transform = 'translateX(-50%) translateY(100px)'
    setTimeout(()=>{message.style.transform = 'translateX(-50%) translateY(-200px)'},2500)
    message.style.backgroundColor = color
    message.innerHTML = that
}

function delet() {
    // 'this' refers to the clicked trash icon
    let productDiv = this.closest('.product'); // Get the closest product div

    // Get the index of the product div within the 'checkprocheckout' container
    let productIndex = Array.from(checkprocheckout.children).indexOf(productDiv);

    // Remove the product from the 'brain' array
    if (productIndex >= 0) {  // Ensure valid index (greater than or equal to 0)
        brain.splice(productIndex, 1);  // Remove the item from the brain array
    }

    // Update the 'brain' data in localStorage
    localStorage.setItem('item', JSON.stringify(brain));

    // Re-render the checkout items by calling 'showincheckout()'
    checkprocheckout.innerHTML = ''; // Clear current products before re-rendering
    showincheckout(); // Re-populate the checkout list

    // Optionally, show a message indicating the item has been deleted
    showmessage('#990011', 'Item has been removed');
    totalitem()
}

function sendorder(event){
    event.preventDefault(); // Prevent the default form submission
    let fullname = document.getElementById('fullname').value
        ,phone = document.getElementById('phone').value
        ,city = document.getElementById('city').value
        ,address = document.getElementById('address').value
        ,email = document.getElementById('email').value
    if(fullname && phone && city && address){
        fetch(location.href,{
            method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    fullname:fullname,
                    phone:phone,
                    city:city,
                    address:address,
                    email:email,
                    products:checkprocheckout.innerHTML
                })
        })
        fullname =''
        phone = ''
        city = ''
        address = ''
        email = ''
        showmessage('#2bae66','Your Order has been Sent')
        setTimeout(()=>{location.href ='/';localStorage.clear()},1500)
        
    }else{
        showmessage('#990011', 'Fill the Importent Information');
    }
    
}

