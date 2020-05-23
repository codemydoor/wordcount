let button = document.querySelector('.clicktocount');
button.onclick=function count (e){
 let x = document.querySelector('.wordcount').value;
 let y = x.replace(/\s/g,"")
 document.querySelector('.counter').textContent= y.length
 e.preventDefault()

}
