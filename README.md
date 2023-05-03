# DIPs

Dappnet Improvement Proposals (DIPs) describe standards for the Dappnet platform, including the core browser client, protocols and other proposals.

# Contributing

1.  Review [DIP-1](content/dips/dip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your DIP to your fork of the repository. There is a [template DIP here](dip-x.md).
4.  Submit a Pull Request to Dappnet's [DIPs repository](https://github.com/dappnetbby/DIPs).

Your first PR should be a first draft of the final DIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new SIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.synthetix.io](https://research.synthetix.io) where people can discuss the SIP as a whole.

If your DIP requires images, the image files should be included in a subdirectory of the `assets` folder for that SIP as follow: `assets/sip-X` (for sip **X**). When linking to an image in the SIP, use relative links such as `../assets/sip-X/image.png`.

# DIP Statuses

- **Draft** - The initial state of a new DIP.
- **Approved** - a DIP that has been approved for integration into Dappnet.
- **Implemented** - a DIP that has been released.

# Validation

DIPs must pass some validation tests.

It is possible to run the DIP validator locally:

```
npm install (if not done already)
npm run test
```

# JSON API

All DIPs data is available in JSON format by status at the following urls:
