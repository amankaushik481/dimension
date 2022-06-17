import React from "react";
import "./whitepaper.css";
import { Navbar } from "../Components";

const Whitepaper = () => {
  return (
    <div>
      <Navbar />
      <div className="whitepaper">
        <div className="text__section">
          <h3>Welcome</h3>
          <p>
            Welcome to Dimension, the masternode mining and staking protocol.
          </p>
        </div>

        <div className="text__section">
          <h3>Vision</h3>
          <p>
            Our vision is to create a best platform for retail/public investors
            and helping other small MCap proof of stake cryptocurrencys.
            <br />
            a) Create a simple one click investing platform for investors, which
            gets them best returns possible with low or managed risk.
            <br />
            b) Helping other small MCap proof of stake masternodable
            cryptocurrency in increasing their transaction speed and transaction
            limit per seconds.
          </p>
        </div>

        <div className="text__section">
          <h3>Introduction/Overview</h3>
          <p>
            Dimension is a staking protocol where people can stake their DIME
            tokens to get high returns averagely around 80% to 100% per annum.
            There is 6 months lock in period for principal amount, but investors
            can withdraw interest amount earned as reward every month by just
            clicking on withdraw button. Reward will be credited to their
            respective wallet within 2 business days. <br />
            Principal amount can be available for unstaking after six months
            period. Dimension helps small Marketcap cryptocurrencys in
            validation process through setting up their blockchain masternodes
            and help them in increasing their transaction speed and no. of
            transaction limit per second. We add upto 6 masternodable crypto in
            our list every year to make it more sustainable, this help dimension
            earn more rewards by operating their masternodes. <br />
            Dimension includes masternodable cryptos which functions in
            decentralised exchanges, crypto denominated shopping areas,
            casino's, and etc. Further cryptos with great use cases are in
            progress.
          </p>
        </div>

        <div className="text__section">
          <h3>How it works</h3>
          <p>
            Dimension is masternode mining crypto farm where we operate mining
            equipments, and using their computing power, the mathematical
            algorithm solves the complex validation problems and validates the
            transactions of other proof of stake masternodable cryptocurrencys
            which in return get rewarded by their native tokens on daily basis.
            <br />
            There is 6 months lock-in period for principal amount because it
            takes time to switch off a masternode and get back principal amount,
            but after 6 months you will be able to unstake your principal amount
            back. Principal amount will credited to your respective walled
            within 10 to 15 business days.
          </p>
        </div>

        <div className="text__section">
          <h3>Technology</h3>
          <p>
            Dimension is built using a combination of the latest Web3
            technologies for a seamless onboarding experience.
            <br />
            FRONT END <br />
            React is a free and open-source front-end JavaScript library for
            building user interfaces or UI components. It is maintained by
            Facebook and a community of individual developers and companies. It
            is one of the most popular and loved javascript libraries for
            frontend development. Redux is used with React for state management
            of the application. Material UI or MUI provides a robust,
            customizable, and accessible library of foundational and advanced
            components, that enables us to build a design system and develop
            React applications faster. With over 35,000 stars on GitHub,
            <br />
            Material-UI is one of the top user interface libraries for React out
            there. EthersJs is a JavaScript library that allows us to interact
            with the Ethereum blockchain. The library includes utility functions
            in JavaScript and TypeScript, and has all the capabilities of an
            Ethereum wallet. It can retrieve user accounts, send transactions,
            interact with smart contracts, and more. <br />
            BACK END <br />
            Solidity is a contract-oriented, high-level programming language for
            implementing smart contracts.Smart contracts are programs which
            govern the behaviour of accounts within the Ethereum state. Solidity
            has been designed to target the Ethereum Virtual Machine (EVM). It
            has similar syntax to the scripting language of JavaScript.It is a
            statically typed scripting language which does the process of
            verifying and enforcing the constraints at compile-time as opposed
            to run-time. <br />
            Openzeppelin is an open-source framework for building secure smart
            contracts, hence simplifying the process of building smart
            contracts. This means that we can ship our products faster, whilst
            also minimizing security risks. With the help of OpenZeppelin, we
            can focus on deploying smart contracts instead of dealing with the
            extra hassle of building dedicated security tools. Hardhat is an
            Ethereum development environment. It facilitates performing frequent
            tasks, such as running tests, automatically checking code for
            mistakes or interacting with a smart contract. It helps us to manage
            many of the tasks that are inherent to developing dApps and smart
            contracts. It provides the essential tools to understand where an
            application fails and provides an answer to solve them <br />
            The Graph is an indexing protocol for querying networks like
            Ethereum and IPFS or in simple words theGraph is an open-sourced
            software used to collect, process and store data from various
            blockchain applications to facilitate information retrieval.It
            analyses and gathers blockchain data before storing it into various
            indices, called Subgraphs, allowing any application to send a query
            to its protocol and receive an immediate response.
            <br />
            INFRASTRUCTURE <br />
            Our code is hosted on Github. GitHub is a web-based interface that
            uses Git, the open source version control software that lets
            multiple people make separate changes to web pages at the same time.
          </p>
        </div>

        <div className="text__section">
          <h3>Dime tokens</h3>
          <p>
            Native token of Dimension Protocol is DIME, which has multiple
            utilities within the protocol.
            <br />
            a) Staking Mechanism - Dimension token holders can stake their
            tokens to be a part of mining process and get rewards earned from
            masternodes.
            <br />
            b) Wallet Transactions - Every transaction done in this protocol by
            users will be in DIME token like - staking, unstaking, reinvesting,
            withdrawing.
            <br />
            c) Swapping Tokens [Initiating soon]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
