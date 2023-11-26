// fetchEmails.js
import getInbox from './getInbox';

const fetchEmails3 = async (access_token, labelId3) => {
    const emails = await getInbox(access_token, labelId3);
    const messages = emails.map(email => {
        let content;
    if (email.payload.parts) {
      content = atob(email.payload.parts[0].body.data);
    } else {
      content = atob(email.payload.body.data);
    }
    return { content };
  });
  return messages;
};

export default fetchEmails3;