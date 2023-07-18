
// 验证码生成
var canvas = document.getElementById("canvas"); //演员
var context = canvas.getContext("2d"); //舞台，getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
var button = document.getElementById("reg_btn"); //获取按钮
var input = document.getElementById("reg_code"); //获取输入框
var num //定义容器接收验证码
draw();
canvas.onclick = function () {
    context.clearRect(0, 0, 120, 40); //在给定的矩形内清除指定的像素
    draw();
}

// 随机颜色函数
function getColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function draw() {
    context.strokeRect(0, 0, 120, 40); //绘制矩形（无填充）
    var aCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    // 绘制字母
    var arr = [] //定义一个数组用来接收产生的随机数
    for (var i = 0; i < 4; i++) {
        var x = 20 + i * 20; //每个字母之间间隔20
        var y = 20 + 10 * Math.random(); //y轴方向位置为20-30随机
        var index = Math.floor(Math.random() * aCode.length); //随机索引值
        var txt = aCode[index];
        context.font = "bold 20px 微软雅黑"; //设置或返回文本内容的当前字体属性
        context.fillStyle = getColor(); //设置或返回用于填充绘画的颜色、渐变或模式，随机
        context.translate(x, y); //重新映射画布上的 (0,0) 位置，字母不可以旋转移动，所以移动容器
        var deg = 90 * Math.random() * Math.PI / 180; //0-90度随机旋转
        context.rotate(deg); // 	旋转当前绘图
        context.fillText(txt, 0, 0); //在画布上绘制“被填充的”文本
        context.rotate(-deg); //将画布旋转回初始状态
        context.translate(-x, -y); //将画布移动回初始状态
        arr[i] = txt //接收产生的随机数
    }
    num = arr[0] + arr[1] + arr[2] + arr[3] //将产生的验证码放入num
    // 绘制干扰线条
    for (var i = 0; i < 8; i++) {
        context.beginPath();
        context.moveTo(Math.random() * 120, Math.random() * 40);
        context.lineTo(Math.random() * 120, Math.random() * 40);
        context.strokeStyle = getColor();
        context.stroke();
    }
    // 绘制干扰点，和上述步骤一样，此处用长度为1的线代替点
    for (var i = 0; i < 20; i++) {
        context.beginPath();
        var x = Math.random() * 120;
        var y = Math.random() * 40;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.strokeStyle = getColor();
        context.stroke();
    }

    // //点击按钮验证
    // button.onclick = function () {
    //     var text = input.value; //获取输入框的值
    //     if (text === num) {
    //         alert('验证通过')
    //     } else {
    //         alert('验证失败')
    //     }
    // }

}

function validateCode() {
    var text = $("#reg_code").val(); //获取输入框的值
    if (text === num) {
        $("#reg_code").attr("placeholder", "验证码错误");
        $("#reg_code").addClass("on");
        $("#reg_code").css("border-bottom", "1px solid #e6e6e6");
        $("#reg_code").css("color", "#e6e6e6");
        return true;
    } else {
        $("#reg_code").attr("placeholder", "验证码");
        $("#reg_code").addClass("on");
        $("#reg_code").css("border-bottom", "1px solid #FF5722");
        $("#reg_code").css("color", "#FF5722");
        return false;
    }

}

// 输入框判断
function checkUsername() {
    var userNameReg = /^[\w\d_]{6,18}$/;
    var result;
    if ($("#reg_user").val()) {
        result = userNameReg.test($("#reg_user").val());
        if (!result) {
            $("#reg_user").attr("placeholder", "用户名为6-18位数字、字母、下划线");
            $("#reg_user").addClass("on");
            $("#reg_user").css("border-bottom", "1px solid #FF5722");
            $("#reg_user").css("color", "#FF5722");
        } else {
            $("#reg_user").attr("placeholder", "用户名");
            $("#reg_user").removeClass("on");
            $("#reg_user").css("border-bottom", "1px solid #e6e6e6");
            $("#reg_user").css("color", "#e6e6e6");
        }
    } else {

        result = false;
    }
    return result;
}

function checkPassword() {
    var passwordReg = /^[\w\d_]{6,18}$/;
    var result;
    if ($("#reg_passwd").val()) {
        result = passwordReg.test($("#reg_passwd").val());
        if (!result) {
            $("#reg_passwd").attr("placeholder", "密码为6-18位数字、字母、下划线");
            $("#reg_passwd").addClass("on");
            $("#reg_passwd").css("border-bottom", "1px solid #FF5722");
            $("#reg_passwd").css("color", "#FF5722");
        } else {
            $("#reg_passwd").attr("placeholder", "密码");
            $("#reg_passwd").removeClass("on");
            $("#reg_passwd").css("border-bottom", "1px solid #e6e6e6");
            $("#reg_passwd").css("color", "#e6e6e6");
        }
    } else {
        result = false;
    }

    return result;
}

function checkAgaPassword() {
    var result;
    if ($("#reg_aga_passwd").val()) {
        if ($("#reg_aga_passwd").val() == $("#reg_passwd").val()) {
            result = true;
        } else {
            result = false;
        }
    } else {
        //密码框为空不做判断
        result = true;
    }
    if (!result) {
        $("#reg_aga_passwd").attr("placeholder", "两次密码不一致");
        $("#reg_aga_passwd").addClass("on");
        $("#reg_aga_passwd").css("border-bottom", "1px solid #FF5722");
        $("#reg_aga_passwd").css("color", "#FF5722");

    } else {
        $("#reg_aga_passwd").attr("placeholder", "确认密码");
        $("#reg_aga_passwd").removeClass("on");
        $("#reg_aga_passwd").css("border-bottom", "1px solid #e6e6e6");
        $("#reg_aga_passwd").css("color", "#e6e6e6");

    }
    return result;
}

function checkMailbox() {
    var mailReg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
    var result;
    if ($("#reg_mail").val()) {
        result = mailReg.test($("#reg_mail").val());
        if (!result) {
            $("#reg_mail").attr("placeholder", "邮箱格式不正确");
            $("#reg_mail").addClass("on");
            $("#reg_mail").css("border-bottom", "1px solid #FF5722");
            $("#reg_mail").css("color", "#FF5722");
        } else {
            $("#reg_mail").attr("placeholder", "邮箱");
            $("#reg_mail").removeClass("on");
            $("#reg_mail").css("border-bottom", "1px solid #e6e6e6");
            $("#reg_mail").css("color", "#e6e6e6");
        }
    } else {
        result = true;
    }
    return result;
}

// 失去焦点绑定
$("#reg_user").blur(checkUsername);
$("#reg_passwd").blur(checkPassword);
$("#reg_aga_passwd").blur(checkAgaPassword);
$("#reg_mail").blur(checkMailbox);
$("#reg_code").blur(validateCode)



function validateForm() {
    checkUsername();
    checkPassword();
    checkAgaPassword();
    checkMailbox();
    validateCode();
    var result = checkUsername() && checkPassword() && checkAgaPassword() && checkMailbox() && validateCode();
    return result;
}


