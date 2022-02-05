/*!
* Start Bootstrap - New Age v6.0.5 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Submit form
    document.querySelector("#contactForm").onsubmit = function (e) {
        e.preventDefault();

        let msgOj = document.querySelector(".msg")

        let fullnameOj = document.querySelector("input[name='name']")
        let emailOj = document.querySelector("input[name='email']")
        let phoneOj = document.querySelector("input[name='phone']")
        let messageOj = document.querySelector("textarea[name='message']")

        let fullname = fullnameOj.value;
        let email = emailOj.value;
        let phone = phoneOj.value;
        let message = messageOj.value;

        //reset arlet
        msgOj.innerText = "";
        //reset required
        let requiredOj = document.querySelectorAll(".required")
        if(requiredOj.length>0){
            requiredOj.forEach(function(item){
                item.innerText = "";
            })
        }

        let errors = {};
            if(fullname.trim()==""){
                errors[fullname] = "この必須項目を入力してください。";
                fullnameOj.parentElement.querySelector(".required").innerHTML = errors[fullname];
            }
            if(email.trim()==""){
                errors[email] = "この必須項目を入力してください。";
                emailOj.parentElement.querySelector(".required").innerHTML = errors[email];
            }
            if(phone.trim()==""){
                errors[phone] = "この必須項目を入力してください。";
                phoneOj.parentElement.querySelector(".required").innerHTML = errors[phone];
            }
            if(message.trim()==""){
                errors[message] = "この必須項目を入力してください。";
                messageOj.parentElement.querySelector(".required").innerHTML = errors[message];
            }

            if(Object.keys(errors).length==0){
                let data = {
                    "entry.307525553" : fullname,
                    "entry.1364572112" : email,
                    "entry.513228566" : phone,
                    "entry.1804316590" : message
                }

                let queryString = new URLSearchParams(data);
                queryString = queryString.toString();

                let xhr = new XMLHttpRequest();
                xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSenHzjO5nI8eeaqv2gX7MGdFbQkIAXoj9CEGJW5qiVMZ_HgZw/formResponse', true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                msgOj.innerHTML = '<div class="msg arlet arlet-success text-center">ありがとうございます。すぐ連絡いたします。</div>';
                arlet("ありがとうございます。すぐ連絡いたします。")
                //reset fuild
                fullnameOj.value = "";
                emailOj.value = "";
                phoneOj.value = "";
                messageOj.value = "";

                xhr.send(queryString);
            }else{
                msgOj.innerHTML = '<div class="msg arlet arlet-danger text-center">すべての必須項目に入力してください。</div>';
            }
    }

});
