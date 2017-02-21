const elements = require('./elements')

/*
  Challenge: using the periodic table, spell the following words with symbols from the periodic table
  complete with the full names of the elements, example:

  genius => GeNiUS (germanium nickel uranium sulfur)

  The challenge input items:
  genius
  functions
  bacon
  poison
  sickness
  ticklish
*/

/*
  What do we need?
  - method to take input
  - method to search elements object for matches based on input\
  - method to build transformed string along with full element names
*/

module.exports = {

  transformedString: "",
  userInput: "",
  matches: [],

  getInput: function(input){
    this.userInput = input
  },
  searchElements: function(userInput, elements){
    this.matches = []
    elements.forEach((element) => {
      if (userInput.toLowerCase().includes(element.symbol.toLowerCase())) {
        this.matches.push(element)
      }
    })
  },
  buildString: function(matches){
    
  },
  returnString: function(){},

}