import { Configuration, OpenAIApi } from "openai";

//get configuration from Configuration class + API key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

const superfluidPrompt = `
Superfluid is an asset streaming protocol that enables Web3 native recurring payments like subscriptions, salaries and rewards for DAOs and crypto-native businesses. It can be used to describe cash flows and execute them automatically over time fully on-chain.

Superfluid streams transfer value in a constant flow over time between wallets, in a non-custodial and permissionless way. Streams are programmable, composable, and modular, allowing developers to build custom applications on top of the protocol.

All Superfluid streams are minted as NFTs to the recipient, so they can see how much they are getting directly on their wallet without opening the Superfluid Dashboard. At the moment these NFTs and non transferable and are burned when a stream is canceled.

In order to add the streaming capabilities to ERC-20 tokens we need to wrap them 1:1 into Super Tokens just like AAVE or Compound. Wrapping and unwrapping can be fully automated, so you don’t have to do it manually. Wrapping is better than depositing to a smart contracts because funds remain in your wallet at all times.

Here are some Superfluid use cases:
-A ERC20 token that tokenizes units in Superfluid Instant Distribution Agreements.
-A continuous auction where users can enter by sending a stream to the contract. In principle, the highest bid is the winner of the auction.
-A contract which allows employees to borrow money against their salary via an undercollateralized or overcollateralized loan
-The Tradeable Cashflow: mint an NFT that doubles as a super app which takes in cashflows and redirects them to the NFT's owner
-An iteration on the Tradeable Cashflow example that makes use of UserData to display content on a digital billboard. Made with Scaffold-Eth
-Real time streaming DeFi exchange for dollar cost averaging and maximum capital efficiency
-Streaming Options - a DeFi primitive that allows you to create a tradeable cashflow option NFT where premium is paid for over time via a stream
-DAO budgeting NFT: a DAO budgeting framework that makes use of NFTs which represent a portion of DAO cash flows. These NFTs are meant to be distributed to working groups or individuals within DAOs
-Harberger Tax NFTs: an implementation where resources (could be NFTs) are assigned to participants based on a Harberger Tax implementation. Taxes are paid in streams, and in order to take over  a property you must pay the previous owner+start a new stream. This double action can be implemented using the Superfluid Batch Calls.
-NFT Display Ads Protocol: use the NFT Billboard example to create a system in which advertisers can pay for digital ad space in real time
-Stable Streaming exchange: a defi protocol where users can exchange stablecoins through a simple "constant sum" AMM. This would mean sending a 1DAI/s stream I would receive back a 1USDC/s stream (minus a fee). This would also have mechanisms to ensure the exchange is always funded so streams never fail.

Generate me a cool new Superfluid project idea please!
`

//can come back to this to give our users a prefix to build from... this is one of the main value adds of the entire application
const basePromptPrefix = 'Explain this ';

const generateAction = async (req, res) => {
    //run first prompt by concatenating user input from request and the base prompt prefix
    // console.log(req.body['userInput'])
    console.log(JSON.parse(req.body))
    const input = JSON.parse(req.body).userInput;
    const language = JSON.parse(req.body).language.anchorKey

    // const baseCompletion = await openai.createCompletion({
    //     model: 'text-davinci-003', //the model we're using: may want to change this
    //     prompt: `$This is ${language} code: ${input} 
    //     Here I'll explain the code to like you're a freshman computer science student. The following is an explanation that will help you understand what is happening, and HOW the code works overall: `,
    //     temperature: 0.7, // can tune these parameters based on what the model needs
    //     max_tokens: 400, // can tune these parameters based on what the model needs
    //     top_p: 1
    // });

    // const basePromptOutput = baseCompletion.data.choices.pop();
    // console.log(basePromptOutput)

    const superfluidComplettion = await openai.createCompletion({
        model: 'text-davinci-003', //the model we're using: may want to change this
        prompt: `${superfluidPrompt}`,
        temperature: 0.7, // can tune these parameters based on what the model needs
        max_tokens: 400, // can tune these parameters based on what the model needs
        top_p: 1
    });

    const superfluidPromptOutput = superfluidComplettion.data.choices.pop();

    // //prompt 2 - using prompt chain
    // const secondPrompt = `
    // $This is ${language} code: ${input} 
    
    // Here, we'll explain it to you like you're a freshman computer science student:

    // ${basePromptOutput}

    // Can I have a better explanation that explains the most important parts?
    // `

    // const secondPromptCompletion = await openai.createCompletion({
    //     model: 'text-davinci-002',
    //     prompt: `${base}`,
    //     temperature: 0.7,
    //     max_tokens: 500,
    // })

    // const secondPromptOutput = secondPromptCompletion.data.choices.pop();
    // console.log(secondPromptOutput)
    res.status(200).json({ output: superfluidPromptOutput })
}

export default generateAction;