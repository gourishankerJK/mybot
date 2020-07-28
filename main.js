const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "apologies!!!. i am still in developing mode. I don't have any idea about it.";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }
    else if(message.includes('are you listening')){
      speech.text = " yes I am listening.!!";
      window.speechSynthesis.speak(speech);
      speech.text="press Activate Voice button to make me listen your voice .........thanks";
    }
    else if (message.includes('who are you')){
      speech.text = "hey i am aryan's assistant ... gouri invented me and currently aryan is developing me . you can call me jarvis's friend ..can i do something for you.."
    }
    else if (message.includes('thanks')||message.includes('thank you')){
      speech.text="most welcome sir it's my duty ... can i do something for you ..";
    }
    else if (message.includes('you are cute')||message.includes("you are so cute")||message.includes("you are intelligent")){
      speech.text="thanks sir .. .......you are more  intelligent and cute than me.";
    }

    else if(message.includes('open Google')){
      window.open('https://www.google.com','_blank');
      return 0;

    }
    else if(message.includes('open YouTube')){
      window.open('https://www.youtube.com','_blank');
      return 0;

    }
    else if(message.includes('shut up')||message.includes('get out')){
      speech.text=" i am sorry sir ... bye bye";
      window.speechSynthesis.speak(speech);
      window.open("index.html",'_self');
      return 0;
    }
    else if(message.includes('search about')||message.includes('search')){
      text = message.split(" ");
      if (text[0]=='search'&&text[1]=='about'){
        text.shift();
        text.shift();
      }
      else{
        text.shift();
      }
      search = text.join(" ");
      url = 'https://google.com/search?q='+search;
      window.open(url);
      return 0;
    }
    else if(message.includes('Wikipedia')){
      text = message.split(" ");
      text.pop();
      search = text.join(" ");
      url = "https://en.wikipedia.org/wiki/"+search;
      window.open(url);
      return 0;
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');

};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  const speech = new SpeechSynthesisUtterance();
  speech.text = " i am listening";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  recorder.start();
});
