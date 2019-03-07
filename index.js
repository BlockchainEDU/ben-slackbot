const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
	token: 'xoxb-3236584496-569472553204-y70U184kNt7dkL2m8V3C10lo',
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
});

// Respond to Data
function handleMessage(message) {
	if(message.includes('test')) {
		runTest();
	}
}


// run the Test
function runTest() {
	const test = "test";

	const params = {
		icon_emoji: ':ben:'
	}

	bot.postMessageToChannel(
		'test3',
		`Test: ${test}`,
		params
	);

	bot.postReactionToChannel('CGT181BFG', 'smile', '1551949933.004400');

}