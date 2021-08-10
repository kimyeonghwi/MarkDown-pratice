1.
let boxEl = document.querySelector('.box');
console.log(boxEl);
boxEl.addEventListener('click', function(){
  console.log('왜눌러!!!!!!!!!!!!!');
  boxEl.classList.add('active');
  console.log(boxEl.classList.contains('active'));
  boxEl.classList.remove('active');
  console.log(boxEl.classList.contains('active'));
});

2.
const boxels = document.querySelectorAll('.box');
boxels.forEach((boxel,index)=>{
  boxel.classList.add(`order-${index+1}`);  
  console.log(index, boxel);
});

3.
const boxel1 = document.querySelector('.box');
console.log(boxel1.textContent);
boxel1.textContent = 'aaa';
console.log(boxel1.textContent);



// 4. 메소드 체이닝 
const a = 'Hello~';

const b = a.split('').reverse().join('');
console.log(b);