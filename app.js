const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Buddy");
    }

    else if(hr == 12) {
        speak("Good noon Buddy");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Buddy");
    }

    else {
        speak("Good Evening Buddy");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating OK WHAT?");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Buddy";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine buddy tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('tell me about yourself')) {
        const finalText = "I am a voice assistant named OK WHAT and I can perform many functions like opening youtube,google,calculator and much more So please explore me Thanks";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is OK WhAT?";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }

    else if(message.includes('open twitter')) {
        window.open("https://twitter.com", "_blank");
        const finalText = "Opening twitter";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com", "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }

    else if(message.includes('open drive')) {
        window.open("https://drive.google.com", "_blank");
        const finalText = "Opening drive";
        speech.text = finalText;
    }

    else if(message.includes('open calendar')) {
        window.open("https://calendar.google.com", "_blank");
        const finalText = "Opening calendar";
        speech.text = finalText;
    }

    else if(message.includes('open mail')) {
        window.open("https://mail.google.com", "_blank");
        const finalText = "Opening mail";
        speech.text = finalText;
    }

    else if(message.includes('open maps')) {
        window.open("https://maps.google.com", "_blank");
        const finalText = "Opening maps";
        speech.text = finalText;
    }

    else if(message.includes('open photos')) {
        window.open("https://photos.google.com", "_blank");
        const finalText = "Opening photos";
        speech.text = finalText;
    }

    else if(message.includes('open meet')) {
        window.open("https://meet.google.com", "_blank");
        const finalText = "Opening meet";
        speech.text = finalText;
    }

    else if(message.includes('open contacts')) {
        window.open("https://contacts.google.com", "_blank");
        const finalText = "Opening contacts";
        speech.text = finalText;
    }

    else if(message.includes('open amazon')) {
        window.open("https://amazon.in", "_blank");
        const finalText = "Opening amazon";
        speech.text = finalText;
    }

    else if(message.includes('open flipkart')) {
        window.open("https://flipkart.com", "_blank");
        const finalText = "Opening flipkart";
        speech.text = finalText;
    }

    else if(message.includes('open wynk')) {
        window.open("https://wynk.in", "_blank");
        const finalText = "Opening wynk";
        speech.text = finalText;
    }

    else if(message.includes('open spotify')) {
        window.open("https://open.spotify.com", "_blank");
        const finalText = "Opening spotify";
        speech.text = finalText;
    }

    else if(message.includes('open docs')) {
        window.open("https://docs.google.com", "_blank");
        const finalText = "Opening docs";
        speech.text = finalText;
    }

    else if(message.includes('open classroom')) {
        window.open("https://classroom.google.com", "_blank");
        const finalText = "Opening classroom";
        speech.text = finalText;
    }

    else if(message.includes('open news')) {
        window.open("https://news.google.com", "_blank");
        const finalText = "Opening news";
        speech.text = finalText;
    }

    else if(message.includes('open translate')) {
        window.open("https://translate.google.co.in", "_blank");
        const finalText = "Opening translate";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "long", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if(message.includes('Notepad')) {
        window.open('Notepad:///')
        const finalText = "Opening Notepad";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 2;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}