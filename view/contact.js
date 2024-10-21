let indexmenu = document.getElementById('indexmenu')
let menuopen = false



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