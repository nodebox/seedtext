# SeedText


## About

SeedText is a JavaScript based procedural content generator, available as an [NPM module](https://npmjs.com/package/seedtext). It has been created by the [EMRG](https://www.emrg.be/) group based in Antwerp, Belgium. 

## Installation

SeedText is available as a standard NPM module so it can be easily installed using

    npm install seedtext 

## Usage

### Overview

From a high-level perspective, SeedText can be thought of as a seeded templating engine with extra capabilities. There are two parts that need to be present for it to work - the core content-generating engine and a template written in Seed microlanguage.  SeedText plays the role of the core engine, template written in Seed must be supplied externally. For more information on writing Seed templates, see the respective [documentation](https://seed.emrg.be/docs). Sample Seed templates can also be seen in _templates/sample_ subdirectory of this repository.

### Methods

The core library offers access to the SeedText using these methods:

#### parsePhraseBook()

- **Description**:

  This method takes in a Seed program source, parses it and creates a phraseBook according to it. This phrase book is later used for generation.

  Examples of calling parsePhraseBook() method:

  ```javascript
  // using default settings
  phraseBook = parsePhraseBook(s, loadSketch, conditionalVariables);
  ```

- **Input**: 
  - s: The source code of the Seed template according to which the generation should be done. 

  - _loadSketch_: This variable can be of two distinct types. It can be a _string_ or a _function_. Depending on its type, the usage is as follows:

    - _string_: In this case, _loadSketch_ contains string that specifies which of the base sketch loading methods to use. Supported keywords are _'file'_ and _'url'_.
    - _function_: If a custom implementation of loading method is needed, it can be simply passed in using this parameter. This function should return the source of the loaded sketch.

    The default value of this parameter is _'file'_.

  - _conditionalVariables_: Conditional variables are used for specifying any variables that any of the sketches (regardless of whether it is the main sketch or imported sketches) require to execute correctly.

    The default value of this parameter is _{}_.

- **Output**: _phraseBook_ 

#### generateString()

- **Description**:

  This method takes in a phraseBook and uses it to generate a string generated based on the rules specified in the phraseBook. The generation can be seeded, enhanced by globalMemory and so on.

  Examples of calling generateString() method:

  ```javascript
  // using default settings
  generatedString = generateString(phraseBook);

  // calling generateString with a custom seed value
  generatedString = generateString(phraseBook, seed = 42);
  ```

- **Input**: 
  - _phraseBook:_ A phraseBook generated by calling _prasePhraseBook_ method. See description of this method for more information. 

  - _rootKey:_ This parameter specifies the key in the Seed source file to be used as the root for generation. Generally, _'root'_ should be the value here, unless there is real need for using something else.

    The default value of this parameter is _'root'_.

  - _globalMemory:_ This parameter can be used to optionally define variables that will be available globally.

    The default value of this parameter is _{}_.

  - _seed:_ This is the seed number, used for replicability of results. 

    The default value of this parameter is 1234.

  - _t:_ This is the time variable, used for timeout. Might be obsolete right now and removed in later versions.

    The default value of this parameter is _0.0_.

- **Output**: _string_

### Using a Seed Source File

The information provided in this part assumes that you already have written your Seed source file. To see documentation on writing Seed source files, [visit this page](https://seed.emrg.be/docs). 

Once the Seed source file is ready to be plugged in to the SeedText, the usage is quite simple. A full example can be seen in this repository in file _templates/seedTextUsage.js_. Below is a step-by-step description of the example code with description.

First we load the modules that we are going to use.

```javascript
const fs = require('fs');
const seedtext = require('seedtext');
```
We can then either define our own method for loading the initial sketch. And example of that would be this code for loading the sketch from file:

```javascript
function loadSketchFromFile(path) {
	var loadedSketch = fs.readFileSync(path, 'utf-8');  
    return loadedSketch;
};
```

After we dealt with how the sketch will be loaded we can actually load the sketch and pass it to relevant functions, getting generated output at the end. For this, we first load the sketch: 

```javascript
var seedSketch = loadSketchFromFile('path/to/your/sketch.txt');
```

Now we need to somehow use the two methods provided by SeedText: _parsePhraseBook_ and _generateString_. One possible way of doing that would be by using an async wrapper around these and using _callback_ for result.

```javascript
async function generate(seedSketch, loadSketch, conditionalVariables, callback) {
    const phraseBook = await seedtext.parsePhraseBook(seedSketch, loadSketch, conditionalVariables);
    const generatedString = await seedtext.generateString(phraseBook, seed = 42);
    callback(generatedString);
}
```

The wrapper takes in four parameters. The first one - _seedSketch_ - contains the loaded Seed source. The second one specifies what method to load imported sketches with, if there are any. The third parameter is _conditionalVariables_ which can be used for passing in variables needed for conditional generation. The last parameter is the callback. Now we can use this function as follows:

```javascript
// using built-in 'file' load method
generate(seedSketch, 'file', {'conditional_variable': 'some_value'}, (result) => {
    console.log(JSON.stringify(result));
});

// using our previously defined custom load method
generate(seedSketch, loadSketchFromFile, {'conditional_variable': 'some_value'}, (result) => {
    console.log(JSON.stringify(result));
});
```

The result is logged into console and is being run through JSON.stringify() before logging it. If not stringified, only part of the result will probably show as the output will most likely contain carriage return characters and so on. Depending on the use case at hand, you might want to handle the output differently.

### Using SeedText in Different Settings

SeedText has been designed in a way that allows many different applications to be build on top of it. By accessing the available methods, input from various sources can be plugged in and processed. SeedText has been previously used in a [web application](https://seed.emrg.be/) or as a text-generating module for a [Twitter Bot](https://github.com/clips/gsoc2018/tree/master/twitter-bot). The mentioned examples are just illustrative; with appropriate calls, SeedText can be used in any sort of application.

It is also worth noting that while SeedText strictly accepts text data as an input, it can easily be used to produce images defined textually (such as SVG) or to generate websites by manipulating HTML. The previously mentioned [Seed web application](https://seed.emrg.be/) shows these and many other possible uses. 

## Dependencies

SeedText has a dependency on very few NPM packages. There is dependency on [seedrandom](https://www.npmjs.com/package/seedrandom), which is used for seeding the procedural generation process, the [request](https://www.npmjs.com/package/request) dependency for fetching resources from URL when importing sketches and built-in [fs](https://nodejs.org/api/fs.html) module is also being used for importing of sketches.

## License

The package is distributed under MIT license.  The exact wording of the license can be found in the LICENSE file of this repository. 

## Contributors

- Frederik De Bleser
- Stefan Gabriëls
- Lieven Menschaert
- Kunal Mohta