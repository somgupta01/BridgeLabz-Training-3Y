const userName = "Rahul";
const age = 20;
const isStudent = true;
const subjects = ["Java", "SQL", "HTML"];
const user = { city: "Mathura", course: "B.Tech" };
const emptyValue = null;
let undefinedValue;

const report = [
    { label: "User Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    {
        label: "Subjects",
        value: subjects.join(", "),
        type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    { label: "User Object", value: JSON.stringify(user), type: typeof user },
    {
        label: "Empty Value",
        value: String(emptyValue),
        type: emptyValue === null ? "null" : typeof emptyValue
    },
    {
        label: "Undefined Value",
        value: String(undefinedValue),
        type: typeof undefinedValue
    }
];

console.table(report);