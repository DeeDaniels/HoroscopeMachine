//user inputs month & day of birth into 2 inputs
//user clicks button & event listener pulls values from inputs
// cross reference with arguments to find astrological sign
//display sign in h1
//display horoscope in p


//user clicks button & event listener pulls values from inputs
document.getElementById('generate').onclick = getHoroscope


function getHoroscope(){
  //pull values from inputs
  //get value of month
  var signMonth = document.getElementById('month').value
  //get value of day
  var signDate = document.getElementById('day').value
  console.log(signMonth,signDate)
  // cross reference with arguments to find astrological sign w/conditionals
  if ((signMonth == 0 || signMonth >=13) || (signDate == 0 || signDate >=32)){
    alert("Not a valid date! Please enter a valid date.");
  }
  else if ((signMonth == 1 && signDate <= 31) || (signMonth == 2 && signDate <=19)){
    displayCompleteMessage("Aquarius");
    displayHoroscope('Poetic horoscope:You like candy like everyone else appears to. Because it is presented in such a way so as to be the only possible plot. Oh but what about the opposite of an absolute. All of these things are pretty and wonderful. Choose with care.');
  }
  else if((signMonth == 2 && signDate <= 29) || (signMonth == 3 && signDate <=20)){
    displayCompleteMessage("Pisces");
    displayHoroscope('Poetic Horoscope: You will go on a trip where the flowers and moon are green. Heavy with meaning there will be a far off orange flower stuck to the back of your old memories. New memories are songs where goodness can come and live forever. Remember forever when it happens.');
  }
  else if((signMonth == 3 && signDate<=31) || (signMonth == 4 && signDate<=2)){
    displayCompleteMessage("Aries");
    displayHoroscope('Poetic Horoscope: You always say, I’ll know it when I see it, but has it been so long since you’ve seen it that you won’t know what you see. A good friend almost always starts in the same obsessive place as a good love. Don’t expect anything less from either.');
  }
  else if((signMonth == 4 && signDate <= 30) || (signMonth == 5 && signDate <=21)){
    displayCompleteMessage("Taurus");
    displayHoroscope('Poetic Horoscope: Whatever ignited your deepest fears must be put out immediately. All that surrounds you in your current situation is gentle and easing you into a sort of new future-past. Whatever brings you light is not necessarily good but it’s still necessary.');
  }
  else if((signMonth == 5 && signDate <= 31) || (signMonth == 6 && signDate <=21)){
    displayCompleteMessage("Gemini");
    displayHoroscope('Poetic Horoscope: The text under the text is the text you said but did not write. What is said is said smiling. What is written is said in a fright. Neither spoken nor true drives you. Carry on.');
  }
  else if((signMonth == 6 && signDate <= 30) || (signMonth == 7 && signDate <=22)){
    displayCompleteMessage("Cancer");
    displayHoroscope('Poetic Horoscope:When people say, I can’t, even, they do not speak the truth. The real things are the ones you do and do. A very pampered friend will meet you in the distance. Although it will kill you not to, do not go.');
  }
  else if((signMonth == 7 && signDate <= 31) || (signMonth == 8 && signDate <=21)){
    displayCompleteMessage("Leo");
    displayHoroscope('Poetic Horoscope: It’s hard to admit the difference in the story is the one thing you did not write. It’s ok to dance in the night with only the spirits looking. They wish they could or they dance with you. Whatever it helps you to believe.');
  }
  else if((signMonth == 8 && signDate <= 31) || (signMonth == 9 && signDate <=23)){
    displayCompleteMessage("Virgo");
    displayHoroscope ('Poetic Horoscope: Infinity is a long way’s away which is why infinity has never interested you. If you could you’d hold the hands of at least 10 people at once. But you have two hands. Save them to cup the face of your beloved. They hold their face to you. (Beware.)');
  }
  else if((signMonth == 9 && signDate <= 30) || (signMonth == 10 && signDate <=23)){
    displayCompleteMessage("Libra");
    displayHoroscope('Poetic Horoscope: A singular flower grows deep in the soil but it takes time to see it. You have nothing but time so use it to wait for this sort of spring. If you wanted to, you’d stay for almost forever waiting. It’s a good idea anyway. But what isn’t.');

  }else if((signMonth == 10 && signDate <= 31) || (signMonth == 11 && signDate <=22)){
    displayCompleteMessage("Scorpio");
    displayHoroscope('Poetic Horoscope: A peaceful set of days extends into reality now like a dream. Another day with sun, well who doesn’t like that, you will say lazily. Read: You. Take care and find the storm again. That’s what is best for you.');
  }
  else if((signMonth == 11 && signDate <= 30) || (signMonth == 12 && signDate <=22)){
    displayCompleteMessage("Sagittarius");
    displayHoroscope('Poetic Horoscope: You do like to be the bearer of all the news. And you do so like, to be the streamers coming in when everything has just begun. But when it comes to fun, a pattern doesn’t work. And you like fun. So spin around a few times. You will always come back.');
  }
  else if((signMonth == 12 && signDate <= 31) || (signMonth == 1 && signDate <=20)){
    displayCompleteMessage("Capricorn");
    displayHoroscope('Poetic Horoscope: Is it really nice to turn around when you haven’t even seen what is front of you. Not nice but is it right. You’ve worked so hard to see the candles all lined up in a row. Spin and spin. A purple sunset and a smile are waiting, somewhat perfectly.');
  }
  else { alert("Not a valid date! Please enter a valid date.");
  }
}
// function notAValidDate(){
//   if ((signMonth == 0 || signMonth >=13) || (signDate == 0 || signDate >=32)){
//     alert("Not a valid date! Please enter a valid date.");
//   }
  // else ((signDate == 0 || signdate >=32)){
  //   alert("Not a valid date! Please enter a valid date.");


//display sign in h1
function displayCompleteMessage(msg){
    document.getElementsByTagName('h1')[0].innerHTML = msg
  }
//display horoscope in the p
function displayHoroscope(msg){
      document.getElementsByTagName('p')[0].innerHTML = msg
    }
