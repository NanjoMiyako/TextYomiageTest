var currentSpeech = null;
function speak(){
  if(currentSpeech != null){
  	speechSynthesis.cancel(currentSpeech);
  } 
   
  var text = document.getElementById("speechContent").value;
  	  currentSpeech = new SpeechSynthesisUtterance(text);
	  speechSynthesis.speak( currentSpeech );
}

function pause(){
 speechSynthesis.pause(currentSpeech);
}

function resume(){
 speechSynthesis.resume(currentSpeech);
}

function cancel(){
 speechSynthesis.cancel(currentSpeech)
}
