
$(function() {
	//anaking object
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
	//save anakin object
	 anakin.init();

	 //luke object
 	var luke = {
 		name:'luke',
		health: 120,
		attackPower: 3,
		counterAttack: 18,
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
	//save luke object
	luke.init()
	//trooper object
 	var trooper= {
 		name:'trooper',
		health: 90,
		attackPower: 1,
		counterAttack: 9,
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
	//save tropper object
	trooper.init()
	//yoda object
 	var yoda= {
 		name:'yoda',
		health: 160,
		attackPower: 4,
		counterAttack: 24,
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
//save yoda object
yoda.init()


//array of all objects
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
	$('#'+$(this).attr('id')).addClass('pussy')
	$('#'+$(this).attr('id')).appendTo('#7p');
	$("#"+$(this).attr('id').charAt(0)).removeClass("char").addClass('att');
	$('.char').addClass('def').removeClass('char')
	$('.def').appendTo('#5p')
}

	characterSelect = true;

})

var defender = false
//on click for first defender
$(document).on('click','.def',function() {
	if(defender === false) {
	$('#'+$(this).attr('id')).appendTo('#8p');
	$("#"+$(this).attr('id').charAt(0)).removeClass("def").addClass('counter');
}
	defender = true;


})

//on click function for attack button
$(document).on('click','.cattack',function() {
	att = $('.att')[0].id
	counter = $('.counter')[0].id

	//used to track current attack power of attacker per attack
	 damage = allCharacters[att].attackPower + (allCharacters[att].attackPower*(allCharacters[att].basem))

	 //update health of defender
	 allCharacters[counter].health = allCharacters[counter].health - damage;
	 $('#'+counter+'cTwo').html(allCharacters[counter].health)
   
	 //update health of attacker after attack
	 allCharacters[att].health = allCharacters[att].health - allCharacters[counter].counterAttack
	  $('#'+att+'cTwo').html(allCharacters[att].health)

	  //display what happened to attacker and defender
	 $('#t1').html('you attacked ' + allCharacters[counter].name + ' for '+ damage + ' damage')
	 $('#t2').html(allCharacters[counter].name + ' attacked you back for '+ allCharacters[counter].counterAttack + ' damage')
	 allCharacters[att].basem++

	 //condtional logic for when defernder health is 0 and initate new pick of a defender
	 if(allCharacters[counter].health <= 0) {
	 	alert('you beat ' + allCharacters[counter].name + ' Select a new defender')
	 	$("#8p").empty();
	 	 defender = false;

	 }
	 //conditional logic if attack health is 0 to restart game
	 if(allCharacters[att].health <= 0) {
	 	alert('you have been defeated, click reset to try again')
		$('#hardreset').toggle('show');
		}
		})
	
	//on click function for reset, needs to be refractered
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
		$('#t1').html("")
		$('#t2').html("")


		 })
//iniatalize placement of thumbnails
start(allCharacters);

});



