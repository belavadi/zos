import stdout from '../utils/stdout';
import ControllerFor from '../models/network/ControllerFor'
import ScriptError from '../models/errors/ScriptError'

export default async function setAdmin({ newAdmin, packageName, contractAlias, proxyAddress, network, txParams = {}, networkFile = undefined}) {
  if (!contractAlias && !proxyAddress) {
    throw Error('The address or name of the contract to transfer upgradeability admin rights must be provided.')
  }

  const controller = new ControllerFor(network, txParams, networkFile)

  try {
    const proxies = await controller.setProxiesAdmin(packageName, contractAlias, proxyAddress, newAdmin);
    proxies.forEach(proxy => stdout(proxy.address));
    controller.writeNetworkPackageIfNeeded()
  } catch(error) {
    const cb = () => controller.writeNetworkPackageIfNeeded()
    throw new ScriptError(error, cb)
  }
}
