;(function () {
    let _global;

    function canvasProgress(option) {
        var _self = this;
        _self.str = option.str;
        _self.fontSize = typeof option.fontSize !== "undefined" ? option.fontSize : 70;
        _self.lineWidth = typeof option.lineWidth !== "undefined" ? option.lineWidth : 0;
        _self.radius = typeof option.radius !== "undefined" ? option.radius : 0;
        _self.re_strokeStyle = typeof option.re_strokeStyle !== "undefined" ? option.re_strokeStyle : "#ff7800";//画笔剩余数量颜色
        _self.over_strokeStyle = typeof option.over_strokeStyle !== "undefined" ? option.over_strokeStyle : "#ffdec0";//画笔已用数量颜色
        _self.fillStyle = typeof option.fillStyle !== "undefined" ? option.fillStyle : "#ff7800";//文字画笔颜色
        _self.anti = !option.anti ? false : true;//默认为false顺时针，true为逆时针
        _self.radio = typeof option.radio !== "undefined" ? option.radio : 3;//圆圈系数,默认为3，即是底部两边都缺少0.15的弧度
        // _self.circleX = 0;
        // _self.circleY = 0;
        // _self.percent = 0;
        _self.percentArr = [];
        _self.addprocessArr = [];
        _self.circleLoading = {};
        _self.init();
        return _self;
    };
    canvasProgress.prototype = {
        init() {
            var _self = this;
            [].forEach.call(document.querySelectorAll(_self.str), (item, index) => {
                item.setAttribute("id", _self.str + index);
                var canvas = document.getElementById(_self.str + index);
                var ctx = canvas.getContext("2d");
                _self.dataInit(canvas);
                _self.addprocessArr.push(0);
                _self.circleLoading[index] = null;
                _self.loading(ctx, index);
            });
        },
        dataInit(canvas) {
            var _self = this;
            var process = typeof canvas.dataset.process == "undefined" ? 0 : canvas.dataset.process;
            canvas.width = 300;
            canvas.height = 300;
            _self.percentArr.push(parseInt(process));
            canvas.style.borderRadius = '50%';
            _self.circleX = canvas.width / 2;
            _self.circleY = canvas.height / 2;
            _self.radius = _self.ifSM() && _self.inSdk() ? canvas.width / 2 - 10 : canvas.width / 2;
            _self.lineWidth = document.body.offsetWidth < 300 ? 12 : 20;
        },
        ifSM() {
            return (navigator.userAgent.indexOf("SM-N7506V") !== -1);
        },
        inSdk() {
            return typeof window.androidtojs !== "undefined" ? true : false;
        },
        circle(ctx, cx, cy, r) {
            var _self = this;
            //画原始进度圆
            ctx.beginPath();
            //ctx.moveTo(cx + r, cy);
            ctx.lineWidth = _self.lineWidth;
            ctx.strokeStyle = _self.re_strokeStyle;
            // ctx.arc(cx, cy, r, Math.PI * 2.35, Math.PI * 0.65, true);
            // ctx.arc(cx, cy, r, 0, 2 * Math.PI)
            // _self.anti ? ctx.arc(cx, cy, r, Math.PI * 2.35, Math.PI * 0.65, _self.anti) :
            ctx.arc(cx, cy, r, Math.PI * (2.5 - 0.05 * _self.radio), Math.PI * (0.5 + 0.05 * _self.radio), true);
            ctx.stroke();
        },
        sector(ctx, cx, cy, r, startAngle, endAngle) {
            var _self = this;
            ctx.beginPath();
            ctx.lineWidth = _self.lineWidth;
            ctx.strokeStyle = _self.over_strokeStyle;
            var degRadio = parseFloat(((2.5 - 0.05 * _self.radio) - (0.5 + 0.05 * _self.radio)) / 100);
            //顺时针的时候数据不用修改
            // debugger
            /* _self.anti ? ctx.arc(cx, cy, r, 2.35 * Math.PI, (2.35 - 0.017 * endAngle) * Math.PI, _self.anti) :
                 ctx.arc(cx, cy, r, 0.65 * Math.PI, (0.65 + 0.017 * endAngle) * Math.PI, _self.anti);*/
            _self.anti ? ctx.arc(cx, cy, r, (2.5 - 0.05 * _self.radio) * Math.PI, ((2.5 - 0.05 * _self.radio) - degRadio * endAngle) * Math.PI, _self.anti) :
                ctx.arc(cx, cy, r, (0.5 + 0.05 * _self.radio) * Math.PI, ((0.5 + 0.05 * _self.radio) + degRadio * endAngle) * Math.PI, _self.anti);
            ctx.stroke();
        },
        loading(ctx, index) {
            var _self = this;
            ctx.clearRect(0, 0, _self.circleX * 2, _self.circleY * 2);
            ctx.font = _self.fontSize + 'px Microsoft YaHei';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = _self.fillStyle;
            ctx.fillText("剩余", _self.circleX, _self.fontSize > 70 ? _self.circleY - 40 : _self.circleY - 40 - (_self.fontSize - 70));
            ctx.fillText(parseFloat(100 - parseFloat(_self.addprocessArr[index])).toFixed(0) + '%', _self.circleX, _self.circleY + 30);
            _self.circle(ctx, _self.circleX, _self.circleY, _self.radius);
            _self.sector(ctx, _self.circleX, _self.circleY, _self.radius, Math.PI * 2 / 5, _self.addprocessArr[index]);

            if (parseInt(_self.addprocessArr[index]) >= 100 - _self.percentArr[index]) {
                clearInterval(_self.circleLoading[index]);
            } else {
                _self.addprocessArr.splice(index, 1, parseInt(_self.addprocessArr[index]) + 1);
                _self.circleLoading[index] = setTimeout(() => {
                    _self.loading(ctx, index);
                }, 20)
            }
        }

    };

    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = canvasProgress;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return canvasProgress;
        });
    } else {
        !('canvasProgress' in _global) && (_global.canvasProgress = canvasProgress);
    }
}())




