$(function(){
    const szuloelem=$("article") ;
    const sablonElem=$(".lampa") ;
    const meret=9;
    const lampatomb=[];
    for (let i = 0; i < meret; i++) {
       
            const ujElem=sablonElem.clone().appendTo(szuloelem);
            const lampa =new Lampa(ujElem,i);   
            lampatomb.push(lampa);         

    }
    sablonElem.remove();
    $(window).on("lampaKattint",(event)=>{
        let elemId=event.detail;
        let meret=3;
        if(elemId>meret-1){
            lampatomb[elemId-meret].setAllapot();
        }
        if(elemId<meret * meret -meret){
            lampatomb[elemId+meret].setAllapot();
        }
        if(elemId % meret !== 0){
            lampatomb[elemId-1].setAllapot();
        }
        if(elemId % meret !== meret-1){
            lampatomb[elemId+1].setAllapot();
        }
    });
});