document.addEventListener("DOMContentLoaded", function() {
    const typingText1 = document.querySelector(".typing-text1");
    const typingText2 = document.querySelector(".typing-text2");
    const typingText3 = document.querySelector(".typing-text3");
    const text1 = typingText1.getAttribute("data-text");
    const text2 = typingText2.getAttribute("data-text");
    const text3 = typingText3.getAttribute("data-text");
    let index = 0;
    let typingInterval;

    function type1() {
        if (index < text1.length) {
            typingText1.textContent += text1.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }

    function startTyping1() {
        typingText1.textContent = '';
        index = 0;
        typingText1.style.width = "auto";
        typingInterval = setInterval(type1, 100);
    }

    function resetTyping() {
        clearInterval(typingInterval);
        typingText1.textContent = '';
        typingText1.style.width = "0";
    }

    typingText1.addEventListener("mouseover", startTyping1);
    typingText1.addEventListener("mouseout", resetTyping);

    function type2() {
        if (index < text2.length) {
            typingText2.textContent += text2.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }

    function startTyping2() {
        typingText2.textContent = '';
        index = 0;
        typingText2.style.width = "auto";
        typingInterval = setInterval(type2, 100);
    }

    function resetTyping() {
        clearInterval(typingInterval);
        typingText2.textContent = '';
        typingText2.style.width = "0";
    }

    typingText2.addEventListener("mouseover", startTyping2);
    typingText2.addEventListener("mouseout", resetTyping);

    function type3() {
        if (index < text3.length) {
            typingText3.textContent += text3.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }

    function startTyping3() {
        typingText3.textContent = '';
        index = 0;
        typingText3.style.width = "auto";
        typingInterval = setInterval(type3, 100);
    }

    function resetTyping() {
        clearInterval(typingInterval);
        typingText3.textContent = '';
        typingText3.style.width = "0";
    }

    typingText3.addEventListener("mouseover", startTyping3);
    typingText3.addEventListener("mouseout", resetTyping);
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = '';
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        let successMessage = "Thank you " . firstName;

        if (!firstName) {
            isValid = false;
            errorMessage += 'First Name is required<br>';
        }

        if (!lastName) {
            isValid = false;
            errorMessage += 'Last Name is required<br>';
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            isValid = false;
            errorMessage += 'Phone Number must be 10 digits, no special characters<br>';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += 'Invalid Email format<br>';
        }

        if (!isValid) {
            event.preventDefault();
            document.getElementById('error').innerHTML = errorMessage;
        }else{
            document.getElementById('success').innerHTML = successMessage;
        }
    });
});