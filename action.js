var questions =[{
    question: "What is the name of the president?",
    option:['Tinubu','Obj','Jonathan','Buhari'],
    answer: "Buhari",
    chosen_Answer:"",
},{
    question: "Who is the world best footballer?",
    option:['Christiano Ronaldo','Messi','Neymar','Mbappe'],
    answer: "Christiano Ronaldo",
    chosen_Answer:"",
},{
    question: "Who is the greatest footballer?",
    option:['Christiano Ronaldo','Messi','Ronaldo','Pepe'],
    answer: "Christiano Ronaldo",
    chosen_Answer:"",
},{
    question: "Where is Ibadan?",
    option:['Nigeria','Niger','USA','UK'],
    answer: "Nigeria",
    chosen_Answer:"",
},{
    question: "Which is the largest black country in terms of population?",
    option:['Jamaica','Nigeria','Mauritania','Benin'],
    answer: "Nigeria",
    chosen_Answer:"",
},
{
    question: "Who is the Governor of lagos?",
    option:['Makinde','Sanwo-Olu','Ambode','Abiodun'],
    answer: "Sanwo-Olu",
    chosen_Answer:"",
}]

var score=0;
 var ch
var index=0
function show() {
    if (!questions[index]) {
        return
    }
    quest.innerHTML = `<h5> ${index +1}. ${questions[index].question}</h5>`
    questions[index].option.forEach(function (element) {
        quest.innerHTML += `<h6><input type=radio value  = '${element}'> ${element} </h6>`;
    });
     ch= document.querySelectorAll("input[type=radio]")
    ch.forEach(function(params) {
                params.addEventListener("click",check)
                 if (params.value == questions[index].chosen_Answer) {
                     params.checked = true
                 }
             });
}

show()




function check(params) {

   ch.forEach(function (checks) {
    checks.checked=false
   })
  
   params.target.checked=true;
   questions[index].chosen_Answer=params.target.value;
//    console.log(params.target.value);
//    console.log(questions[index].chosen_Answer)



  
}

function submitt() {
    // var score =questions.filter(function (ques) {
    //     return ques.chosen_Answer == ques.answer
    // })
    // score=0
    // console.log(score.length);

score=0
    for (let index = 0; index < questions.length; index++) {
        if (questions[index].chosen_Answer == questions[index].answer) {
                     score++
                }
        
    }
    // score =0;
    // questions.forEach(ques => {
    //     if (ques.chosen_Answer == ques.answer) {
    //         score++
    //     }
    // });
    // alert(score)
     
    quest.innerHTML=`You got ${score} out of ${questions.length} questions`
}

function previous() {
    index--
    show()
}
function next() {
    index++
    show()
}

