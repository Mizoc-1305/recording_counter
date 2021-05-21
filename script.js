var count = 1;

function countUp(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var msg = year + '-' + month + '-' + date + '-';
  var counter = document.getElementById('counterArea');

  count = count + 1;

  if (count < 10){
    document.getElementById('counterArea').innerHTML = msg  + '00' + count;
  } else if (count >= 10 && count < 100){
    document.getElementById('counterArea').innerHTML = msg + '0' + count;
  } else {
    document.getElementById('counterArea').innerHTML = msg + count;
  }
}

function countDown(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var msg = year + '-' + month + '-' + date + '-';
  var counter = document.getElementById('counterArea');

  count = count - 1;

  if (count < 10){
    document.getElementById('counterArea').innerHTML = msg  + '00' + count;
  } else if (count >= 10 && count < 100){
    document.getElementById('counterArea').innerHTML = msg + '0' + count;
  } else {
    document.getElementById('counterArea').innerHTML = msg + count;
  }
}
