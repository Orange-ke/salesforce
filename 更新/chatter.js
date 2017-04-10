$(function() {
  "use strict";
      var i = 2, k = 0, k_ = 0, y = 0,text = '',quote = '' ,choices = [], new_choices = [],m = -2,z = -1, n_ = 0,p = 0, _n = 0;

      $(".share_ button").prop("disabled",true);
      $(".ask_ button").prop("disabled",true);

      function focus_() {
       $(".textarea").focus();
      }
      function blur_() {
       $(".textarea").blur();
      }

      $("#new_activity_search_").focus(function() {
        $(this).animate({width: "500px"});
      })

      $("#new_activity_search_").blur(function() {
        $(this).animate({width: "200px"});
      })

      function judge() {
        quote = $(".quote__ input").val();
        var _choice = $(".part_ input").val();
        if (quote === "" || _choice === "") {
         $(".ask_ button").prop("disabled",true);
        } else {
         $(".ask_ button").prop("disabled",false);
        }
      }

      $(".add_").click(function() {
        i += 1;
        var new_ = $("<div>",{"class":"part_"});
        new_.html("<div><label for='choice2'>选项" + i + "</label></div><div><input type='text' name='choice2' class='form-control' style='width: 100%'></div>");
        new_.insertBefore($(".add_"))
      });

      $(".textarea").bind("input propertychange",function() {
        text = $(this).text();
        console.log(text);
        if (text === "") {
          $(".share_ button").prop("disabled",true);
        } else {
          $(".share_ button").prop("disabled",false);
        }
      });

      $(".quote__ input").bind("input propertychange",judge);
      $(".part_ input").bind("input propertychange",judge);

      function sum_choices() {
        choices = $(".part_ input");
        for (var j = 0; j < choices.length; j++) {
          var choices_text = choices[j].value;
          new_choices.push(choices_text);
        }
      }          

      $(".textarea").focus(function() {
        $(this).prop("rows","5").addClass("onfocus").css("height","150px");
        $(".typeface_ , .format_").addClass("active_edit");
      });

      $(".textarea").blur(function() {
        $(this).removeClass("onfocus");
      });

      $(".share_ button").click(function(event) {
        event.preventDefault();
        p += 1;
        var text_ = "<div class='publish_content floatfix'><img src='img/T.png' class='portrait'><a href='#' class='name_' style='font-size: 1.2em;'>Name</a><br><span class='time' id='time1" + p + "'>time</span><div style='width: auto;height: auto' class='post_content'>" + text + "</div><div class='choice_'><a class='like1'><span class='glyphicon glyphicon-heart-empty'></span><span class='choices'>赞</span></a><a class='comment1' href='#___" + p + "'><span class='glyphicon glyphicon-bookmark'></span><span class='choices'>留言</span></a><a class='#'><span class='glyphicon glyphicon-share'></span><span class='choices'>分享</span></a></div><div class='massage_1'><div id='origin1' style='margin-bottom: 15px;'></div><div class='massage_5'><img src='img/T.png' class='portrait_sm'><input id='___" + p + "' type='text' name='massage' placeholder='留言...' class='form-control'><div><button id='massage_up_' class='btn btn-info massage_up_btn_'>留言</button></div></div></div>";

        $(".publish_area").prepend(text_);

          var result;
          var minute = 1000 * 60;
          var hour = minute * 60;
          var day = hour * 24;
          var halfamonth = day * 15;
          var month = day * 30;
          var dateTimeStamp = new Date().getTime();
          function getDateDiff() {
            var now = new Date().getTime();
            var diffValue = now - dateTimeStamp;
            if(diffValue < 0){
               alert("结束日期不能小于开始日期！");
             }
            var monthC =diffValue/month;
            var weekC =diffValue/(7*day);
            var dayC =diffValue/day;
            var hourC =diffValue/hour;
            var minC =diffValue/minute;
            if(monthC>=1){
             result="发表于" + parseInt(monthC) + "个月前";
             }
             else if(weekC>=1){
             result="发表于" + parseInt(weekC) + "周前";
             }
             else if(dayC>=1){
             result="发表于"+ parseInt(dayC) +"天前";
             }
             else if(hourC>=1){
             result="发表于"+ parseInt(hourC) +"个小时前";
             }
             else if(minC>=1){
             result="发表于"+ parseInt(minC) +"分钟前";
             }else
             result="刚刚发表";
             return result;
           }
           getDateDiff();
           console.log(result);
           console.log($("#time1" + p));
           $("#time1" + p).text(result);
           var intervalHandle1 = setInterval(function () {
             getDateDiff();
             $("#time1" + p).text(result);
           },60000);

          $("#massage_up_").click(function() { 
            _n += 1;
            var text_ = $("#_" + p).val();
            var text = "<div class='massage_4' style='border: 1px solid #ddd;padding: 10px 0; margin: 15px 0 0 55px;'><img src='img/T.png' class='portrait_sm'><span id='mag_name1" + _n + "' style='font-size: 1.1em;'>Name · </span><span style='font-size:12px;' id='mag_time1" + _n + "'></span><p class='massage_input_con' id='origin_1" + _n +"' style='padding-top: 0;'></p></div>"
            $("#origin1").append(text);
            $("#origin_1" + _n).text(text_);
            var result;
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var halfamonth = day * 15;
            var month = day * 30;
            var dateTimeStamp = new Date().getTime();
            function getDateDiff() {
              var now = new Date().getTime();
              var diffValue = now - dateTimeStamp;
              if(diffValue < 0){
                 alert("结束日期不能小于开始日期！");
               }
              var monthC =diffValue/month;
              var weekC =diffValue/(7*day);
              var dayC =diffValue/day;
              var hourC =diffValue/hour;
              var minC =diffValue/minute;
              if(monthC>=1){
               result="发表于" + parseInt(monthC) + "个月前";
               }
               else if(weekC>=1){
               result="发表于" + parseInt(weekC) + "周前";
               }
               else if(dayC>=1){
               result="发表于"+ parseInt(dayC) +"天前";
               }
               else if(hourC>=1){
               result="发表于"+ parseInt(hourC) +"个小时前";
               }
               else if(minC>=1){
               result="发表于"+ parseInt(minC) +"分钟前";
               }else
               result="刚刚发表";
               return result;
             }
             getDateDiff();
             $("#mag_time1" + _n).text(result);
             var intervalHandle4 = setInterval(function () {
               getDateDiff();
               $("#mag_time1" + _n).text(result);
             },60000);  
           })

           $(".like1").click(function () {
             if ($(this).children(".glyphicon").hasClass("glyphicon-heart-empty")) {
               $(this).children(".glyphicon").removeClass("glyphicon-heart-empty").addClass("glyphicon-heart");
               $(this).children(".choices").text("取消赞");
             } else if ($(this).children(".glyphicon").hasClass("glyphicon-heart")) {
               $(this).children(".glyphicon").removeClass("glyphicon-heart").addClass("glyphicon-heart-empty");
               $(this).children(".choices").text("赞");
             }
           })

          $(".comment1").click(function () {
            $("#___" + p).focus();
          })
        
      });

      $(".ask_ button").click(function(event) {
          event.preventDefault();
          sum_choices();
          var id_con = "quote_content",id_para = "quote_para",id_choice_con = "choice_contain",id_choice_con_="choice_contain_", id_send = "send",id_send_btn = "send_btn", id_more = "more", id_massage = "mag_";
          var sum = "",sum_ = "",sum_pro = "",sum_pro_ = "",order_ = '',n = 0;
          for (var x = k ? k_ : 0; x < (k + new_choices.length); x++) {
           console.log(x);        
           var poll = "<div class='_choices_' id='choices_" + x + "'><input class='radio_' type='radio' name='choice' id='__" + x + "'><span id='poll_choice" + x + "'>" + new_choices[n] + "</span></div>";
           var _text = "<div class='poll_con'>" + new_choices[n] + "<span id='poll_qut" + x + "'></span></div><div class='progress' id='progress" + x + "'><div class='progress-bar' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%; background: #51B88A;'><span id='pro_" + n + "'>0%</span><span></span></div></div>";
           n += 1;
           sum += poll;
           sum_pro += _text;
           }
           y += 1;
           console.log(y);
           id_con += y;
           id_para += y;
           id_choice_con += y;
           id_choice_con_ += y;
           id_send += y; 
           id_send_btn += y;
           id_more += y;
           id_massage += y;
           sum_pro_ += "<div id='progress_con" + y + "'>" + sum_pro + "</div>";
           sum_ = "<div class='publish_content floatfix'><img src='img/T.png' class='portrait'><a href='#' class='name_' style='font-size:1.2em;'>Name</a><br><span class='time' id='_" + y + "'>time</span><div class='quote_content' id='" + id_con + "'>" + "<p class='quote_para' id='" + id_para +"'></p><form><div class='choices_' id='" + id_choice_con + "'><div id='" + id_choice_con_ + "'>" + sum + "</div></div><div class='send' id='" + id_send + "'><button type='submit' class='btn btn-info button_con' id='" + id_send_btn + "'>投票</button><span class='more' id='" + id_more + "'>查看详情</span></div></form></div><div class='choice_'><a class='like'><span class='glyphicon glyphicon-heart-empty'></span><span class='choices'>赞</span></a><a class='comment' href='#" + id_massage + "'><span class='glyphicon glyphicon-bookmark'></span><span class='choices'>留言</span></a><a class='#'><span class='glyphicon glyphicon-share'></span><span class='choices'>分享</span></a></div><div class='massage_2' id='origin' style='margin-bottom: 15px;'></div><div class='massage_3'><img src='img/T.png' class='portrait_sm'><input id='" + id_massage + "' type='text' name='massage' placeholder='留言...' class='form-control'><div><button id='massage_up' class='btn btn-info massage_up_btn'>留言</button></div></div></div>";
           $(".publish_area").prepend(sum_);

           var result;
           var minute = 1000 * 60;
           var hour = minute * 60;
           var day = hour * 24;
           var halfamonth = day * 15;
           var month = day * 30;
           var dateTimeStamp = new Date().getTime();
           function getDateDiff() {
             var now = new Date().getTime();
             var diffValue = now - dateTimeStamp;
             if(diffValue < 0){
                alert("结束日期不能小于开始日期！");
              }
             var monthC =diffValue/month;
             var weekC =diffValue/(7*day);
             var dayC =diffValue/day;
             var hourC =diffValue/hour;
             var minC =diffValue/minute;
             if(monthC>=1){
              result="发表于" + parseInt(monthC) + "个月前";
              }
              else if(weekC>=1){
              result="发表于" + parseInt(weekC) + "周前";
              }
              else if(dayC>=1){
              result="发表于"+ parseInt(dayC) +"天前";
              }
              else if(hourC>=1){
              result="发表于"+ parseInt(hourC) +"个小时前";
              }
              else if(minC>=1){
              result="发表于"+ parseInt(minC) +"分钟前";
              }else
              result="刚刚发表";
              return result;
            }
            getDateDiff();
            $("#_" + y).text(result);
            var intervalHandle1 = setInterval(function () {
              getDateDiff();
              $("#_" + y).text(result);
            },60000);

           document.getElementById(id_para).innerHTML = quote;
           $("#" + id_choice_con).append(sum_pro_);
           $("#progress_con" + y).hide();
           k_ += choices.length;
           k = k_;
           new_choices = [];
           $("#" + id_send_btn).prop("disabled",true);
           $(".radio_").click(function () {
             if ($(this).prop("checked")) {
              $("#" + id_send_btn).prop("disabled",false);
            }
           })
           $("#" + id_send_btn).click(function(event) {
              m += 2;
              z += 2;
              console.log(m,z);
              event.preventDefault();
              var a = 0, b = 0 , t = 0;
              t += 1;
              $(this).hide();
              $("#progress_con" + y).show();
              if ($("#__" + m).prop('checked')) {
               a += 1;
               console.log(a);
               console.log($("#progress" + m + " div"));
               $("#poll_qut" + m).text("(" + a + ")");
               $("#progress" + m + " div").css('width', a/t*100 + "%").text(a/t*100 + "%");
              } else if ($("#__" + z).prop('checked')) {
               b += 1;
               console.log(b);
               console.log($("#progress" + z + " div"));
               $("#poll_qut" + z).text("(" + b + ")");
               $("#progress" + z + " div").css('width', b/t*100 + "%").text(b/t*100 + "%");  	
              }
              $("#" + id_choice_con_).hide();
           })   
           $("#massage_up").click(function() { 
               n_ += 1;
               var text_ = $("#" + id_massage).val();
               var text = "<div class='massage_4_' style='border: 1px solid #ddd;padding: 10px 0; margin: 15px 0 0 55px;'><img src='img/T.png' class='portrait_sm'><span id='mag_name " + n_ + "' style='font-size: 1.1em;'>Name · </span><span style='font-size:12px;' id='mag_time" + n_ + "'></span><p class='massage_input_con' id='origin_" + n_ +"' style='padding-top: 0;'></p></div>"
               $("#origin").append(text);
               $("#origin_" + n_).text(text_);
               var result;
               var minute = 1000 * 60;
               var hour = minute * 60;
               var day = hour * 24;
               var halfamonth = day * 15;
               var month = day * 30;
               var dateTimeStamp = new Date().getTime();
               function getDateDiff() {
                 var now = new Date().getTime();
                 var diffValue = now - dateTimeStamp;
                 if(diffValue < 0){
                    alert("结束日期不能小于开始日期！");
                  }
                 var monthC =diffValue/month;
                 var weekC =diffValue/(7*day);
                 var dayC =diffValue/day;
                 var hourC =diffValue/hour;
                 var minC =diffValue/minute;
                 if(monthC>=1){
                  result="发表于" + parseInt(monthC) + "个月前";
                  }
                  else if(weekC>=1){
                  result="发表于" + parseInt(weekC) + "周前";
                  }
                  else if(dayC>=1){
                  result="发表于"+ parseInt(dayC) +"天前";
                  }
                  else if(hourC>=1){
                  result="发表于"+ parseInt(hourC) +"个小时前";
                  }
                  else if(minC>=1){
                  result="发表于"+ parseInt(minC) +"分钟前";
                  }else
                  result="刚刚发表";
                  return result;
                }
                getDateDiff();
                $("#mag_time" + n_).text(result);
                var intervalHandle2 = setInterval(function () {
                  getDateDiff();
                  $("#mag_time" + n_).text(result);
                },60000);  
              })

              $(".more").click(function() {

              })

           $(".like").click(function () {
             if ($(this).children(".glyphicon").hasClass("glyphicon-heart-empty")) {
               $(this).children(".glyphicon").removeClass("glyphicon-heart-empty").addClass("glyphicon-heart");
               $(this).children(".choices").text("取消赞");
             } else if ($(this).children(".glyphicon").hasClass("glyphicon-heart")) {
               $(this).children(".glyphicon").removeClass("glyphicon-heart").addClass("glyphicon-heart-empty");
               $(this).children(".choices").text("赞");
             }
           })

          $(".comment").click(function () {
            $("#" + id_massage).focus();
          }) 
          $("#upload_put").change(function(){
            var file = $('#upload_put').get(0).files[0];
            if (file) {
              // var text = 
              var fileSize = 0;
            if (file.size > 1024 * 1024) fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            else fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            console.log(file.name, fileSize, file.type);
          }
      });  

      })

      $("#upload_put_").change(function() {
         var m = 0;
         var file = $('#upload_put_').get(m).files[m];
         if (file) {
           var n = 0 , span_name = "_name", span_size = "_size", span_type = "_type", spanfile_ = "file_" , a_file = "a_file";
           var fileSize = 0;
           var length = $("#upload_file_store a").length;
           n = length;
           console.log(n);
           span_name += n;
           span_size += n;
           span_type += n;
           spanfile_ += n;
           a_file += n;
           var text = "<a style='display: block; width: auto;' href='#' id='" + a_file + "'><span id='" + spanfile_ + "'></span><span id='" + span_name + "'></span><span id='" + span_size + "'></span><span id='" + span_type + "'></span></a>";
           $("#upload_file_store").prepend(text);
           $(".folder_quat .badge").text(length + 1);
           if (n > 2) {
              $("#a_file" + (n - 2)).hide();
           }    
           if (file.size > 1024 * 1024) fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
           else fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
           var fileName = file.name.slice(0,file.name.indexOf("."));
           var fileType = file.name.slice(file.name.indexOf(".") + 1);
           console.log(fileName, fileSize, fileType);
           $("#" + span_name).text(fileName + " · ");
           $("#" + span_size).text(fileSize + " · ");
           $("#" + span_type).text(fileType);
           if (fileType.toLowerCase() == "jpeg" || fileType.toLowerCase() == "jpg") {
               $("#" + spanfile_).addClass("glyphicon glyphicon-picture");
           } else {
               $("#" + spanfile_).addClass("glyphicon glyphicon-question-sign");
           }
         }
      });
})