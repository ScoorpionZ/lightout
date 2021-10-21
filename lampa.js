class Lampa{
    constructor(elem,index){
        this.elem=elem;
        this.allapot=false;
        this.index=index;
        this.setSzin();
        this.elem.on("click",()=>{
            this.setAllapot();
            this.lampafelkapcsol();
        });
        
    }

    setAllapot(){
        this.allapot=!this.allapot;
        this.setSzin();
    }
    
    setSzin(){
        if(this.allapot){
            this.elem.css("background-color","green");
        }else{
            this.elem.css("background-color","orange");
        }
    }

    lampafelkapcsol(){
        let esmeny=new CustomEvent("lampaKattint",{detail:this.index});
        window.dispatchEvent(esmeny);
    }
}