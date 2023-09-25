import Twitter from 'twit';

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token: process.env.TWITTER_ACCESS_TOKEN || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
});

console.log(twitterClient);


export default twitterClient;