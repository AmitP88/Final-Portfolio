import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/sections/Hero'
import MiddleState from '../components/sections/MiddleState'

import Layout from '../components/Layout'


export const IndexPageTemplate = ({ background_image, title, subtitle, skills_list, mdst_projects }) => (
  <div className='homepage'>
    <Hero 
      background_image={background_image}
      title={title}
      subtitle={subtitle}
      skillItems={skills_list.skills}
    />
    <MiddleState
      gridItems={mdst_projects.mdst_projects_list}
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
        mdst_projects={frontmatter.middlestate.mdst_projects}
      />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  background_image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  skills_list: PropTypes.shape({
    skills: PropTypes.array,
  }),
  mdst_projects: PropTypes.shape({
    mdst_projects_list: PropTypes.array,
  }),
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
          background_image
          title
          subtitle
          skills_list {
            skills {
              skill
            }
          }
        }

        middlestate {

          mdst_projects {
            mdst_projects_list {
              project {
                description
                image
                repo_link
                tech_used
                title
                website_link
              }
            }
          }

        }

      }
    }
  }
`
