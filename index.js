const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
	token: 'xoxb-3236584496-569472553204-efP9iMIsQz1LqjJGaF2fK0Rt',
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

	var array = data.text.split(" ");

    var arrayLength = array.length;

    for (var i = 0; i < arrayLength; i++) {
        console.log(array[i]);
		bot.postReactionToChannel(data.channel, array[i], data.ts);
    }

	if(data.text.includes('smile')) {
		bot.postReactionToChannel(data.channel, 'smile', data.ts);
	}

	if(data.text.includes('bitcoin')) {
		bot.postReactionToChannel(data.channel, 'btc', data.ts);
	}

	if(data.text.includes('sunny')) {
		bot.postReactionToChannel(data.channel, 'sunny', data.ts);
	}

	if(data.text.includes('BEN')) {
		bot.postReactionToChannel(data.channel, 'ben', data.ts);
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