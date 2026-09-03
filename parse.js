const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\umang\\.gemini\\antigravity-ide\\brain\\02f2fe0a-de1c-4e02-88c5-d65daa05d1ce\\.system_generated\\steps\\31\\content.md', 'utf8');

// The google form data is typically in FB_PUBLIC_LOAD_DATA_
const match = content.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(.*?);/);
if (match) {
    try {
        const data = JSON.parse(match[1]);
        const questions = data[1][1];
        questions.forEach(q => {
            console.log("Question ID:", q[0]);
            console.log("Title:", q[1]);
            console.log("Type:", q[3]); // 0=text, 1=paragraph, 2=radio, 3=dropdown, 4=checkbox
            // Options if available
            if (q[4] && q[4][0] && q[4][0][1]) {
                console.log("Options:", q[4][0][1].map(o => o[0]).join(', '));
            }
            console.log('---');
        });
    } catch (e) {
        console.error("Error parsing JSON:", e);
    }
} else {
    // try to find just text labels
    const labels = content.match(/<div[^>]*class="[^"]*M7eMe[^"]*"[^>]*>(.*?)<\/div>/g);
    if (labels) {
        labels.forEach(l => console.log(l.replace(/<[^>]*>/g, '')));
    }
}
