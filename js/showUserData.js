class UserData{
    constructor(){
        this.text6=createElement("h2");
        this.text7=createElement("h2");
        this.text8=createElement("h2");
        this.text9=createElement("h2");

        this.O2=createInput(player.O2);
        this.bp=createInput(player.bp);
        this.p=createInput(player.p);
        this.w=createInput(player.w);

        

        this.save=createButton("Enter to save data");
        this.data=createButton("Advisory");
        this.data.position(window.innerWitdh/2-100,window.innerHeight/2+800);
        
    }
    display(){
        clear();
        background("black");
        this.text6.html("Oxygen level");
        this.text6.position(window.innerWidth/2-25,150);
        this.O2.position(window.innerWidth/2+190,170);
        
        this.text7.html("Blood Pressure level");
        this.text7.position(window.innerWidth/2-25,250);
        this.bp.position(window.innerWidth/2+190,270);
     
        this.text8.html("Pulse rate");
        this.text8.position(window.innerWidth/2-25,350);
        this.p.position(window.innerWidth/2+190,370);

        this.text9.html("Water intake in glasses");
        this.text9.position(window.innerWidth/2-25,450);
        this.w.position(window.innerWidth/2+190,470);

        this.save.position(window.innerWidth/2,550);
        this.data.position(window.innerWidth/2+600,200);
        console.log(window.innerWidth);

    this.data.mousePressed(()=>{
        clear();
        this.text6.hide();
        this.text7.hide();
        this.text8.hide();
        this.text9.hide();
        this.O2.hide();
        this.bp.hide();
        this.p.hide();
        this.w.hide();

        this.save.hide();
        this.data.hide();
    
       
        background("black");
        advisory.display();
        })
    
    this.save.mousePressed(()=>{
        player.O2=this.O2.value();
        player.w=this.w.value();
        player.p=this.p.value();
        player.bp=this.bp.value();
        player.updateData();
     })
    }
}