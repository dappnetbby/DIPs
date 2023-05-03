import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Dappnet Improvement Proposals" />
    <h1 className="page-heading">
      Dappnet Improvement Proposals{' '}

      <a
        href="https://discord.com/channels/1072688619321577522/1072700589236035685/"
        rel="nofollow"
      >
        <img
          className="max-w-full"
          src="https://img.shields.io/discord/1072688619321577522"
          alt="Discord"
        />
      </a>
    </h1>
    <p>
      Dappnet Improvement Proposals (DIPs) describe standards for the Dappnet platform, including the core browser client, protocols and other proposals.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/dips/dip-1">DIP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the DIPs{' '}
        <a href="https://github.com/dappnetbby/DIPs">repo</a> and pressing
        "Fork" in the top right.
      </li>
      <li>
        Add your DIP to your fork of the repository. There is a{' '}
        <a href="https://github.com/dappnetbby/DIPs/blob/master/dip-x.md">
          template DIP here
        </a>
        .
      </li>
      <li>
        Submit a Pull Request to Dappnet's{' '}
        <a href="https://github.com/dappnetbby/DIPs">DIPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final DIP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new SIP and
      assign it a number before merging it. Make sure you include a <code>discussions-to</code> header with the URL to a discussion forum or
      open GitHub issue where people can discuss the DIP as a whole.
    </p>
    <p>
      If your DIP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that DIP as follow: <code>dips/assets/dip-X</code> (for dip <b>X</b>). When linking to an
      image in the DIP, use relative links such as{' '}
      <code>../assets/dip-X/image.png</code>.
    </p>
    <p>
      When you believe your DIP is mature and ready to progress past the{' '}
      <code>Draft</code> phase, you should reach out to Discord to discuss.
    </p>

    <p>
      If a vote by the community on Discord (governance mechanisms TBA) reaches a super majority, the DIP is moved to{' '}
      <code>Approved</code>, otherwise it is <code>Rejected</code>.
    </p>

    <p>
      Once the DIP has been implemented, the DIP is assigned the{' '}
      <code>Implemented</code> status.
    </p>

    <h2>DIP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a new DIP before the
        Spartan Council and core contributors have assessed it.
      </li>
      <li>
        <strong>Approved</strong> - a DIP that has successfully reached a super
        majority Discord vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - a DIP that has failed to reach a
        supermajority vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - a DIP that has been released.
      </li>
    </ul>
  </Main>
)

export default IndexPage
