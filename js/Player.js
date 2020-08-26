class Player {
  constructor(){
    this.index = null;
    this.bp=null;
    this.name = null;
    this.password=null;
    this.bp = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount =data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
  
    database.ref(playerIndex).set({
      name:this.name,
      password:this.password,
      index:this.index
    });
  }
  updateData(){
    var playerIndex = "players/player" + this.index;
  
    database.ref(playerIndex).update({
      O2:this.O2
      

    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    database.ref("CarsAtEnd").on("value",(data)=>{
      this.rank=data.val();
    })
  }
  static updateCarsAtEnd(rank){
    database.ref("/").update({
      CarsAtEnd:rank
    })
    
  }
}
