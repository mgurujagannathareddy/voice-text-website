const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;      
recognition.interimResults = false; 

let isUserStopped = false;
let isListening = false;

function startListening() {
    if (isListening) return;

    isUserStopped = false;
    isListening = true;

    document.getElementById("output").value = "";
    const selectedLanguage = document.getElementById("language").value;
    recognition.lang = selectedLanguage;

    document.getElementById("status").innerText = "Status: Listening...";
    recognition.start();
}

function stopListening() {
    isUserStopped = true;
    isListening = false;

    recognition.stop();
    document.getElementById("status").innerText = "Status: Stopped";
}

recognition.onresult = function (event) {
    const index = event.resultIndex;
    const transcript = event.results[index][0].transcript;

    document.getElementById("output").value += transcript + " ";
};

recognition.onend = function () {
    if (!isUserStopped) {
        recognition.start();
    }
};

recognition.onerror = function (event) {
    console.error("Speech recognition error:", event.error);
};
