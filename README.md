Need config.js which stores the api key for mailing list.

Sample:

```javascript
config = {
  segmentKey: 'segment.io key',
  user: 'mailgun user',
  key: 'mailgun api key',
  sendMessage: 'mailgun address for sending messages',
  membersList: 'mailgun address of members mailing list',
  confirmSubscription: 'callback url to confirm mailing list subscription'
};

module.exports = config;
```
