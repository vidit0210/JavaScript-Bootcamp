//Students Score/ Maximum Score

let checkGrade = (precent) => {
    if (precent >= 90) return 'A';
    if (precent >= 80 && precent <= 89) return 'B'
    if (precent >= 70 && precent <= 79) return 'C'
    if (precent >= 60 && precent <= 69) return 'D'
    if (precent <= 59) return 'F'

}
let getReport = (obtain_marks, totalMarks) => {
    let precent = (obtain_marks / totalMarks) * 100;
    let grade = checkGrade(precent)
    return grade
}

console.log(getReport(5, 20));