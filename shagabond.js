// JavaScript Document
$(document).ready(function () {
$("#makebooking").hide();	
$("#aboutme").hide();
$("#mymusic").hide();
$("#into").hide();
$("#instahide").hide();
$("#aboutmepop").hide();
	$("#btn1").hide();
	$("#click").click(function(){
			$("#into").fadeIn("slow");
			$("#btn1").show();
	});
	$("#btn1").click(function(){
			$("#into").hide();
			$("#btn1").hide();
	});
	$("#btn2").hide();
	$("#click0").click(function(){
			$("#instahide").fadeIn("slow");
			$("#btn2").show();
	});
	$("#btn2").click(function(){
			$("#instahide").hide();
			$("#btn2").hide();
	});
	$("#hide").hover(function(){
		$("#mymusic").hide();
		$("#aboutme").hide();
		$("#makebooking").hide();		
	});
	$("#tiitle").hover(function(){
		$("#mymusic").hide();
		$("#aboutme").hide();
		$("#makebooking").hide();		
	});
	$("#producer").hover(function(){
		$("#mymusic").hide();
		$("#aboutme").hide();
		$("#makebooking").hide();		
	});
	$("#soundcloud").hover(function(){
		$("#mymusic").hide();
		$("#aboutme").hide();
		$("#makebooking").hide();		
	});
	$("#john").hover(function(){
		$("#mymusic").hide();
		$("#aboutme").fadeIn("slow");
		$("#makebooking").hide();		
	});
	$("#shlohmo").hover(function(){
		$("#mymusic").fadeIn("slow");
		$("#aboutme").hide()
		$("#makebooking").hide();		
	});
		$("#wutang").hover(function(){
		$("#aboutme").hide();
		$("#makebooking").fadeIn("slow");
		$("#mymusic").hide();		
	});
	$("#btn3").hide();
	$("#john").click(function(){
			$("#aboutmepop").fadeIn("slow");
			$("#btn3").fadeIn("slow");
	});
	$("#abtme").click(function(){
			$("#aboutmepop").fadeIn("slow");
			$("#btn3").fadeIn("slow");
	});
	$("#btn3").click(function(){
			$("#aboutmepop").fadeOut("slow");
			$("#btn3").hide();
	});
	
	var paragraph = document.getElementsByTagName('p')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100)
	}

	addEffect();
};

textEffect('fly-in-out');

	
});