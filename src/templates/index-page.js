import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/sections/Hero'
import MiddleState from '../components/sections/MiddleState'
import Testimonials from '../components/sections/Testimonials'
import PersonalProjects from '../components/sections/PersonalProjects'
import ContactForm from '../components/sections/ContactForm'

import Layout from '../components/Layout'


export const IndexPageTemplate = ({ 
  background_image,
  title,
  subtitle,
  skills_list,
  mdst_icon,
  mdst_icon_link,
  mdst_title,
  mdst_projects,
  ryan,
  tom,
  personal_background,
  personal_title,
  personal_projects,
}) => (
  <div className='homepage'>
    <Hero 
      background_image={background_image}
      title={title}
      subtitle={subtitle}
      skillItems={skills_list.skills}
    />
    <MiddleState
      icon={mdst_icon}
      icon_link={mdst_icon_link}
      title={mdst_title}
      gridItems={mdst_projects.mdst_projects_list}
    />
    <Testimonials
      ryan={ryan}
      tom={tom}
    />
    <PersonalProjects
      // background_image={personal_background}
      title={personal_title}
      gridItems={personal_projects.personal_projects_list}
    />
    <ContactForm />
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
        mdst_icon={frontmatter.middlestate.icon}
        mdst_icon_link={frontmatter.middlestate.icon_link}
        mdst_title={frontmatter.middlestate.title}
        mdst_projects={frontmatter.middlestate.mdst_projects}
        ryan={frontmatter.testimonials.ryan}
        // tom={frontmatter.testimonials.tom}
        // personal_background={frontmatter.personal.background_image}
        personal_title={frontmatter.personal.title}
        personal_projects={frontmatter.personal.personal_projects}
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
  mdst_icon: PropTypes.string,
  mdst_icon_link: PropTypes.string,
  mdst_title: PropTypes.string,
  mdst_projects: PropTypes.shape({
    mdst_projects_list: PropTypes.array,
  }),
  ryan: PropTypes.object,
  // tom: PropTypes.object,
  // personal_background: PropTypes.string,
  personal_title: PropTypes.string,
  personal_projects: PropTypes.shape({
    personal_projects_list: PropTypes.array,
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
          icon
          icon_link
          title
          mdst_projects {
            mdst_projects_list {
              project {
                business_type
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

        testimonials {
          ryan {
            image
            quote
            name
            title
          }

          tom {
            image
            quote
            name
            title
          }
        }

        personal {
          background_image
          title
          personal_projects {
            personal_projects_list {
              project {
                description
                image
                tech_list {
                  tech
                }
                title
                demo
                github             
              }
            }
          }
        }

      }
    }
  }
`
