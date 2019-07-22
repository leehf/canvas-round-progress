# canvas-round-progress

	A circular progress bar drawn by canvas that can be used to correlate the number of items left or the progress bar
 ***

# install

###### 安装和调用
	 		
*  npm i canvas-round-progress  
	* [通过npm安装后的调用方式：](#an)
	
*  直接下载js并直接引入： 
	* [直接下载index.js后：](#zj)
 ___



 # canvas Taget：

	HTML5标签：<canvas class="canvas" data-process="50"></canvas>

 # 调用方式：                                                            <br/>
 * <span id='an'>通过npm安装后的调用方式：</span>
 	* 调用方式
 	
    		import引入：import canvas from 'canvas-round-progress'
                  new canvas({
                    anti: true,
                    str: "canvas",
                    radio: 10,
                    fontSize: 60,
                    lineWidth: 5,
                    fillStyle: "#424042",
                    re_strokeStyle: "#9FF729",
                    over_strokeStyle: "#e5e5e5"
              })

 	
  * <span id="zj">直接js引入调用方式：</span> 直接js引入：< script src='canvas-round-progress.js'>< /script>  
 	* 默认调用方式：  <br/>

			 new progress({
              str: ".canvas"
               });
	 * 参数修改调用方式：

   			 new progress({
                anti: true,
                str: ".canvas",
                radio: 0,
                fontSize: 60,
                lineWidth: 5,
                fillStyle: "#424042",
                re_strokeStyle:"#9FF729",
                over_strokeStyle:"#e5e5e5"
               })
# param

<table >
            <tbody>
                <tr>
                    <th>参数名</th>
                    <th>参数值</th>
                </tr>
                <tr>
                    <td>str</td>
                    <td>canvas选择器，处于列表中或者单个都可以</td>
                </tr>
                <tr>
                    <td>anti</td>
                    <td>默认false，进度条逆时针转动，为true时表示进度条顺时针转动</td>
                </tr>
                <tr>
                    <td>radius</td>
                    <td>canvas arc方法画圆其实点，默认为0中心圆点</td>
                </tr>
                <tr>
                    <td>lineWidth</td>
                    <td>canvas画笔粗细值</td>
                </tr>
                <tr>
                    <td>re_strokeStyle</td>
                    <td>进度条剩余数百分比的 canvas剩余进度条颜色</td>
                </tr>
                <tr>
                    <td>over_strokeStyle</td>
                    <td>进度条已使用数百分比的 canvas已用进度条颜色</td>
                </tr>
                <tr>
                    <td>fillStyle</td>
                    <td>canvas 文字填充颜色</td>
                </tr>
            </tbody>
        </table>


 	进度条已使用数 放置canvas元素的data-process中，如不写则默认为剩余数为0
___

# 访问DEMO地址：
* <a href="https://leehf.github.io/canvas-round-progress/dist" >canvas-round-progress效果展示</a>
* <a href="https://www.npmjs.com/package/canvas-round-progress" >npm下载 </a>
___

