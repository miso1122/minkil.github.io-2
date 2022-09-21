      // // 진행 날짜 관련
      // AFRAME.registerComponent('update-date', {
      //   init: function () { 
      //   },
      //   tick: function (time, timeDelta) {
      //     var e_date = document.querySelector('#id_date');
      //     var e_pt = document.querySelector('#progress_point');

      //     var curDt = taskScheduler.current_date();
      //     var curLoc = taskScheduler.current_loc();

      //     e_date.setAttribute("value", curDt);
      //     let min_x = -0.8;
      //     let max_x = 0.8;

      //     let cur_x = (max_x - min_x) * curLoc + min_x;
      //     e_pt.setAttribute("position", `${cur_x} ${0} ${0}`);
      //   }
      // });    
        
      // // 누적 금액 관련
      // AFRAME.registerComponent('update-cost', {
      //   init: function () { 
      //   },
      //   tick: function (time, timeDelta) {
      //     var e_cost = document.querySelector('#id_cost');
      //     var e_pt = document.querySelector('#progress_point');

      //     var curCt = taskScheduler.current_cost();
      //     var curLoc = taskScheduler.current_loc();

      //     e_cost.setAttribute("value", curCt);
      //     let min_x = -0.8;
      //     let max_x = 0.8;

      //     let cur_x = (max_x - min_x) * curLoc + min_x;
      //     e_pt.setAttribute("position", `${cur_x} ${0} ${0}`);
      //   }
      // }); 


      // min_x값이랑 max_x값 변경 
      // 진행 날짜 관련
      AFRAME.registerComponent('update-date', {
        init: function () { 
        },
        tick: function (time, timeDelta) {
          var e_date = document.querySelector('#id_date');
          var e_pt = document.querySelector('#progress_point');

          var curDt = taskScheduler.current_date();
          var curLoc = taskScheduler.current_loc();

          e_date.setAttribute("value", curDt);
          let min_x = -0.8;
          let max_x = 1.6;

          let cur_x = (max_x - min_x) * curLoc + min_x;
          e_pt.setAttribute("position", `${cur_x} ${0} ${0}`);
        }
      });    
        
      // 누적 금액 관련
      AFRAME.registerComponent('update-cost', {
        init: function () { 
        },
        tick: function (time, timeDelta) {
          var e_cost = document.querySelector('#id_cost');
          var e_pt = document.querySelector('#progress_point');

          var curCt = taskScheduler.current_cost();
          var curLoc = taskScheduler.current_loc();

          e_cost.setAttribute("value", curCt);
          let min_x = -0.8;
          let max_x = 1.6;

          let cur_x = (max_x - min_x) * curLoc + min_x;
          e_pt.setAttribute("position", `${cur_x} ${0} ${0}`);
        }
      }); 

