document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("inputEmail4").value.trim();
    const password = document.getElementById("inputPassword4").value.trim();
    const subject = document.getElementById("inputSubject").value.trim();
    const message = document.getElementById("floatingTextarea2").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!email || !password || !subject || !message) {
      formMessage.innerHTML = "⚠️ Please fill out all fields.";
      formMessage.style.color = "red";
      return;
    }

    if (password.length < 6) {
      formMessage.innerHTML = "⚠️ Password must be at least 6 characters.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.innerHTML = "✅ Your message has been submitted successfully!";
    formMessage.style.color = "limegreen";

    document.getElementById("contactForm").reset();
  });