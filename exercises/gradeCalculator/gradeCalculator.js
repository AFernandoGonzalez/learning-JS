
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const score3 = document.getElementById('score3');
const result = document.getElementById('result');

const gradeAvg = document.getElementById('gradeAvg');

const calculateButton = document.getElementById('calculateButton');

const handleFinalGrade = () => {
    const avgScore = (Number(score1.value) + Number(score2.value) + Number(score3.value))/ 3;
    gradeAvg.innerHTML = `Your average score is ${avgScore.toFixed(2)}`;
    if(avgScore > 90){
        result.innerHTML = `Your final grade is A`;
    }else if(avgScore > 80 && avgScore < 89){
        result.innerHTML = `Your final grade is B`;
    }else if (avgScore > 70 && avgScore <79){   
        result.innerHTML = `Your final grade is C`;
    }else {
        result.innerHTML = `Your final grade is F`;
    }

    score1.value = '';
    score2.value = '';
    score3.value = '';

    

}

calculateButton.addEventListener('click', handleFinalGrade)