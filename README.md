## Token Scripts README

To deploy the contract you need the private key of your Seed.  

You can add that value to the secrets.json file. You could also use a .env file for this.

Once you are ready, make sure the wallet you are using has some gas (a few $ worth on Polygon) and use the following on the command line: 

# npx hardhat run deploy_SWDTKN.js --network polygon

after that runs you will get back a contract address in your terminal. Copy that down as you will need to verify the contract (and obviously for a lot of other things).

Make sure you have set-up a polygonscan.com API key by signing up an account there. The API key you can get from one of the tabs in your account there. 

You add that API key to your secrets.json file. 

Now you can verify the contract with (replacing contractAddress with your actual contract address): 

# npx hardhat verify --network polygon --constructor-args argumentsToken.js contractAddress --show-stack-trace



