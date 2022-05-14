const successHandler = (result, message) => {
  return {
    statusCode: 200,
    message: message,
    result: result,
  };
};

module.exports = successHandler;
