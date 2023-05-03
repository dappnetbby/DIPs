---
dip: 1
title: DIP Purpose and Guidelines
author: Liam Zebedee (@liamzebedee)
created: 2023-05-03T00:00:00.000Z
type: Governance
status: Implemented
---

## What is a DIP?

DIP stands for Dappnet Improvement Proposal, adapted from the SIP (Synthetix Improvement Proposal) standard. The purpose of this process is to ensure changes to Dappnet are transparent and well-governed. A DIP is a design document providing information to the Dappnet community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

DIPs have three statuses: Draft, Approved, and Implemented.

## DIP & SCCP Rationale

We intend DIPs and SCCPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Dappnet. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single DIP contain a single key proposal or new idea. The more focused the DIP, the more successful it is likely to be.

A DIP or SCCP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## DIP Work Flow

Parties involved in the process are the _author_, the [_DIP editors_](#dip-editors), the Dappnet Core Contributors, and the Dappnet community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Dappnet community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intended effect. The appropriate public forum to gauge interest around your DIP or SCCP is [the Dappnet Discord](https://discord.gg/mZUK6reQwT).

Your role as the champion is to write the DIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful DIP will move along:

![DIP-workflow.png](https://github.com/dappnetbby/DIPs/blob/main/assets/dip-workflow.png)

Each status change is requested by the DIP author and reviewed by the DIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your DIP. The DIP editors will process these requests as per the conditions below.

- **Draft** -- This DIP is work-in-progress and being reviewed by a Dappnet Core Contributor with the champion.
- **Approved** -- This DIP has passed community governance and is now being prioritized for development.
- **Implemented** -- This DIP has been implemented and deployed.

## What belongs in a successful DIP?

Each DIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the DIP, including the DIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the DIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All DIPs must be in the public domain.

## DIP Formats and Templates

DIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that DIP as follows: `assets/dip-X` (for dip **X**). When linking to an image in the DIP, use relative links such as `../assets/dip-X/image.png`.

## DIP Status

DIPs have three possible statuses:

- Draft - A DIP that is open for consideration.
- Approved - A DIP that has been accepted.
- Implemented - A DIP that has been released.

## DIP Header Preamble

Each DIP must begin with an RFC 822 style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` dip:` <DIP number> (this is determined by the DIP editor)

` title:` <DIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` status:` <Draft \| Approved \| Implemented>

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <DIP number(s)>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the DIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

## Discussions and Development

Discussions about DIPs can take place in the Dappnet Discord at https://discord.gg/mZUK6reQwT. Development of the DIP can take place on the Dappnet GH at https://github.com/dappnetbby/DIPs.

## DIP Editors

The current DIP editors are

 * Liamz (@liamzebedee)

## DIP Editor Responsibilities

For each new DIP that comes in, an editor does the following:

- Read the DIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the DIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style.

If the DIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the DIP is ready for the repository, the DIP editor will:

- Assign a DIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this DIP)

- Merge the corresponding pull request

- Send a message back to the DIP author with the next step.

Many DIPs are written and maintained by developers with write access to the Dappnet codebase. The DIP editors monitor DIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on DIPs. We merely do the administrative & editorial part.

## History

The DIP document was derived heavily from the SIP Synthetix Improvement Proposal document, and in many places text was simply copied and modified. Any comments about the DIP document should be directed to the DIP editors. 

May 3, 2023: DIP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/dappnetbby/DIPs), which is also available by clicking on the History button in the top right of the DIP.

### Bibliography

[Dappnet Discord]: https://discord.gg/mZUK6reQwT
[Dappnet GH]: https://github.com/dappnetbby/
[pull request]: https://github.com/dappnetbby/dappnet/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
