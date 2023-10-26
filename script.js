//your JS code here. If required.
function deleteMe(){
	const select = document.querySelector("select");
	let selectValue = select.value;
	let options = select.children;
	for(let i = 0 ; i < options.length ;i++){
		if(options[i].value === select.value){
			options[i].remove();
			break;
		}
	}
}
