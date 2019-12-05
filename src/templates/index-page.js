import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/sections/Hero'
import MiddleState from '../components/sections/MiddleState'
import Layout from '../components/Layout'


export const IndexPageTemplate = ({
  background_image,
  title,
  subtitle,
  skills_list,
  logo,
  mdst_heading,
  gf_screenshot,
  gf_name,
  gf_tech,
  gf_description,
  gf_website,
  gf_repo,
}) => (
  <div className='homepage'>
    <Hero 
      background_image={
        !!background_image.childImageSharp ?
        background_image.childImageSharp.fluid.src :
        background_image
      }
      title={title}
      subtitle={subtitle}
      skillItems={skills_list.skills}
    />
    <MiddleState
      logo={
        !!logo.childImageSharp ?
        logo.childImageSharp.fluid.src :
        logo
      }
      mdst_heading={mdst_heading}
      gf_screenshot={
        !!gf_screenshot.childImageSharp ?
        gf_screenshot.childImageSharp.fluid.src :
        gf_screenshot
      }
      gf_name={gf_name}
      gf_tech={gf_tech}
      gf_description={gf_description}
      gf_website={gf_website}
      gf_repo={gf_repo}
    />
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        background_image={frontmatter.hero.background_image}
        title={frontmatter.hero.title}
        subtitle={frontmatter.hero.subtitle}
        skills_list={frontmatter.hero.skills_list}
        logo={frontmatter.middlestate.logo}
        mdst_heading={frontmatter.middlestate.mdst_heading}
        gf_screenshot={frontmatter.middlestate.grizzlyfest.screenshot}
        gf_name={frontmatter.middlestate.grizzlyfest.name}
        gf_tech={frontmatter.middlestate.grizzlyfest.tech_used}
        gf_description={frontmatter.middlestate.grizzlyfest.description}
        gf_website={frontmatter.middlestate.grizzlyfest.website_link}
        gf_repo={frontmatter.middlestate.grizzlyfest.repo_link}
      />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  skills_list: PropTypes.shape({
    skills: PropTypes.array,
  }),
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mdst_heading: PropTypes.string,
  gf_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gf_name: PropTypes.string,
  gf_tech: PropTypes.string,
  gf_description: PropTypes.string,
  gf_website: PropTypes.string,
  gf_repo: PropTypes.string,
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {

        hero {
          background_image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
          skills_list {
            skills {
              skill
            }
          }
        }

        middlestate {
          logo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mdst_heading
          grizzlyfest {
            screenshot {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            tech_used
            description
            website_link
            repo_link
          }

        }

      }
    }
  }
`
