const heroGreeting = document.querySelector("#hero-greeting");
const greetings = ["hey", "hey there", "hiya", "hello"];

heroGreeting.innerText = `${greetings[Math.floor(Math.random() * greetings.length)]}`;