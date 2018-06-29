# SeedText


## About

SeedText is a JavaScript based procedural content generator, available as an [NPM module][https://npmjs.com/package/seedtext]. It has been created by the [EMRG][https://www.emrg.be/] group based in Antwerp, Belgium. 

##Installation

SeedText is available as a standard NPM module so it can be easily installed using

    npm install seedtext 

## Usage

### Overview

From a high-level perspective, SeedText can be thought of as a seeded templating engine with extra capabilities. There are two parts that need to be present for it to work - the core content-generating engine and a template written in Seed microlanguage.  SeedText plays the role of the core engine, template written in Seed must be supplied externally. For more information on writing Seed templates, see the respective [documentation][https://seed.emrg.be/docs]. Sample Seed templates can also be seen in _templates/sample_ subdirectory of this repository.

### Methods

The core library offers access to the SeedText using these methods:

#### parsePhraseBook()

- **Description**:

  A lorem ipsum description for now.

  Examples of calling parsePhraseBook() method:

  ```javascript
  // using default settings
  phraseBook = parsePhraseBook(s, loadSketch);
  ```

- **Input**: 
  - s: 
  - loadSketch:

- **Output**: phraseBook 

#### generateString()

- **Description**:

  A lorem ipsum description for now.

  Examples of calling generateString() method:

  ```javascript
  // using default settings
  generatedString = generateString(phraseBook);

  // calling generateString with a custom seed value
  generatedString = generateString(phraseBook, seed = 42);
  ```

- **Input**: 
  - phraseBook 
  - rootKey = 'root'
  - globalMemory = {}
  - seed = 1234
  - t = 0.0

- **Output**:

### Using a Seed Source File

The information provided in this part assumes that you already have written your Seed source file. To see documentation on writing Seed source files, [visit this page][https://seed.emrg.be/docs]. 

Once the Seed source file is ready to be plugged in to the SeedText, the usage is quite simple:

```javascript
//example of usage
```
To do XYZ:

```javascript
//example of xyz usage
```

### Using SeedText in Different Settings

SeedText has been designed in a way that allows many different applications to be build on top of it. By accessing the available methods, input from various sources can be plugged in and processed. SeedText has been previously used in a [web application][https://seed.emrg.be/] or as a text-generating module for a [Twitter Bot][https://github.com/clips/gsoc2018/tree/master/twitter-bot]. The mentioned examples are just illustrative; with appropriate calls, SeedText can be used in any sort of application.

It is also worth noting that while SeedText strictly accepts text data as an input, it can easily be used to produce images defined textually (such as SVG) or to generate websites by manipulating HTML. The previously mentioned [Seed web application][[https://seed.emrg.be/]  shows these and many other possible uses. 

## Dependencies

SeedText has a dependency on only one other NPM package, [seedrandom][https://www.npmjs.com/package/seedrandom], which is used for seeding the procedural generation process. 

## License

The package is distributed under MIT license.  The exact wording of the license can be found in the LICENSE file of this repository. 

## Contributors

Frederik De Bleser
Stefan Gabriëls
Lieven Menschaert
Kunal Mohta