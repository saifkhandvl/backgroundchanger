let body=document.querySelector("#yy");
let input1=document.querySelector("#in1");
let input2=document.querySelector("#in2");
let inn=document.querySelector("#o");
let i=document.querySelector("#b");
let css=document.querySelector("#h3");
let ii=document.querySelector("#bb");


i.addEventListener('click',function(){
	input1.addEventListener("input",function(){



	body.style.background=`radial-gradient(circle,${input1.value} 10%,${input2.value} 100%)`

css.textContent = body.style.background + ";";}



)

input2.addEventListener("input",function(){


	body.style.background=`radial-gradient(circle,${input1.value} 20%,${input2.value} 100%)`
	css.textContent = body.style.background + ";";

})

	
})



ii.addEventListener('click',function(){

	function setcolor() {
	body.style.background ="linear-gradient(to right, "+ input1.value + ", "+ input2.value + ")";

	css.textContent = body.style.background + ";";
}

input1.addEventListener("input", setcolor);

input2.addEventListener("input", setcolor);

	
	
})

function setcolor() {
	body.style.background ="linear-gradient(to right, "+ input1.value + ", "+ input2.value + ")";

	css.textContent = body.style.background + ";";
}

input1.addEventListener("input", setcolor);

input2.addEventListener("input", setcolor);






