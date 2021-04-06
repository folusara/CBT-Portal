var questions =[{
    question: "What is the name of the president?",
    option:['Tinubu','Obj','Jonathan','Buhari'],
    answer: "Buhari",
    chosen_Answer:""
},{
    question: "Who is the world best footballer?",
    option:['Christiano Ronaldo','Messi','Neymar','Mbappe'],
    answer: "",
    chosen_Answer:""
},{
    question: "Who is the greatest footballer?",
    option:['Christiano Ronaldo','Messi','Ronaldo','Pepe'],
    answer: "Christiano Ronaldo",
    chosen_Answer:""
},{
    question: "Where is Ibadan?",
    option:['Nigeria','Niger','USA','UK'],
    answer: "Nigeria",
    chosen_Answer:""
},{
    question: "Which is the largest black country in terms of population?",
    option:['Jamaica','Nigeria','Mauritania','Benin'],
    answer: "Nigeria",
    chosen_Answer:""
},
{
    question: "Who is the Governor of lagos?",
    option:['Makinde','Sanwo-Olu','Ambode','Abiodun'],
    answer: "Sanwo-Olu",
    chosen_Answer:""
}]

index=0;

// var tablequestion=document.getElementsByClassName("quest");
// var answerOptions0=document.getElementsByClassName("option0");
// var answerOptions1=document.getElementsByClassName("option1");
// var answerOptions2=document.getElementsByClassName("option2");
// var answerOptions3=document.getElementsByClassName("option3");

// var question=[];
// var option0=[];
// var option1=[];
// var option2=[];
// var option3=[];
// questions.forEach(element => {
//     question.push(element.question)
//     option0.push(element.option[0])
//     option1.push(element.option[1])
//     option2.push(element.option[2])
//     option3.push(element.option[3])
// });



// for (let index = 0; index < questions.length; index++) {
//     tablequestion[index].innerHTML= question[index];
//     answerOptions0[index].innerHTML= option0[index];
//     answerOptions1[index].innerHTML= option1[index];
//     answerOptions2[index].innerHTML= option2[index];
//     answerOptions3[index].innerHTML= option3[index];
// }

// function showNext(){
//    if (index < questions.length) {
    

//     index++ 
//    }
  
// }

var index=0
var ch;

function show(){
    if (!questions[index]) {
        return
    }
    quest.innerHTML= `<h3>${index+1}.${questions[index].question}</h3>`;
    questions[index].option.forEach(function (element) {
        quest.innerHTML += `<p><input type=radio> ${element}</p>`
    })

    ch = document.querySelectorAll('input[type = radio]');
    ch.forEach(function(params) {
        params.addEventListener("click",check)
    });
  
}
show()



function check(element) {
    ch.forEach(function(checks) {
        checks.checked = false;
    })

    element.target.checked=true;
}




function previous() {
    index--;
    show()
}
function next() {
    index++;
    show()
}

