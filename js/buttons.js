     // 플레이 버튼
     AFRAME.registerComponent('play', {
        dependencies: ['material'],
        init: function () {
          var btn = document.querySelector("#playbtn");
          var playimg = document.querySelector('#playimg');

          var isClick = false;

          btn.addEventListener("click", (e) => {  

              if(taskScheduler.isPlaying()){
                taskScheduler.pause();
                playimg.setAttribute('material', 'opacity', '0');
                btn.setAttribute('src', './img/pause.png');   
              } 
              else{
                taskScheduler.resume();
                btn.removeAttribute('src' , './img/pause.png');
                playimg.setAttribute('material', 'opacity', '1');
              }
            
          });
        }
      });

      // 되감기 버튼
      AFRAME.registerComponent('rewind', {
        init: function () {
          var btn = document.querySelector("#rewindbtn");
          var playbtn = document.querySelector("#playbtn");
          var playimg = document.querySelector('#playimg');
          var prpPanel = document.querySelector('#prpsetInfo');
          var modelid = 0;

          btn.addEventListener("click", (e) => {
            playimg.setAttribute('material', 'opacity', '1');
            playbtn.removeAttribute('src' , './img/pause.png');
            if(taskScheduler.isPlaying()){
              taskScheduler.stop();
              taskScheduler.play();
              ifcLoader.ifcManager.removeSubset(modelid, mat);
              prpPanel.setAttribute('visible', 'false');
            } 
            else{
              taskScheduler.stop();
              taskScheduler.play();
            }
          });
        }
      });   
      
     // w 버튼
     AFRAME.registerComponent("wcomponent", {
      init: function() {
      var player = document.querySelector("#a_world");
      var btn = document.querySelector("#wbtn");
      var cam = document.querySelector("#camera");
      
      btn.addEventListener("click", (e)=>{
          var pos = player.getAttribute("position");
          var camDir = new Vector3(0,0,1);
          camDir.transformDirection(cam.object3D.matrixWorld);   
          camDir.multiplyScalar(5);
          pos.add(camDir);
          player.setAttribute("position", pos);
      });
      }
      });

      // s 버튼
      AFRAME.registerComponent("scomponent", {
          init: function() {
          var player = document.querySelector("#a_world");
          var btn = document.querySelector("#sbtn");
          var cam = document.querySelector("#camera");
          
          btn.addEventListener("click", (e)=>{
              var pos = player.getAttribute("position");
              var camDir = new Vector3(0,0,-1);
              camDir.transformDirection(cam.object3D.matrixWorld);   
              camDir.multiplyScalar(5);
              pos.add(camDir);
              player.setAttribute("position", pos);
          });
          }
      });

      // a 버튼
      AFRAME.registerComponent("acomponent", {
          init: function() {
          var player = document.querySelector("#a_world");
          var btn = document.querySelector("#abtn");
          var cam = document.querySelector("#camera");
          
          btn.addEventListener("click", (e)=>{
            var pos = player.getAttribute("position");
            var camDir = new Vector3(1,0,0);
            camDir.transformDirection(cam.object3D.matrixWorld);   
            camDir.multiplyScalar(5);
            pos.add(camDir);
            player.setAttribute("position", pos);
          });
          }
      });

      // d 버튼
      AFRAME.registerComponent("dcomponent", {
          init: function() {
          var player = document.querySelector("#a_world");
          var btn = document.querySelector("#dbtn");
          var cam = document.querySelector("#camera");
          
          btn.addEventListener("click", (e)=>{
            var pos = player.getAttribute("position");
            var camDir = new Vector3(-1,0,0);
            camDir.transformDirection(cam.object3D.matrixWorld);   
            camDir.multiplyScalar(5);
            pos.add(camDir);
            player.setAttribute("position", pos);
          });
          }
      });

        var zbtn = -30;
        var xbtn = -10;
        var ybtn = -8;

      // up 버튼
      AFRAME.registerComponent("upcomponent", {
      init: function() {
      var player = document.querySelector("#a_world");
      var btn = document.querySelector("#upbtn");
      var cam = document.querySelector("#camera");
          
      btn.addEventListener("click", (e)=>{
            var pos = player.getAttribute("position");
            var camDir = new Vector3(0,1,0);
          camDir.transformDirection(cam.object3D.matrixWorld);   
          camDir.multiplyScalar(5);
          pos.add(camDir);
          
          ybtn += -2.8;
          pos = {x: pos.x, y:ybtn, z: pos.z}
          player.setAttribute("position", pos);
      });
      }
      });

      // down 버튼
      AFRAME.registerComponent("dncomponent", {
          init: function() {
          var player = document.querySelector("#a_world");
          var btn = document.querySelector("#dnbtn");
          var cam = document.querySelector("#camera");
          
          btn.addEventListener("click", (e)=>{
              var pos = player.getAttribute("position");
              var camDir = new Vector3(0,-1,0);
              camDir.transformDirection(cam.object3D.matrixWorld);   
              camDir.multiplyScalar(5);
              pos.add(camDir);

              ybtn += 2.8;
              pos = {x: pos.x, y:ybtn, z: pos.z}
              player.setAttribute("position", pos);
          });
          }
      });

      // 정보 on/off 버튼
      AFRAME.registerComponent('show-info', {
        init: function () {
        var btn = document.querySelector("#onoffbtn");
        var progressPanel = document.querySelector("#progress_panel");
        var infoPanel = document.querySelector("#property-panel");     
        var playbox = document.querySelector("#playbtn");     
        var rewindbox = document.querySelector("#rewindbtn");     
        var wbox = document.querySelector("#wbtn");     
        var sbox = document.querySelector("#sbtn");     
        var abox = document.querySelector("#abtn");
        var dbox = document.querySelector("#dbtn");
        var upbox = document.querySelector("#upbtn");
        var dnbox = document.querySelector("#dnbtn");
        var visibleimg = document.querySelector('#visibleimg');
        var panel = document.querySelector('#panel');
        var prpset = document.querySelector('#prpsetInfo');

        var visible = true
        btn.addEventListener("click", (e) => {   
            if(visible) {
              visible = false

              progressPanel.setAttribute('visible', "false");
              infoPanel.setAttribute('visible', "false");
              visibleimg.setAttribute('material', 'opacity', '0');
              btn.setAttribute('src', './img/blind.png');
              playbox.setAttribute('visible', "false");
              rewindbox.setAttribute('visible', "false");
              wbox.setAttribute('visible', "false");
              sbox.setAttribute('visible', "false");
              abox.setAttribute('visible', "false");
              dbox.setAttribute('visible', "false");
              upbox.setAttribute('visible', "false");
              dnbox.setAttribute('visible', "false");
              panel.setAttribute('visible', "false");
              prpset.setAttribute('visible', "false");
            }
            else {
              visible = true

              progressPanel.setAttribute('visible', "true");
              infoPanel.setAttribute('visible', "true");
              visibleimg.setAttribute('material', 'opacity', '1');
              btn.removeAttribute('src', './img/blind.png');
              playbox.setAttribute('visible', "true");
              rewindbox.setAttribute('visible', "true");
              wbox.setAttribute('visible', "true");
              sbox.setAttribute('visible', "true");
              abox.setAttribute('visible', "true");
              dbox.setAttribute('visible', "true");
              upbox.setAttribute('visible', "true");
              dnbox.setAttribute('visible', "true");
              panel.setAttribute('visible', "true");
              prpset.setAttribute('visible', "true");
            }
          });
        }
      });