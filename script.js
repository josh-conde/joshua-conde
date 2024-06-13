document.addEventListener("DOMContentLoaded", function() {
    function type(element, text) {
        let index = 0;
        let typingInterval = setInterval(function() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        return typingInterval;
    }

    function startTyping(element, text) {
        element.textContent = '';
        element.style.width = "auto";
        return type(element, text);
    }

    function resetTyping(element, text) {
        clearInterval(element.typingInterval);
        element.textContent = text;
    }

    const typingText1 = document.querySelector(".typing-text1");
    const typingText2 = document.querySelector(".typing-text2");
    const typingText3 = document.querySelector(".typing-text3");

    const text1 = typingText1.getAttribute("data-text");
    const text2 = typingText2.getAttribute("data-text");
    const text3 = typingText3.getAttribute("data-text");

    typingText1.addEventListener("mouseover", function() {
        typingText1.typingInterval = startTyping(typingText1, text1);
    });
    typingText1.addEventListener("mouseout", function() {
        resetTyping(typingText1, text1);
    });

    typingText2.addEventListener("mouseover", function() {
        typingText2.typingInterval = startTyping(typingText2, text2);
    });
    typingText2.addEventListener("mouseout", function() {
        resetTyping(typingText2, text2);
    });

    typingText3.addEventListener("mouseover", function() {
        typingText3.typingInterval = startTyping(typingText3, text3);
    });
    typingText3.addEventListener("mouseout", function() {
        resetTyping(typingText3, text3);
    });
});
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