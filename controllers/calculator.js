angular.module('personalSite')
.controller('CalculatorCtrl', function($scope) {

var curVal = "";
var eq = "";
$('.num').on('click',function() {

  if (curVal.length>0 && ((!Number(curVal)) && curVal.indexOf('.')==-1)) {
    eq+=curVal;
    $('#history').html(eq);
    curVal="";
  }
  if (!Number(eq[eq.length-1]) && this.value=='.' && curVal.length<1) {
    curVal += 0 + this.value;
  } else if (!Number(eq[eq.length-1]) && (this.value!='.' || curVal.indexOf('.')==-1) ) {
    curVal +=this.value;
  }
  if (curVal.length>15) {
    $('#total').html("It's too much... :(")
    curVal = "";
  } else {
    $('#total').html(curVal)
  }
})

$('.op').on('click',function() {
  if (Number(eq[eq.length-1])) {
    curVal=this.value;
    $('#total').html(this.value);

  }else if (Number(curVal)) {
    eq += curVal;
    $('#total').html(this.value);
    $('#history').html(eq);
    curVal = this.value;
  }
})

$('#back').on('click', function() {
  if (curVal.length>0) {
    curVal = curVal.slice(0,curVal.length-1);
    $('#total').html(curVal)
  }
})

$('#ac').on('click',function() {
  curVal = "";
  eq = "";
  $('#total').html(0);
  $('#history').html(0);
})

$('#ce').on('click',function() {
  if(curVal.length>0) {
    curVal="";
    $('#total').html(0);
  } else if (eq!=="") {
    if (!Number(eq[eq.length-1])) {

      eq = eq.slice(0,eq.length-1)
      $('#history').html(eq)
    } else if (Number(eq[eq.length-1])) {
      var lastOp = eq.split("").reverse().join("").match(/[\D]/)
      if (!lastOp) {
        eq = "";
        $('#history').html(0);
      } else {
        var index = eq.lastIndexOf(lastOp[0]);
        eq = eq.slice(0,index+1);
        $('#history').html(eq) 
      }
    }
  } 
})

$('#equal').on('click', function() {

  if (Number(curVal)) {
    eq+=curVal;
    $('#history').html(eq);
    $('#total').html(eval(eq).toFixed(2));
    curVal = eval(eq).toFixed(2);
    eq="";
  } else if (curVal.length==0 && Number(eq[eq.length-1])) {
    $('#total').html(eval(eq))
    curVal=eval(eq);
    eq=""
  }
})

var wink = function() {
  $('#left-eye').animate({height:".2em"}, 100, function() {
    $(this).animate({height:"1.5em"}, 100)
  })
}

var noseWiggle = function() {
  $("#nose").animate({left: "-=.05em"}, 100, function() {
    $(this).animate({left: "+=.1em"}, 200, function() {
      $(this).animate({left: "-=.05em"}, 100)
    })
  })
}

$('.equal').on('click', function() {
  wink();
})

$('#ac, #ce').on('click', function() {
  noseWiggle();
})


});