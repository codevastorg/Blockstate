# Property Ownership Tokenization

## Description
The **Property Tokenization Smart Contract** is a decentralized platform that enables the tokenization of real estate properties, facilitating fractional ownership and investments. The contract allows property owners to create and manage tokenized assets, offers, and lease agreements. Investors can participate by purchasing tokens representing a fraction of a property, and both property owners and investors can engage in leasing and dividend distribution. The contract also supports secure transactions and verification through the Internet Computer Protocol (ICP).

## Features

1. **Property Owner Management**
   - Create, update, and delete property owner profiles.
   - Store owner details such as name, phone number, email, and properties owned.

2. **Investor Management**
   - Create, update, and delete investor profiles.
   - Manage investor details including name, email, phone number, and total investments.
   
3. **Asset (Property) Tokenization**
   - Tokenize real estate properties by creating digital assets.
   - Define property details like title, description, location, and total value.
   - Automatically divide property value into tokens for fractional ownership.

4. **Investment Offerings**
   - Create and manage investment offerings for tokenized properties.
   - Specify price per token, available tokens, and offering duration.
   - Reserve and complete investments with secure transaction tracking.

5. **Leasing**
   - Create lease agreements for tokenized assets.
   - Define lease duration, rental price per token, and manage total rent collected.
   - Support for tenants to reserve and pay for leases.

6. **Dividend Distribution**
   - Reserve and distribute dividends from asset revenue to investors.
   - Automatically calculate dividend amounts based on tokens owned.

7. **Transaction Management**
   - Track and manage investment and rent transactions.
   - Secure transaction verification with memo and block validation.
   - Handle different transaction statuses such as pending, completed, and cancelled.

8. **Storage**
   - Utilize stable storage for property owners, investors, assets, offerings, leases, and transactions.
   - Automatically discard reservations after a timeout period for security and management.

9. **Payment Verification**
   - Verify payment details using the ICP Ledger Canister.
   - Ensure secure and accurate transfers of tokens and funds between participants.

10. **Canister-to-Canister Communication**
    - Integrate ledger calls for querying transaction details and ensuring secure investment operations.

This smart contract supports a full-featured ecosystem for decentralized property ownership and investment, making real estate more accessible and liquid by enabling fractional ownership and transparent transactions.


# Canister Access

## Frontend Canister via Browser

[**dfinity_js_frontend**](https://ndyfi-byaaa-aaaag-qkifa-cai.icp0.io/)

This link directs you to the frontend of the project, deployed on the Internet Computer Protocol (ICP).

---

## Backend Canister via Candid Interface

- [**dfinity_js_backend**](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=nk3ou-xqaaa-aaaag-qkieq-cai)

This link provides access to the backend canister through the Candid interface, allowing for interactions and management of backend services.

---

## Internet Identity Canister

- [**internet_identity**](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=nezd4-maaaa-aaaag-qkifq-cai)

This link is for managing identity authentication via the Internet Identity canister on the Internet Computer.

---

### Instructions

1. Visit the frontend canister link to interact with the dapp.
2. Use the backend Candid interface link to inspect or manage backend canister operations.
3. For user authentication, use the Internet Identity canister link to log in and authenticate your session.

### Slides
[**Presentation**](https://www.canva.com/design/DAGQvnz3P7E/FvATdl-S_nDR71PQzJIypQ/edit?utm_content=DAGQvnz3P7E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Things to be explained in the course:

1. What is Ledger? More details here: https://internetcomputer.org/docs/current/developer-docs/integrations/ledger/
2. What is Internet Identity? More details here: https://internetcomputer.org/internet-identity
3. What is Principal, Identity, Address? https://internetcomputer.org/internet-identity | https://yumimarketplace.medium.com/whats-the-difference-between-principal-id-and-account-id-3c908afdc1f9
4. Canister-to-canister communication and how multi-canister development is done? https://medium.com/icp-league/explore-backend-multi-canister-development-on-ic-680064b06320

## How to deploy canisters implemented in the course

### Ledger canister

`./deploy-local-ledger.sh` - deploys a local Ledger canister. IC works differently when run locally so there is no default network token available and you have to deploy it yourself. Remember that it's not a token like ERC-20 in Ethereum, it's a native token for ICP, just deployed separately.
This canister is described in the `dfx.json`:

```
	"ledger_canister": {
  	"type": "custom",
  	"candid": "https://raw.githubusercontent.com/dfinity/ic/928caf66c35627efe407006230beee60ad38f090/rs/rosetta-api/icp_ledger/ledger.did",
  	"wasm": "https://download.dfinity.systems/ic/928caf66c35627efe407006230beee60ad38f090/canisters/ledger-canister.wasm.gz",
  	"remote": {
    	"id": {
      	"ic": "ryjl3-tyaaa-aaaaa-aaaba-cai"
    	}
  	}
	}
```

`remote.id.ic` - that is the principal of the Ledger canister and it will be available by this principal when you work with the ledger.

Also, in the scope of this script, a minter identity is created which can be used for minting tokens
for the testing purposes.
Additionally, the default identity is pre-populated with 1000_000_000_000 e8s which is equal to 10_000 \* 10**8 ICP.
The decimals value for ICP is 10**8.

List identities:
`dfx identity list`

Switch to the minter identity:
`dfx identity use minter`

Transfer ICP:
`dfx ledger transfer <ADDRESS> --memo 0 --icp 100 --fee 0`
where:

- `--memo` is some correlation id that can be set to identify some particular transactions (we use that in the marketplace canister).
- `--icp` is the transfer amount
- `--fee` is the transaction fee. In this case it's 0 because we make this transfer as the minter idenity thus this transaction is of type MINT, not TRANSFER.
- `<ADDRESS>` is the address of the recipient. To get the address from the principal, you can use the helper function from the marketplace canister - `getAddressFromPrincipal(principal: Principal)`, it can be called via the Candid UI.

### Internet identity canister

`dfx deploy internet_identity` - that is the canister that handles the authentication flow. Once it's deployed, the `js-agent` library will be talking to it to register identities. There is UI that acts as a wallet where you can select existing identities
or create a new one.

### Marketplace canister

`dfx deploy dfinity_js_backend` - deploys the marketplace canister where the business logic is implemented.
Basically, it implements functions like add, view, update, delete, and buy products + a set of helper functions.

Do not forget to run `dfx generate dfinity_js_backend` anytime you add/remove functions in the canister or when you change the signatures.
Otherwise, these changes won't be reflected in IDL's and won't work when called using the JS agent.
