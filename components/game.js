AFRAME.registerComponent("game-play",{
    
    init: function() {
        var duration =120;
        const timerel=document.querySelector("#timer")
            this.startTimer(duaration,timerel)
        
    
},
        
    startTimer:function(duration,timerel){
     var minutes,seconds
      setInterval(() => {
         if (duration>=0){
             minutes=parseInt(duration/60)
             seconds=parseInt(duration%60)
            if(minutes<10){
                minutes="0"+minutes
            }
            if(seconds<10){
                seconds="0"+seconds
            }
            timerel.setAttribute("text",{
                value:minutes+":"+seconds
            })
            duration-=1
         }
     }, 1000);   
    }
    });
