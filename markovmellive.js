var rita = require('rita');
var fs = require('fs');
 
 
   rm = new rita.RiMarkov(2), file = 'moby-dick.txt';
   rm.minSentenceLength = 5;
   rm.maxSentenceLength = 20;
   
   
   
   				fs.readFile(__dirname + '/' + file, function(e, data) {   
				if (e) throw e;     
				loadMarkov(data.toString());
					});
					
					function loadMarkov(text) {
						rm.loadText(text);
						var sentenceOne = rm.generateSentences(1);
						var whale = sentenceOne;
						
						console.log(whale);
						}
