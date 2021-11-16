
let selectQuestion 
document.getElementById('selectQuestion').addEventListener('change', function(e){
    selectQuestion = e.target.value


async function getQuestion (){
    try{
    const response = await axios.get('https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json')
    console.log(response.data[selectQuestion].description)
    let res = response.data[0].description;
    changeQuestion(res);
    }catch(error) {
        console.log(error)
    }
}

getQuestion();

const changeQuestion = (response) => {
    document.getElementById('question').innerHTML = `<h4>${response} ?</h4>`
}
})