function calcular(){
    var n=document.getElementById('name')
    var h=document.getElementById('altura')
    var p=document.getElementById('peso')
    if(n.value.length==0||h.value.length==0||p.value.length==0){
        alert('Complete as informações')
    }else{
let text=document.getElementById('text')
var nome=n.value
var hight=Number(h.value)
var peso=Number(p.value)
var quadrado=hight*hight
var f=(peso/(hight*hight)).toFixed(1);

 var classificação=''
 if(f<18.6) {        
        classificação='peso abaixo do peso'
    } else if( f<24.9) {
        classificação='peso ideal'
        
    }else if(f>25){
   classificação='peso acima do ideal'
    } text.innerHTML=`${nome} seu IMC é ${f} e você está com o ${classificação}`}
    }