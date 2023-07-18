/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-12 19:09:00
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-12 23:45:53
 * @FilePath: \WEB_practice\scripts\log.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


function checkUsername() {
    if (!$("#log_user").val()) {
        $("#log_user").attr("placeholder", "用户名不能为空");
        $("#log_user").addClass("on");
        $("#log_user").css("border-bottom", "1px solid #FF5722");
        return false;
    } else {
        $("#log_user").attr("placeholder", "用户名");
        $("#log_user").removeClass("on");
        $("#log_user").css("border-bottom", "1px solid #e6e6e6");
        return true;
    }
}

function checkPassword() {
    if (!$("#log_passwd").val()) {
        $("#log_passwd").attr("placeholder", "密码不能为空");
        $("#log_passwd").addClass("on");
        $("#log_passwd").css("border-bottom", "1px solid #FF5722");
        return false;
    } else {
        $("#log_passwd").attr("placeholder", "密码");
        $("#log_passwd").removeClass("on");
        $("#log_passwd").css("border-bottom", "1px solid #e6e6e6");
        return true;
    }
}

function validateForm() {
    checkPassword();
    checkUsername();
    if(checkPassword() && checkUsername()) {
        return true;
    } else {    
        return false;
    }
}

// 失去焦点绑定
$("#log_user").blur(checkUsername);
$("#log_passwd").blur(checkPassword);