const video=document.getElementById("movie");
const playButton=document.getElementById("playButton");
const muteButton=document.getElementById("muteButton")
class MediaPlayer{
     constructor(video){
          this.video=video.nombre;
     }

     reproducir(){
          this.video.play();
     }; /**mdn htmlmediaelement https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement */
     detener() {
          this.video.pause();
      };
silenciar(){
     this.video.muted=true;
}
sonido(){
     this.video.muted=false; 
}
      toggle ()  {
          if(this.video.paused){
              
               this.reproducir();
          }else{
               this.detener();
               
          }
     }

     toggleSound(){
          if(this.video.muted==true){
               this.sonido();
          }else{
               this.silenciar();
          }
     }
}
const player= new MediaPlayer({nombre:video});

playButton.onclick=()=>player.toggle();
muteButton.onclick=()=>player.toggleSound();