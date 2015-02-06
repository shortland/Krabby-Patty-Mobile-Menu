/*
* krabbypatty.js
* 
* A mobile menu for mobile websites
*
* Created by Ilan Kleiman || http://IlanKleiman.com
* Original publishing date: February 5th 2015
*
* Free to use and recode, give some credit to original author by leaving these comments, thanks!
*/
$(document).ready(function()
{
	$('#krabby').click(function()
	{
		if($('#patty_2').width() == 20)
		{
			$('#patty_2').animate({'height':'20px', 'width':'2px', 'margin-top':'-15px', 'margin-left':'9px'}, 'slow');
			$('#patty').animate({'margin-top':'5px'}, 'slow');
			$('#krabby_menu_padder').animate({'height':'40px'}, 'slow');
			$('#krabby_menu').fadeToggle('slow');
		}
		else
		{
			$('#patty_2').animate({'height':'2px', 'width':'20px', 'margin-top':'4px', 'margin-left':'0px'}, 'slow');
			$('#patty').animate({'margin-top':'0px'}, 'slow');
			$('#krabby_menu_padder').animate({'height':'0px'}, 'slow');
			$('#krabby_menu').fadeToggle('slow');
		}
	});
	$('.krabby_tabs').click(function()
	{
		// use your own custom links for each tab, ie 'more.html', 'help.html',...

			// remove this line of code in production environment... may get annoying, solely for purposes of the demo
			alert('Clicked on tab id: ' + this.id);

			// adding the id as a parameter under name "p" has no real usage here.
			if(this.id == "krabby_tab1")
			{
				window.location.href = 'index.html?p=' + this.id;
			}
			if(this.id == "krabby_tab2")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab3")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab4")
			{
				window.location.href = 'index.html?p=' + this.id
			}			
			if(this.id == "krabby_tab5")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab6")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab7")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab8")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab9")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			if(this.id == "krabby_tab10")
			{
				window.location.href = 'index.html?p=' + this.id
			}
			// closing menu if you're not redirecting page
			$('#patty_2').animate({'height':'2px', 'width':'20px', 'margin-top':'4px', 'margin-left':'0px'}, 'slow');
			$('#patty').animate({'margin-top':'0px'}, 'slow');
			$('#krabby_menu_padder').animate({'height':'0px'}, 'slow');
			$('#krabby_menu').fadeToggle('slow');
	});
});




