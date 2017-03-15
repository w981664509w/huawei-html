// JavaScript Document
window.onload=function(){
	var oForm=document.getElementById('form1');
	var oBtn1=oForm.getElementsByTagName('input')[0];
	var oTitle=document.getElementById('nav_right');
	
	oBtn1.onfocus=function(){
		if(oBtn1.value=='搜索'){
			oBtn1.value='';
			oTitle.style.display='none';	
		}	
	};	
	oBtn1.onblur=function(){
		oBtn1.value='搜索';
		oTitle.style.display='block';
	};
	
	var oPicUl=document.getElementById('pic_ul');
	var aPicLi=oPicUl.getElementsByTagName('li');
	var aPicDiv=oPicUl.getElementsByClassName('pic_div_three');
	
	for(var i=0;i<aPicLi.length;i++){
		aPicLi[i].index=i;
		aPicLi[i].onmouseover=function(){
			aPicLi[this.index].className='pic_ul_one';
			aPicDiv[this.index].getElementsByTagName('span')[0].style.display='none';
			aPicDiv[this.index].getElementsByTagName('a')[0].style.display='block';	
		};
		aPicLi[i].onmouseout=function(){
			aPicLi[this.index].className='';
			aPicDiv[this.index].getElementsByTagName('span')[0].style.display='block';
			aPicDiv[this.index].getElementsByTagName('a')[0].style.display='none';	
		};
	}
	fnDome('list_ul_one'); 
	fnDome('list_ul_two'); 
	fnDome('list_ul_three'); 
	fnDome('list_ul_four'); 
};