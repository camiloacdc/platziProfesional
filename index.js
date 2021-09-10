import  MediaPlayer  from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";
const video=document.getElementById("movie");
const playButton=document.getElementById("playButton");
const muteButton=document.getElementById("muteButton")
const player= new MediaPlayer({nombre:video, plugins:[
     new AutoPlay(), new AutoPause()
]});

playButton.onclick=()=>player.toggle();
muteButton.onclick=()=>player.toggleSound();
/**
 * en caso de importar otra cosa desde MediaPlayer.js
 * import  MediaPlayer,{algo}  from "./MediaPlayer.js";
 */
 /*const fn=(n)=>{
     if(n<1){
          return
         }else{console.log(n); fn(n-1); }}*/
/**IIFE inmeditaly invoque function expresion
 * (function(){
              let color="green";
              function pcolor(){
                   console.log(color);
              }
              pcolor();
         })();*/

/** clases con varaible privadas con #
 * class makeCounter {
        #count;

        constructor(n) {
          this.#count = n;
        }

        get count() {
          return this.#count;
        }

        increase() {
          this.#count += 1;
        }

        decrease() {
          this.#count -= 1;
        }
      }

      let counter = new makeCounter(7);

      console.log("The Count is:", counter.count);
      counter.increase();
      console.log("The Count is:", counter.count);
      counter.decrease();
      counter.decrease();
      counter.decrease();
      counter.decrease();
      console.log("The Count is:", counter.count);

      counter.#count = 0;
 */
        