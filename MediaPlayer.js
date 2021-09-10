
class MediaPlayer{
    
     constructor(video){
          this.video=video.nombre;
          this.plugins=video.plugins || [];
          this.initplugins();
     }
initplugins(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
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
export default MediaPlayer;

/**ejemplo export const algo='hola' */