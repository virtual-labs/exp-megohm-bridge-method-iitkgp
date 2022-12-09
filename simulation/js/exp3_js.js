var w,check=0;

function Set_r()
{
	var image = document.getElementById('myImage');
	if (image.src.match("s2")) 
	{
		alert('Switch off the circuit first.');
	}
	else
	{
		document.f1.Rab.value= parseFloat(document.getElementById('r33').value);
		document.f1.Rag.value= parseFloat(document.getElementById('r331').value);
		document.f1.Rbg.value= parseFloat(document.getElementById('r332').value);
	}
}
function simulate_r()
{
	if(check==1)
	{
		var p=parseFloat(document.getElementById('P').value);
		var q=parseFloat(document.getElementById('Q').value);
		var s=parseFloat(document.getElementById('S').value);
		var rag=parseFloat(document.getElementById('r331').value);
		var rbg=parseFloat(document.getElementById('r332').value);
		var p1= (p*rag)/(p+rag);
		document.f1.r333.value = (p1*s)/q;
	}
	else
	{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}

}
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;	 
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}
function changeImage() {
	
		var image = document.getElementById('myImage');
		var im5= document.getElementById('V');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; cf3=1;
			im5.setAttribute('readonly', 'readonly');
			check=1;
			execute_ckt();
		} else {
			image.src = "./images/s1.png"; cf3=0;
			im5.removeAttribute('readonly');
			document.f1.A1.value = 0; check=0;
			perform_meter();
			document.f1.A2.value='';
			document.f1.r333.value='';
			}
	}
	function execute_ckt()
	{
		if(check==1)
		{
			document.f1.A1.value=0;
			var rag=parseFloat(document.getElementById('r331').value);
		    var rbg=parseFloat(document.getElementById('r332').value);
	        var rab=parseFloat(document.getElementById('r33').value); 
			var p=parseFloat(document.getElementById('P').value);  
			var q=parseFloat(document.getElementById('Q').value);
			var s=parseFloat(document.getElementById('S').value);
			var v=parseFloat(document.getElementById('V').value);  
			var p1=(p*rag)/(p+rag);
			var t=p1+q;
			var t1=v*p1;
			var v1=t1/t;
			var v2=(v*rab)/(rab+s);
			var vout=(v1-v2);
			document.f1.A1.value= vout.toPrecision(10);
			document.f1.A2.value= vout.toPrecision(10);
			perform_meter();
		}
		
	}





