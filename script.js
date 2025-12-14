const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
// recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = false;

function startListening() {
    isUserStopped = false;

    document.getElementById("output").value = "";

    const selectedLanguage = document.getElementById("language").value;
    recognition.lang = selectedLanguage;

    document.getElementById("status").innerText = "Status: Listening...";
    recognition.start();
}

recognition.onresult = function(event) {
    const currentIndex = event.resultIndex;
    const spokenText = event.results[currentIndex][0].transcript;

    document.getElementById("output").value += spokenText + " ";
    };

function stopListening() {
    recognition.stop();
}
recognition.onend = function() {
    document.getElementById("status").innerText = "Status: Stopped";
};

recognition.onerror = function(event) {
    alert("Error occurred: " + event.error);
};
