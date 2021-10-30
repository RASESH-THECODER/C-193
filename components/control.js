AFRAME.registerComponent("city-control-reader",{
  schema:{
      speedofControl :{ type: "number", default: 0},
  },
  init: function() {
      window.eventListener("keydown",(e)=> {
          if (e.key === "ArrowRight"){
              if (this.data.speedofControl < 0.1) {
                  this.data.speedofControl +=0.03;
              }
              }
              if (e.key === "ArrowLeft") {
                  if (this.data.speedofControl > -0.1) {
                      this.data.speedofControl = 0.03;  
                  }
              }
          
      
  });
},
      
  
  tick:function () {
      var mapControl=this.el.getAttribute("control");

      mapControl.y += this.data.speedofControl;

      this.el.setAttribute("rotation",{
          x:mapControl.x,
          y:mapControl.y,
          z:mapControl.z
      });
  },
});

AFRAME.registerComponent("car-control-reader",{
  schema:{
      speedofControl:{type: "number", default:0},
      
  },
  init:function(){
      window.addEventListener("keyDown",(e) =>{
          

          var carControl=this.data.speedofControl;
          

          if (e.key === "ArrowUp") {
              if (carControl.x < 0.1) {
                carControl.x += 0.01;
                
              }
            }
            if (e.key === "ArrowDown") {
              if (carControl.x > -0.1) {
                carControl.x -= 0.01;
                
              }
            }
            
        
      }); 
  },
  tick:function () {
      var carControl=this.el.getAttribute("control");

      carControl.y += this.data.speedofControl;

      this.el.setAttribute("control",{
          x:carControl.x,
          y:carControl.y,
          z:carControl.z
      });
  },
});
