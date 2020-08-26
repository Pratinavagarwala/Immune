class Login{
    constructor(){
        this.name=createInput("Enter_Username");
        this.password=createInput("","Password");
        this.ok=createButton("Enter");   
        
    }

    display(){
      this.name.position(window.innerWidth/2,200);
      this.password.position(window.innerWidth/2,250);
      this.ok.position(window.innerWidth/2+50,300);

      this.ok.mousePressed(()=>{
      if(form.flag===1){

        this.name.hide();
        this.password.hide();
        this.ok.hide();
        for(var p in allPlayers){
          if(this.name.value()===allPlayers[p].name && this.password.value()===allPlayers[p].password){
            player.name=this.name.value();
            player.password=this.password.value();
            player.index=allPlayers[p].index;
            userData=new UserData();
        userData.display();
          }else{
            alert("Invalid username password");
            location.reload();
          }
        }

        //form=new Form();
        //form.display();
      
      }  else if(form.flag===2){

          player.name=this.name.value();
          player.password=this.password.value();
          playerCount++;
          player.index=playerCount;
          player.updateCount(playerCount);
          player.update();
          this.name.hide();
          this.password.hide();
          this.ok.hide();
          userData=new UserData();
          userData.display();

      }
        
        
      })

    }  
}