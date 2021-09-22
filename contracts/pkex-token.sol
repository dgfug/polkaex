/**

██████╗  ██████╗ ██╗     ██╗  ██╗ █████╗ ███████╗██╗  ██╗
██╔══██╗██╔═══██╗██║     ██║ ██╔╝██╔══██╗██╔════╝╚██╗██╔╝
██████╔╝██║   ██║██║     █████╔╝ ███████║█████╗   ╚███╔╝
██╔═══╝ ██║   ██║██║     ██╔═██╗ ██╔══██║██╔══╝   ██╔██╗
██║     ╚██████╔╝███████╗██║  ██╗██║  ██║███████╗██╔╝ ██╗
╚═╝      ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
**/

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity 0.8.0;
pragma experimental ABIEncoderV2;

contract PKEX is ERC20, AccessControl {
    // Create a new role identifier for the minter role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @notice Construct a new Uni token
     * @param ownerAccount The initial account to grant all the tokens
     */
    constructor(address ownerAccount) ERC20("PolkaEx", "PKEX") {
        require(ownerAccount != address(0), "PKEX::constructor:Zero address");

        _mint(ownerAccount, 100_000_000e18);
        _setupRole(DEFAULT_ADMIN_ROLE, ownerAccount);
        _setupRole(MINTER_ROLE, ownerAccount);
    }

    function mint(address to, uint256 amount) external {
        // Check that the calling account has the minter role
        require(
            hasRole(MINTER_ROLE, msg.sender),
            "Meter: Caller is not a minter"
        );
        _mint(to, amount);
    }

    function burnFrom(address account, uint256 amount) external {
        uint256 currentAllowance = allowance(account, _msgSender());
        require(
            currentAllowance >= amount,
            "ERC20: burn amount exceeds allowance"
        );
        _approve(account, _msgSender(), currentAllowance - amount);
        _burn(account, amount);
    }
}
