
//assign value to each characters skills
	//health, attack power, counter atatck
	//give each attacker a base power.


//character object
//may need to fix this object

$(function() {

	var anakin = {
		name:'anakin',
		health: 150,
		attackPower: 2,
		counterAttack: 15,
		basePower:2,
		basem:0,
		image:"./images/anakin.jpeg",
// save initial values
  init: function() {
      var origValues = {};
      for (var prop in this) {
          if (this.hasOwnProperty(prop) && prop != "origValues") {
              origValues[prop] = this[prop];
          }
      }
      this.origValues = origValues;
  },
  // restore initial values
  reset: function() {
      for (var prop in this.origValues) {
          this[prop] = this.origValues[prop];
      }
  }


	}
	 anakin.init();


 	var luke = {
 		name:'luke',
		health: 120,
		attackPower: 15,
		counterAttack: 10,
		basePower:3,
		basem:0,
		image:"./images/luke.jpeg",
		  // save initial values
  init: function() {
      var origValues = {};
      for (var prop in this) {
          if (this.hasOwnProperty(prop) && prop != "origValues") {
              origValues[prop] = this[prop];
          }
      }
      this.origValues = origValues;
  },
  // restore initial values
  reset: function() {
      for (var prop in this.origValues) {
          this[prop] = this.origValues[prop];
      }
  }
	}

	luke.init()

 	var trooper= {
 		name:'trooper',
		health: 90,
		attackPower: 25,
		counterAttack: 18,
		basem:0,
		image:"./images/trooper.jpeg", 
	//save initial values
  init: function() {
      var origValues = {};
      for (var prop in this) {
          if (this.hasOwnProperty(prop) && prop != "origValues") {
              origValues[prop] = this[prop];
          }
      }
      this.origValues = origValues;
  },
  // restore initial values
  reset: function() {
      for (var prop in this.origValues) {
          this[prop] = this.origValues[prop];
      }
  }
	}
	trooper.init()

 	var yoda= {
 		name:'yoda',
		health: 160,
		attackPower: 15,
		counterAttack: 30,
		basem:0,
		image:"./images/yoda.jpeg",
		  // save initial values
  init: function() {
      var origValues = {};
      for (var prop in this) {
          if (this.hasOwnProperty(prop) && prop != "origValues") {
              origValues[prop] = this[prop];
          }
      }
      this.origValues = origValues;
  },
  // restore initial values
  reset: function() {
      for (var prop in this.origValues) {
          this[prop] = this.origValues[prop];
      }
  }
	}

yoda.init()

// condtion = false;
// $('#hardreset').toggle('hide');

var allCharacters = [anakin,luke,trooper,yoda];



//Initialize positin of game characters
function start(arr) {
	$('#hardreset').toggle('hide');
$.each(allCharacters , function(i, val) {
	 $('#'+i+'p').append($('<div /div>').attr({
  	"id":i,
  	"class":"thumbnail char"
  }));



  $('#'+i).append($('<div> </div>').attr({
  	'class':'figure-caption text-center',
  	"id":i+'c'
 }));
   $('#'+i+'c').append($('<p>'+allCharacters[i].name+'</p>')
 );

    $('#'+i).append($('<img>').attr({
  	"src":[allCharacters[i].image],
  	"id":i+'img'
    }));

     $('#'+i).append($('<div> </div>').attr({
  	'class':'figure-caption text-center',
  	"id":i+'cTwo'
 	}));

   $('#'+i+'cTwo').append($('<p>'+allCharacters[i].health+'</p>')
   	);
    
});
}
//variale to track to see if an attacker is selected
var characterSelect = false;
//on click attacker row
$(document).on('click','.char', function() {
	if(characterSelect === false) {
	// alert($(this).attr("id"));
	$('#'+$(this).attr('id')).addClass('pussy')
	$('#'+$(this).attr('id')).appendTo('#7p');
	$("#"+$(this).attr('id').charAt(0)).removeClass("char").addClass('att');
	$('.char').addClass('def').removeClass('char')
	$('.def').appendTo('#5p')
	// console.log($(this).attr('id').charAt(0))
}

// $('.int').on('click', function() {
// 	if(characterSelect === false) {
// 	// alert($(this).attr("id"));
// 	$('#'+$(this).attr('id')).addClass('pussy')
// 	// $('#'+$(this).attr('id')).appendTo('#7p');
// 	// $("#"+$(this).attr('id').charAt(0)).removeClass("char").addClass('att');
// 	// $('.char').addClass('def').removeClass('char')
// 	// $('.def').appendTo('#5p')
// 	// console.log($(this).attr('id').charAt(0))
// }
	characterSelect = true;

})

var defender = false
//on click for first defender
$(document).on('click','.def',function() {
	console.log('lick')
	console.log(defender)
	if(defender === false) {
	// alert($(this).attr("id"));
	$('#'+$(this).attr('id')).appendTo('#8p');
	$("#"+$(this).attr('id').charAt(0)).removeClass("def").addClass('counter');
	 console.log($(this).attr('id'))
}
	defender = true;


})


$(document).on('click','.cattack',function() {
	console.log('test');
	att = $('.att')[0].id
	counter = $('.counter')[0].id

	 // var att = $('.att').attr('id').
	 console.log(att)
	 console.log(counter)

	 damage = allCharacters[att].attackPower + Math.pow(allCharacters[att].basePower,allCharacters[att].basem)

	 allCharacters[counter].health = allCharacters[counter].health - damage;
	 console.log(allCharacters[counter].health)
	 $('#'+counter+'cTwo').html(allCharacters[counter].health)
   

	 allCharacters[att].health = allCharacters[att].health - allCharacters[counter].attackPower
	 console.log(allCharacters[att].health)
	  $('#'+att+'cTwo').html(allCharacters[att].health)

	 $('#t1').html('you attacked ' + allCharacters[counter].name + ' for '+ damage + ' damage')
	 $('#t2').html(allCharacters[counter].name + ' attacked you back for '+ allCharacters[counter].attackPower + ' damage')
	 allCharacters[att].basem++

	 if(allCharacters[counter].health <= 0) {
	 	alert('you beat ' + allCharacters[counter].name + ' Select a new defender')
	 	$("#8p").empty();
	 	 defender = false;

	 }

	 if(allCharacters[att].health <= 0) {
	 	alert('you have been defeated, click. reset to try again')
		$('#hardreset').toggle('show');
		}
		})

	$('#hardreset').on('click', function() {
		anakin.reset();
		trooper.reset();
		yoda.reset();
		luke.reset();
		$( "#0p" ).empty();
		$( "#1p" ).empty();
		$( "#2p" ).empty();
		$( "#3p" ).empty();
		$( "#4p" ).empty();
		$( "#5p" ).empty();
		$( "#6p" ).empty();
		$( "#7p" ).empty();
		$( "#8p" ).empty();

		start(allCharacters);
		characterSelect =false;
		defender=false;





		 })

       




	


start(allCharacters);

});



