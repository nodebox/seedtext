const fs = require('fs');
const seedtext = require('seedtext');

function loadSketchFromFile(path) {
    var loadedSketch = fs.readFileSync(path, 'utf-8');
    return loadedSketch;
}; 

seedSketch = loadSketchFromFile('path/to/your/sketch.txt');   

async function generate(seedSketch, loadSketch, callback) {
    const phraseBook = await seedtext.parsePhraseBook(seedSketch, loadSketch, {'conditional_variable':'some_value'});
    const generatedString = await seedtext.generateString(phraseBook, seed=42);
    callback(generatedString);
}

generate(seedSketch, loadSketchFromFile, (result) => {
    console.log(JSON.stringify(result));
});
