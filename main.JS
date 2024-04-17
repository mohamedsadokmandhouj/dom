// var el = document.querySelector('#d');
//      console.log('el:', el);
//      el.addEventListener('click', function click (){
//      var h1=document.querySelector('h1')
//      console.log(h1) 
//      h1.innerHTML=Number(h1.innerHTML)+1
          
            
//         }
       
//     );
//     var sf = document.querySelector('#s');
//      console.log('el:', sf);
//      sf.addEventListener('click', function click (){
//      var h1=document.querySelector('h1')
//      console.log(h1) 
//      h1.innerHTML=Number(h1.innerHTML)-1
//      })
function plus(event){
    onclick="plus(event)"
    
    var num=event.target.parentNode.querySelector('h1')
    num.innerHTML=Number(num.innerHTML)+1
}
function moin(event){
    onclick="plus(event)"
    
    var num=event.target.parentNode.querySelector('h1')
    num.innerHTML=Number(num.innerHTML)-1
}
          




