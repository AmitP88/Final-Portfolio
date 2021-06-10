import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/sections/Hero'
import Shopify from '../components/sections/Shopify'
import MiddleState from '../components/sections/MiddleState'
import Testimonials from '../components/sections/Testimonials'
import MessageMe from '../components/sections/MessageMe'

import Layout from '../components/Layout'


export const IndexPageTemplate = ({ 
  background_image,
  title,
  subtitle,
  skills_list,
  shopify_icon,
  shopify_title,
  shopify_description,
  shopify_subsection_1_title,
  shopify_step_1,
  shopify_step_1_image,
  shopify_step_2_image,
  shopify_step_3_image,
  shopify_step_4_image,
  shopify_step_5_image,
  shopify_step_6_image,
  shopify_step_7_image,
  shopify_step_8_image,
  shopify_project_image,
  shopify_gif_image,
  mdst_icon,
  mdst_icon_link,
  mdst_title,
  mdst_description,
  mdst_projects,
  ryan,
}) => (
  <div className='homepage'>
    <Hero 
      background_image={background_image}
      title={title}
      subtitle={subtitle}
      skillItems={skills_list.skills}
    />
    <Shopify
      icon={shopify_icon}
      title={shopify_title}
      description={shopify_description}
      subsection_1_title={shopify_subsection_1_title}
      step_1_image={shopify_step_1_image}
      step_2_image={shopify_step_2_image}
      step_3_image={shopify_step_3_image}
      step_4_image={shopify_step_4_image}
      step_5_image={shopify_step_5_image}
      step_6_image={shopify_step_6_image}
      step_7_image={shopify_step_7_image}
      step_8_image={shopify_step_8_image}
      project_image={shopify_project_image}
      gif_image={shopify_gif_image}
    />
    <MiddleState
      icon={mdst_icon}
      icon_link={mdst_icon_link}
      title={mdst_title}
      description={mdst_description}
      gridItems={mdst_projects.mdst_projects_list}
    />
    <Testimonials
      ryan={ryan}
    />
    <MessageMe />
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
        shopify_icon={frontmatter.shopify.icon}
        shopify_title={frontmatter.shopify.title}
        shopify_description={frontmatter.shopify.description}
        shopify_subsection_1_title={frontmatter.shopify.subsection_1_title}
        shopify_step_1_image={frontmatter.shopify.step_1_image}
        shopify_step_2_image={frontmatter.shopify.step_2_image}
        shopify_step_3_image={frontmatter.shopify.step_3_image}
        shopify_step_4_image={frontmatter.shopify.step_4_image}
        shopify_step_5_image={frontmatter.shopify.step_5_image}
        shopify_step_6_image={frontmatter.shopify.step_6_image}
        shopify_step_7_image={frontmatter.shopify.step_7_image}
        shopify_step_8_image={frontmatter.shopify.step_8_image}
        shopify_project_image={frontmatter.shopify.project_image}
        shopify_gif_image={frontmatter.shopify.gif_image}
        mdst_icon={frontmatter.middlestate.icon}
        mdst_icon_link={frontmatter.middlestate.icon_link}
        mdst_title={frontmatter.middlestate.title}
        mdst_description={frontmatter.middlestate.description}
        mdst_projects={frontmatter.middlestate.mdst_projects}
        ryan={frontmatter.testimonials.ryan}
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
  shopify_icon: PropTypes.string,
  shopify_title: PropTypes.string,
  shopify_description: PropTypes.string,
  shopify_subsection_1_title: PropTypes.string,
  shopify_step_1_image: PropTypes.string,
  shopify_step_2_image: PropTypes.string,
  shopify_step_3_image: PropTypes.string,
  shopify_step_4_image: PropTypes.string,
  shopify_step_5_image: PropTypes.string,
  shopify_step_6_image: PropTypes.string,
  shopify_step_7_image: PropTypes.string,
  shopify_step_8_image: PropTypes.string,
  shopify_project_image: PropTypes.string,
  shopify_gif_image: PropTypes.string,
  mdst_icon: PropTypes.string,
  mdst_icon_link: PropTypes.string,
  mdst_title: PropTypes.string,
  mdst_description: PropTypes.string,
  mdst_projects: PropTypes.shape({
    mdst_projects_list: PropTypes.array,
  }),
  ryan: PropTypes.object,
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
        shopify {
          icon
          title
          description
          subsection_1_title
          step_1_image
          step_2_image
          step_3_image
          step_4_image
          step_5_image
          step_6_image
          step_7_image
          step_8_image
          project_image
          gif_image
        }
        middlestate {
          icon
          icon_link
          title
          description
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
        }
      }
    }
  }
`
