"use strict";!function(){function e(e){var t=this;return t.str=e.str,t.fontSize="undefined"!=typeof e.fontSize?e.fontSize:70,t.lineWidth="undefined"!=typeof e.lineWidth?e.lineWidth:0,t.radius="undefined"!=typeof e.radius?e.radius:0,t.re_strokeStyle="undefined"!=typeof e.re_strokeStyle?e.re_strokeStyle:"#ff7800",t.over_strokeStyle="undefined"!=typeof e.over_strokeStyle?e.over_strokeStyle:"#ffdec0",t.fillStyle="undefined"!=typeof e.fillStyle?e.fillStyle:"#ff7800",t.anti=e.anti?!0:!1,t.radio="undefined"!=typeof e.radio?e.radio:3,t.textFlag=e.textFlag?!0:!1,t.reduceFlag=e.reduceFlag?!0:!1,t.reduceText="undefined"!=typeof e.reduceText?e.reduceText:"剩余",t.numFlag=e.numFlag?!0:!1,t.percentArr=[],t.addprocessArr=[],t.circleLoading={},t.init(),t}var t=void 0;e.prototype={init:function(){var e=this;[].forEach.call(document.querySelectorAll(e.str),function(t,r){t.setAttribute("id",e.str+r);var i=document.getElementById(e.str+r),n=i.getContext("2d");e.dataInit(i),e.addprocessArr.push(0),e.circleLoading[r]=null,e.loading(n,r)})},dataInit:function(e){var t=this,r="undefined"==typeof e.dataset.process?0:e.dataset.process;e.width=300,e.height=300,t.percentArr.push(parseInt(r)),e.style.borderRadius="50%",t.circleX=e.width/2,t.circleY=e.height/2,t.radius=t.ifSM()&&t.inSdk()?e.width/2-10:e.width/2,t.lineWidth=document.body.offsetWidth<300?12:20},ifSM:function(){return-1!==navigator.userAgent.indexOf("SM-N7506V")},inSdk:function(){return"undefined"!=typeof window.androidtojs?!0:!1},circle:function(e,t,r,i){var n=this;e.beginPath(),e.lineWidth=n.lineWidth,e.strokeStyle=n.re_strokeStyle,e.arc(t,r,i,Math.PI*(2.5-.05*n.radio),Math.PI*(.5+.05*n.radio),!0),e.stroke()},sector:function(e,t,r,i,n,d){var o=this;e.beginPath(),e.lineWidth=o.lineWidth,e.strokeStyle=o.over_strokeStyle;var a=parseFloat((2.5-.05*o.radio-(.5+.05*o.radio))/100);o.anti?e.arc(t,r,i,(2.5-.05*o.radio)*Math.PI,(2.5-.05*o.radio-a*d)*Math.PI,o.anti):e.arc(t,r,i,(.5+.05*o.radio)*Math.PI,(.5+.05*o.radio+a*d)*Math.PI,o.anti),e.stroke()},loading:function(e,t){var r=this;e.clearRect(0,0,2*r.circleX,2*r.circleY),e.font=r.fontSize+"px Microsoft YaHei",e.textAlign="center",e.textBaseline="middle",e.fillStyle=r.fillStyle,r.textFlag||(!r.reduceFlag&&e.fillText(r.reduceText,r.circleX,r.fontSize>70?r.circleY-40:r.circleY-40-(r.fontSize-70)),!r.numFlag&&e.fillText(parseFloat(100-parseFloat(r.addprocessArr[t])).toFixed(0)+"%",r.circleX,r.reduceFlag?r.circleY:r.circleY+30)),r.circle(e,r.circleX,r.circleY,r.radius),r.sector(e,r.circleX,r.circleY,r.radius,2*Math.PI/5,r.addprocessArr[t]),parseInt(r.addprocessArr[t])>=100-r.percentArr[t]?clearInterval(r.circleLoading[t]):(r.addprocessArr.splice(t,1,parseInt(r.addprocessArr[t])+1),r.circleLoading[t]=setTimeout(function(){r.loading(e,t)},20))}},t=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):!("canvasProgress"in t)&&(t.canvasProgress=e)}();