{
  const logger = require('../../../../utils/logger');

  const handleDeleteError = async (
    err: Error,
    bot,
    chatId: number,
  ): Promise<void> => {
    if (err.message === 'there is nothing to delete') {
      await bot.sendMessage(chatId, 'there is nothing to delete');
    } else {
      await bot.sendMessage(chatId, 'unable to delete, server error');
      logger.info(err);
    }
  };

  module.exports = handleDeleteError;
}
