require('../core/worker')

/* global WIKI */

module.exports = async (job) => {
  WIKI.logger.info(`Rendering page ${job.data.path}...`)

  try {

    WIKI.logger.info(`Rendering page ${job.data.path}: [ COMPLETED ]`)
  } catch (err) {
    WIKI.logger.error(`Rendering page ${job.data.path}: [ FAILED ]`)
    WIKI.logger.error(err.message)
  }
}