# canvas 画的圆形进度条

>一个canvas 画的圆形进度条

#可以使用
 * 安装：npm i canvas-round-progress

<table border="1">
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
                    <td>>fillStyle</td>
                    <td>canvas 文字填充颜色</td>
                </tr>
            </tbody>
<<<<<<< HEAD
        </table>
 *	进度条已使用数 放置canvas元素的data-process中                                 <br/>
=======
        </table>  
 *	进度条已使用数 放置canvas元素的data-process中
 ****
>>>>>>> e58f84e10081c45e04e3edd47e73bad829441c24
 *
 *
 *
 *
<<<<<<< HEAD
 #canvas元素demo：                                                                                 <br/>
  * <canvas class="canvas" data-process="50"></canvas>                                                                   <br/>
                                   <br/>
 #调用方式：                                                            <br/>
 * 默认调用方式：                                                       <br/>
            new progress({                                               <br/>
                          str: ".canvas"                                 <br/>
                      });                                                <br/>
                                                                         <br/>
 * 参数修改调用方式：                                                    <br/>
                 new progress({
                            anti: true,                                         <br/>
                            str: ".canvas",                                     <br/>
                            radio: 0,                                           <br/>
                            fontSize: 60,                                       <br/>
                            lineWidth: 5,                                       <br/>
                            fillStyle: "#424042",                               <br/>
                            re_strokeStyle:"#9FF729",                           <br/>
                            over_strokeStyle:"#e5e5e5"                          <br/>
                        })
=======
****
 #canvas元素demo：   
  * <canvas class="canvas" data-process="50"></canvas>    
****
 #调用方式：   
 * 默认调用方式：  
            new progress({  
                          str: ".canvas"   
                      });    
****   
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
>>>>>>> e58f84e10081c45e04e3edd47e73bad829441c24


# 访问DEMO地址：
<a href="https://leehf.github.io/canvas-round-progress/" >点击访问</a>
