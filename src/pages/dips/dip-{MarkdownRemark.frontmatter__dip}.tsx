import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { DipPageQuery } from '../../../types/gql'
import { getGithubLink } from '../../components/utils'

interface Props {
  frontmatter__dip: number
  data: DipPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, fileAbsolutePath } = markdownRemark
  const githubLink = getGithubLink(fileAbsolutePath)
  return (
    <Main>
      <Helmet title={`DIP-${frontmatter.dip}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        <a href={githubLink} className="inline-block">
          DIP-{frontmatter.dip}: {frontmatter.title} <SourceIcon />
        </a>
      </h1>
      <FrontmatterTable frontmatter={frontmatter} />
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query dipPage($frontmatter__dip: Int) {
    markdownRemark(frontmatter: { dip: { eq: $frontmatter__dip } }) {
      fileAbsolutePath
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
