const correctAnswers = ['B','B','B','B','B'];
const result = document.querySelector('.result');

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    //check answers

    userAnswers.forEach( (answer,index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    

    //Showing result to the browser
    scrollTo(0,0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`; 
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    

    },10);
  

});

const label = document.querySelectorAll('.form-check-label');

label.forEach( label => {
    label.addEventListener('click', e => {

    })
});


//window object
// console.log('hello');
// window.console.log('hello');//Thiss is stored in the window object
// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// window.alert('hey');

// setTimeout(() => {
//     alert('Welcome to NInja quiz');
// }, 1000);


// let i =0;
// const timer = setInterval( () =>{
//     con      sole.log('hello');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);
 