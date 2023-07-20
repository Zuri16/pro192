AFRAME.registerComponent("choque", {
    update: function () {
      var cat = document.querySelector("#gato")
      var niña = document.querySelector("#woman")
      var boy = document.querySelector("#niño")
      this.isCollided(cat, niña, boy);
    },
  
    isCollided: function (cat, niña, boy) {
      console.log(cat)
      //const element = document.querySelector(elementId);
      //console.log(element)
      var vo = document.querySelector("#volante1")
    
      vo.addEventListener("collide", (e) => {
        console.log("gato")
      });
    },
  });