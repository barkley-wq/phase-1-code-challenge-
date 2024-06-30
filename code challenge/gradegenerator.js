function studentMarks(marks){
    marks = parseFloat(marks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Error. Marks should be bewtween 0 and 100.");
    }
    let grade = ""
    if (marks > 79) {
    grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
    } else {
    grade = 'E';
    }
    return console.log (grade)
}
