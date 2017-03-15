// JavaScript Document

function fnDome(obj){
	var oUl=document.getElementById(obj);
	var aUl=oUl.getElementsByTagName('ul');
	var oLi=oUl.parentNode;
	
	
	for(var i=0;i<aUl.length;i++){
		aUl[i].onmouseover=function(){
			this.getElementsByTagName('li')[0].style.display='none';
			this.getElementsByTagName('li')[1].style.display='block';	
		};	
		aUl[i].onmouseout=function(){
			this.getElementsByTagName('li')[0].style.display='block';
			this.getElementsByTagName('li')[1].style.display='none';
		};	
	}
	
	
}

