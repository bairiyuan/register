var form = document.getElementById("register-form");
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
var message = document.getElementById("message");

// 必填项、邮箱格式和密码长度使用 HTML 自带的校验。
form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.className = "";

    if (username.value.trim() === "") {
        message.textContent = "用户名不能只包含空格。";
        username.focus();
        return;
    }

    // 检查两次输入的密码是否相同。
    if (password.value !== confirmPassword.value) {
        message.textContent = "两次输入的密码不一致！";
        confirmPassword.focus();
        return;
    }

    message.textContent = "注册成功！（仅演示，未创建真实账号）";
    message.className = "success";
    form.reset();
});

// 重新填写时，清除上一次的提示。
form.addEventListener("input", function () {
    message.textContent = "";
    message.className = "";
});
