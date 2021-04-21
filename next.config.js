const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
          },
    }
  }

  return {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
  }
}