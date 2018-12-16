function playGame (){
  var greed = 32;
  var wealth = 1;
  var guessCount = 0;
  var coin = 1;
  var exclamation = '!!';

  alert("My name is DOWHILE, and I am a very very greedy monster and I want to >>>DUPLICATE<<< my wealth until I'm satisfied");

  do {
  var generosity = prompt('I only have ' + wealth + ' small coin, will you help me?');
  var realGenerosity = generosity.toLowerCase();
  } while (realGenerosity !== 'yes');


  do {
  generosity = prompt('THANK YOU!!!! Please, give me what I need!!!');
  } while (generosity != 1);

  wealth += parseInt(generosity);

  do {
    generosity = prompt('MORE' + exclamation);
    if ( parseInt(generosity) == wealth) {
      wealth += parseInt(generosity);
      exclamation += exclamation;
    } else {
      alert('NO!!! I TOLD YOU DUPLICATE!!!');
    }
  } while ( wealth != greed );

  document.write("<img alt='coin' src='img/coin.png'>");
  document.write("<h1>THANK YOU!!! NOW I'M SATISFIED</h1>");
  document.write("<img alt='coin_eater_monster' src='img/coin_eater.gif'>");
}
