
const feedback = "Great product! Fast delivery and amazing sound quality!";

const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

const lowerFeedback = feedback.toLowerCase();
const hasNegativeWords =
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor");

console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

if (!hasNegativeWords) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
