const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
})
// Create global variables 
let questionContainer = document.getElementById('question');
let currentQuestion;
let questions = [];
let arr1 = [];
let ledgerType = ['revenue', 'deferred', 'cash', 'receivable', 'contra', 'system-credit']
let choices = document.getElementById('cashSelect');
let choices2 = document.getElementById('accrualSelect');
let title = document.getElementById('title');
// Populate drop downs with ledger array 
for (let i = 0; i < ledgerType.length; i++) {
	let option = ledgerType[i];
    let el = document.createElement('option');
    el.value = option;
    el.textContent = option;
    choices.appendChild(el);
}
for (let i = 0; i < ledgerType.length; i++) {
	let option = ledgerType[i];
    let el = document.createElement('option');
    el.value = option;
    el.textContent = option;
    choices2.appendChild(el);
}
// Function passed in fetch function
function showQuestion(q){
    questionContainer.innerHTML = `<h4>${q}</h4>`
}

// next.addEventListener('click',(e)=> {
//     currentQuestion = e.target.value;
//     console.log(currentQuestion)
//     next.classList.add('hidden')
// })

//Input Ids
let cashDate = document.getElementById('cashDate');
let cashDr = document.getElementById('cashDr');
let cashCr = document.getElementById('cashCr');
let cashSelect = document.getElementById('cashSelect');
let accrualDate = document.getElementById('accrualDate');
let accrualDr = document.getElementById('accrualDr');
let accrualCr = document.getElementById('accrualCr');
let accrualSelect = document.getElementById('accrualSelect');

function submit (c_day, c_dr, c_cr, c_type, a_day, a_dr, a_cr, a_type){
    let messages = [];
    if(cashDate.value !== c_day){
        messages.push('Incorrect Answer')
    }
    if(cashDr.value !== c_dr){
        messages.push('Incorrect Answer')
    }
    if(cashCr.value !== c_cr){
        messages.push('Incorrect Answer')
    }
    if(cashSelect.value !== c_type){
        messages.push('Incorrect Answer')
    }
    if(accrualDate.value !== a_day){
        messages.push('Incorrect Answer')
    }
    if(accrualDr.value !== a_dr){
        messages.push('Incorrect Answer')
    }
    if(accrualCr.value !== a_cr){
        messages.push('Incorrect Answer')
    }
    if(accrualSelect.value !== a_type){
        messages.push('Incorrect Answer')
    }
    if ( messages.length > 0){
        alert(`There are ${messages.length} wrong answers`)
        title.classList.add('lose')

    }
    else {
        alert('Correct')
        title.classList.add('win')

    }
}

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(e){


    //Fetch the data
let url = 'https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json'
async function getQuestion (){
    try{
    const response = await axios.get(url)
    let ques = response.data[0].description
    questions.push(response.data[0].description)
    arr1.push(response.data[0].correct_answers[1].entries[1].type);
    
    let cDay = response.data[0].correct_answers[0].entries[0].when;
    let cDr = response.data[0].correct_answers[0].entries[0].Dr;
    let cCr = response.data[0].correct_answers[0].entries[1].Cr;
    let cType = response.data[0].correct_answers[0].entries[0].type;
    let aDay = response.data[0].correct_answers[1].entries[0].when;
    let aDr = response.data[0].correct_answers[1].entries[0].Dr
    let aCr = response.data[0].correct_answers[1].entries[1].Cr;
    let aType = response.data[0].correct_answers[1].entries[1].type;
    
    showQuestion(ques)
    submitBtn.addEventListener('click',submit(cDay, cDr.toString(), cCr.toString(), cType, aDay, aDr.toString(), aCr.toString(), aType))
    }catch(error) {
        console.log(error)
    }
}
    getQuestion();
})

console.log(questions)
console.log(arr1)






