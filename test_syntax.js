const fs = require('fs');
const acorn = require('acorn');
try {
    const code = fs.readFileSync('c:/Users/Lenovo/Desktop/ML-CV-Learning/references.js', 'utf8');
    acorn.parse(code, {ecmaVersion: 2020});
    console.log('Syntax OK');
} catch (e) {
    console.log('Syntax Error: ' + e.message + ' at line ' + e.loc.line + ' col ' + e.loc.column);
}
