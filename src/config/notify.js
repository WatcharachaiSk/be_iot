const request = require("request");

exports.notifyEvent = (msg) => {
  request({
    uri: "https://notify-api.line.me/api/notify",
    method: "POST",
    auth: {
      bearer: "sV6F3HkedNq9q7kJMmSZNnhUG19GGiIPm6c6ptBRRV3",
    },
    form: {
      message: msg,
    },
  });
};
