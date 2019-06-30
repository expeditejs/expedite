const util = require('util')
const writeFile = util.promisify(require('fs').writeFile)

const newReadmeContent = `# My ExpediteJS project

## Documentation

Documentation available :point_right: [here](https://your.docs.link.goes.here/)`

/**
 * Replace README.md content
 *
 * @returns {Promise<any>}
 */
module.exports = async () =>
  await writeFile(`${__dirname}/../../README.md`, newReadmeContent)
