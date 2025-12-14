# Speech-to-Text Web Application 🎙️

## 📌 Project Overview
This project is a **Speech-to-Text (Voice-to-Text) web application** that converts spoken language into readable text using the browser’s built-in speech recognition capabilities.

The application demonstrates how **AI-assisted browser APIs** can be used to enable real-time human–computer interaction without external libraries or backend servers.

---

## 🎯 Objective
The objectives of this project are:
- Convert user speech into text
- Support continuous voice recognition
- Allow users to select the recognition language
- Provide a simple and user-friendly interface

---

## 🛠️ Technologies Used

### Frontend
- **HTML** – Page structure
- **CSS** – Styling and layout
- **JavaScript** – Speech recognition logic

### API
- **Web Speech API (SpeechRecognition / webkitSpeechRecognition)**  
  - Built into modern browsers
  - Used for speech-to-text conversion

### Tools
- Google Chrome / Microsoft Edge
- Visual Studio Code
- Git & GitHub

---

## 🧠 Key Concepts Implemented
- SpeechRecognition object
- Continuous speech recognition
- Event-driven programming
- DOM manipulation
- State management for start/stop control

---

## 🏗️ System Architecture

User
↓
Microphone
↓
Web Browser
↓
SpeechRecognition Engine
↓
JavaScript Logic
↓
Text Output on Webpage


---

## ⚙️ Functional Modules

### 1. Language Selection Module
- Allows users to choose the recognition language
- Dynamically sets the `recognition.lang` property before listening starts

---

### 2. Speech Capture Module
- Activates the microphone
- Listens continuously until the user stops recognition

---

### 3. Speech Processing Module
- Captures recognized speech using the `onresult` event
- Processes only the newly recognized speech segment

---

### 4. Output Display Module
- Appends recognized text into a textarea
- Maintains continuous dictation flow

---

### 5. Control & Status Module
- Start and Stop listening controls
- Displays current recognition status
- Handles recognition errors gracefully

---

## 🔄 Working Principle

1. User selects a language from the dropdown
2. User clicks **Start Listening**
3. Microphone access is requested
4. Browser listens to speech continuously
5. Recognized speech is converted into text
6. Text is displayed in real time
7. User clicks **Stop Listening** to end recognition

---

## 🧪 Input & Output

### Input
- Spoken voice through microphone
- Selected language option

### Output
- Recognized text displayed in the textarea

---

## 🌍 Language Support & Limitations

### Supported Languages
- English (US) – `en-US`
- English (India) – `en-IN`

### Limited / Inconsistent Support
- Hindi – `hi-IN`
- Tamil – `ta-IN`
- Telugu – `te-IN`

> ⚠️ **Note:**  
> Speech recognition accuracy and language support depend on the browser’s speech engine and operating system. Some Indian languages may not work consistently in Chrome due to limited native support.

---

## ✅ Advantages
- No backend or server required
- Real-time speech recognition
- Simple and lightweight
- Beginner-friendly implementation
- Uses built-in browser AI features

---

## ⚠️ Limitatios
- Requires microphone permission
- Language support depends on browser and OS
- Works best in Chrome / Edge
- HTTPS or localhost recommended

---

## 🔮 Future Enhancements
- Add pause and resume controls
- Improve multilingual support using external APIs
- Save recognized text to file
- Integrate Text-to-Speech functionality

---

## 🤖 AI Usage Declaration
This project uses **AI-assisted browser capabilities** via the Web Speech API.  
No external AI services or cloud models are used.  
All logic and implementation were written manually for learning purposes.

---

## 📁 Project Structure

Speech-to-Text/
│
├── index.html
└── README.md


---

## 🚀 How to Run the Project

1. Clone or download the repository
2. Open `index.html` in Google Chrome
3. Allow microphone access
4. Click **Start Listening** and speak

---

## 👤 Author
Developed as a learning project to understand browser-based speech recognition and web technologies.

---

## 📄 License
This project is open-source and intended for educational purposes.
