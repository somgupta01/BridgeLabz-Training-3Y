
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const formattedScores = scores.map(score => `Score: ${score}`);
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50);

console.log("Student Scores:", scores);
console.log("Formatted Scores:", formattedScores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedStudents.length);
console.log("Total Students:", scores.length);
