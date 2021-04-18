function sum_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = parseInt(n1) + parseInt(n2);
}
function sub_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = n1 - n2;
 }
 function mul_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = n1 * n2;
 }
 function div_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = n1 / n2;
 }