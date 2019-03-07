const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
	token: 'xoxb-3236584496-569472553204-ZOqf4UIdYMKwvTIxetLfhPJt',
	name: 'BEN Slackbot'
});

// Start Handler
bot.on('start', () => {
	const params = {
		icon_emoji: ':ben:'
	}

	bot.postMessageToChannel('test3', "Let's Hear it For Generation Blockchain!", params);

});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
	if(data.type !== 'message') {
		return;
	}

	console.log(data);
	handleMessage(data.text);
	console.log()

	var res = data.text.toLowerCase();
	var words = res.split(" ");
	var filteredWords = [];

	for (var i = 0, l = words.length, w; i < l; i++) {
	    w = words[i]
	    if (!/^(#|\d+)/.test(w) && w.length > 3)
	        filteredWords.push(w)
	    if (res.includes('bitcoin')) {
	    	filteredWords.push('btc');
	    }
	    if (w == 'cardano') {
	    	filteredWords.push('ada');
	    }
   	    if (w == 'bitconnect') {
	    	filteredWords.push('bcc');
	    }
   	    if (w == 'binance') {
	    	filteredWords.push('bnb');
	    }
   	    if (w == 'ethereum') {
	    	filteredWords.push('eth');
	    }
   	    if (w == 'ripple') {
	    	filteredWords.push('xrp');
	    }
   	    if (w == 'hyperledger') {
	    	filteredWords.push('hyp');
	    }
   	    if (w == 'energy') {
	    	filteredWords.push('sunny');
	    }
   	    if (w == 'food') {
	    	filteredWords.push('hamburger');
	    }
   	    if (res.includes('blockchain')) {
	    	filteredWords.push('chains');
	    }
	}

    for (var i = 0; i < filteredWords.length; i++) {
        console.log(filteredWords[i]);
		bot.postReactionToChannel(data.channel, filteredWords[i], data.ts);
    }
});

// Respond to Data
function handleMessage(message) {
	if(message.includes('smile')) {
		runTest();
	}
}


// run the Test
function runTest() {
	const test = "test";

	const params = {
		icon_emoji: ':ben:'
	}

	bot.postMessageToChannel('test3', `Test: ${test}`,params);

//	bot.postReactionToChannel('CGT181BFG', 'smile', '1551949933.004400');

}