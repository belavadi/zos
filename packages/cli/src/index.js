// module information
const version = 'v' + require('../package.json').version

// commands
import commands from './commands'
import scripts from './scripts'

// model objects
import files from './models/files'
import local from './models/local'
import network from './models/network'
import TestHelper from './models/TestHelper'
import Initializer from './models/initializer/Initializer'

// utils
import naming from './utils/naming'
import log, { silent } from './utils/stdout'
const stdout = { log, silent }

export {
  version,
  files,
  local,
  network,
  commands,
  scripts,
  naming,
  stdout,
  Initializer,
  TestHelper,
}
