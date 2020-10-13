class Runner {
  currentTravel = 0;
  run(steps){
    this.currentTravel += steps;
    return this.currentTravel;
  }
  getLucky(){
    return Math.floor(Math.random()*100)+1
  }
  cleanTravel(){
    this.currentTravel = 0;
  }
}

class Turtle extends Runner{
  reaction(){
    let lucky = this.getLucky();
    let steps = 0;
    console.group("%cTurno de Tortuga...",'font-size:1.2rem;color:blue;')
    if(lucky <= 50){
      console.log("Paso rapido");
      steps = 3;
    }else if(lucky <=70){
      console.log("Resbalon");
      steps = -6;
    }else{
      console.log("Paso lento");
      steps = 1
    }
    console.log(`Y avanzo ${steps} pasos`);
    console.groupEnd();
    return this.run(steps)
  }
}

class Hare extends Runner{
  reaction(){
    let lucky = this.getLucky();
    let steps = 0;
    console.group("%cTurno de liebre...",'font-size:1.2rem;color:red;')
    if(lucky <= 20){
      console.log("Se durmio");
      steps = 0;
    }else if(lucky <=40){
      console.log("Salto grande");
      steps = 9;
    }else if(lucky <=50){
      console.log("Resbalon grande");
      steps = -12;
    }else if(lucky <=80){
      console.log("Salto pequeño");
      steps = 1;
    }else{
      console.log("Resbalon pequeño");
      steps = -2
    }
    console.log(`Y avanzo ${steps} pasos`);
    console.groupEnd();
    return this.run(steps)
  }
}

class Race {
  haveWinner = null;
  tourtle = new Turtle();
  hare = new Hare();
  raceLenght = 0;
  constructor(raceLenght=90){
    this.raceLenght = raceLenght;
  }
  begin(){
    let a,b;
    while(!this.haveWinner){
      a = this.tourtle.reaction()
      console.log(`Recorrido tortuga: ${a}\n`)

      b = this.hare.reaction();
      console.log(`Recorrido liebre: ${b}\n`)

      if(a >= this.raceLenght && b >= this.raceLenght){
        this.haveWinner = "Empate";
      }else if(a >= this.raceLenght){
        this.haveWinner = "Gano Tortuga";
      }else if(b >= this.raceLenght){
        this.haveWinner = "Gano Liebre";
      }
      if(this.haveWinner){
        console.log(`%cEl resultado es: ${this.haveWinner}`,'color:green;') //,`%c ${this.haveWinner}`,'color:green;font-weight:bold;font-size:2rem;')
      }else{
        console.log("Siguente ronda");
      }
    }
  }
}

new Race().begin();
