var PresentTime=$('#currentDay');
function gettimenow(){
  var current=  moment().format('LLLL'); // Monday, January 24, 2022 11:10 AM
    PresentTime.text(current);
}
setInterval(gettimenow,1000);
var hour=moment().hour();
for (var i=8;i<18 ;i++){
    if (i > hour){
$('#'+i).addClass("future");

    }else if (i === hour){
        $('#'+i).addClass("now")
    }else{
        $('#'+i).addClass("timeAgo");
    }
    };

$('#save').click(function (){
    var eight=$("#8").val();
localStorage.setItem('eight',eight);
var nine=$("#9").val();
localStorage.setItem('9',nine);
var ten=$('#10').val();
localStorage.setItem('10',ten);
var eleven=$('#11').val();
localStorage.setItem('11',eleven);
var twelv=$('#12').val();
localStorage.setItem('12',twelv);
var th=$('#13').val();
localStorage.setItem('13',th);
var ft=$('#14').val();
localStorage.setItem('14',ft);
var fft=$('#15').val();
localStorage.setItem('15',fft);
var st=$('#16').val();
localStorage.setItem('16',st);
var st=$('#17').val();
localStorage.setItem('17',st);
var et=$('#18').val();
localStorage.setItem('18',et);

alert('saved')
});


    
window.onload = myfun();
function myfun(){

var l=localStorage.getItem('eight')
$('#8').val(l);

$('#9').val(localStorage.getItem('9'));
$('#10').val(localStorage.getItem('10'));
$('#11').val(localStorage.getItem('11'));

$('#12').val(localStorage.getItem('12'));

$('#13').val(localStorage.getItem('13'));
$('#14').val(localStorage.getItem('14'));

$('#15').val(localStorage.getItem('15'));

$('#16').val(localStorage.getItem('16'));

$('#17').val(localStorage.getItem('17'));
$('#18').val(localStorage.getItem('18'));

};
// $('#clear').click(()=>{
//  for (var i=8;i<17;i++){
//      $('#'+i).val('');
//      alert('cleared')
//  }
// });

