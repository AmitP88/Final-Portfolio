import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/sections/Hero'
import MiddleState from '../components/sections/MiddleState'
import Layout from '../components/Layout'
import PersonalProjects from '../components/sections/PersonalProjects'


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
  cd_screenshot,
  cd_name,
  cd_tech,
  cd_description,
  cd_website,
  cd_repo,
  dh_screenshot,
  dh_name,
  dh_tech,
  dh_description,
  dh_website,
  dh_repo,

  personal_heading,

  tictactoe_screenshot,
  tictactoe_name,
  tictactoe_techs,
  tictactoe_description,
  tictactoe_website_link,
  tictactoe_repo_link,

  simon_screenshot,
  simon_name,
  simon_techs,
  simon_description,
  simon_website_link,
  simon_repo_link,

  pomodoro_screenshot,
  pomodoro_name,
  pomodoro_techs,
  pomodoro_description,
  pomodoro_website_link,
  pomodoro_repo_link,

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
      cd_screenshot={
        !!cd_screenshot.childImageSharp ?
        cd_screenshot.childImageSharp.fluid.src :
        cd_screenshot
      }
      cd_name={cd_name}
      cd_tech={cd_tech}
      cd_description={cd_description}
      cd_website={cd_website}
      cd_repo={cd_repo}

      dh_screenshot={
        !!dh_screenshot.childImageSharp ?
        dh_screenshot.childImageSharp.fluid.src :
        dh_screenshot
      }
      dh_name={dh_name}
      dh_tech={dh_tech}
      dh_description={dh_description}
      dh_website={dh_website}
      dh_repo={dh_repo}
    />
    <PersonalProjects
      personal_heading={personal_heading}

      tictactoe_screenshot={
        !!tictactoe_screenshot.childImageSharp ?
        tictactoe_screenshot.childImageSharp.fluid.src :
        tictactoe_screenshot
      }
      tictactoe_name={tictactoe_name}
      tictactoe_tech_list={tictactoe_techs.tech}
      tictactoe_description={tictactoe_description}
      tictactoe_website_link={tictactoe_website_link}
      tictactoe_repo_link={tictactoe_repo_link}
    
      simon_screenshot={
        !!simon_screenshot.childImageSharp ?
        simon_screenshot.childImageSharp.fluid.src :
        simon_screenshot
      }
      simon_name={simon_name}
      simon_tech_list={simon_techs.tech}
      simon_description={simon_description}
      simon_website_link={simon_website_link}
      simon_repo_link={simon_repo_link}
    
      pomodoro_screenshot={
        !!pomodoro_screenshot.childImageSharp ?
        pomodoro_screenshot.childImageSharp.fluid.src :
        pomodoro_screenshot
      }
      pomodoro_name={pomodoro_name}
      pomodoro_tech_list={pomodoro_techs.tech}
      pomodoro_description={pomodoro_description}
      pomodoro_website_link={pomodoro_website_link}
      pomodoro_repo_link={pomodoro_repo_link}
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
        cd_screenshot={frontmatter.middlestate.cellardoor.screenshot}
        cd_name={frontmatter.middlestate.cellardoor.name}
        cd_tech={frontmatter.middlestate.cellardoor.tech_used}
        cd_description={frontmatter.middlestate.cellardoor.description}
        cd_website={frontmatter.middlestate.cellardoor.website_link}
        cd_repo={frontmatter.middlestate.cellardoor.repo_link}
        dh_screenshot={frontmatter.middlestate.dataharvest.screenshot}
        dh_name={frontmatter.middlestate.dataharvest.name}
        dh_tech={frontmatter.middlestate.dataharvest.tech_used}
        dh_description={frontmatter.middlestate.dataharvest.description}
        dh_website={frontmatter.middlestate.dataharvest.website_link}
        dh_repo={frontmatter.middlestate.dataharvest.repo_link}

        personal_heading={frontmatter.personal_projects.personal_heading}
        tictactoe_screenshot={frontmatter.personal_projects.tictactoe.screenshot}
        tictactoe_name={frontmatter.personal_projects.tictactoe.name}
        tictactoe_tech_list={frontmatter.personal_projects.tictactoe.tech_list}
        tictactoe_description={frontmatter.personal_projects.tictactoe.description}
        tictactoe_website_link={frontmatter.personal_projects.tictactoe.website_link}
        tictactoe_repo_link={frontmatter.personal_projects.tictactoe.repo_link}

        simon_screenshot={frontmatter.personal_projects.simon.screenshot}
        simon_name={frontmatter.personal_projects.simon.name}
        simon_tech_list={frontmatter.personal_projects.simon.tech_list}
        simon_description={frontmatter.personal_projects.simon.description}
        simon_website_link={frontmatter.personal_projects.simon.website_link}
        simon_repo_link={frontmatter.personal_projects.simon.repo_link}

        pomodoro_screenshot={frontmatter.personal_projects.pomodoro.screenshot}
        pomodoro_name={frontmatter.personal_projects.pomodoro.name}
        pomodoro_tech_list={frontmatter.personal_projects.pomodoro.tech_list}
        pomodoro_description={frontmatter.personal_projects.pomodoro.description}
        pomodoro_website_link={frontmatter.personal_projects.pomodoro.website_link}
        pomodoro_repo_link={frontmatter.personal_projects.pomodoro.repo_link}


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
  cd_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cd_name: PropTypes.string,
  cd_tech: PropTypes.string,
  cd_description: PropTypes.string,
  cd_website: PropTypes.string,
  cd_repo: PropTypes.string,
  dh_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dh_name: PropTypes.string,
  dh_tech: PropTypes.string,
  dh_description: PropTypes.string,
  dh_website: PropTypes.string,
  dh_repo: PropTypes.string,

  personal_heading: PropTypes.string,
  tictactoe_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  tictactoe_name: PropTypes.string,
  tictactoe_description: PropTypes.string,
  tictactoe_techs: PropTypes.shape({
    tech: PropTypes.arrayOf(PropTypes.string)
  }),
  tictactoe_website_link: PropTypes.string,
  tictactoe_repo_link: PropTypes.string,

  simon_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  simon_name: PropTypes.string,
  simon_description: PropTypes.string,
  simon_techs: PropTypes.shape({
    tech: PropTypes.arrayOf(PropTypes.string)
  }),
  simon_website_link: PropTypes.string,
  simon_repo_link: PropTypes.string,

  pomodoro_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pomodoro_name: PropTypes.string,
  pomodoro_description: PropTypes.string,
  pomodoro_techs: PropTypes.shape({
    tech: PropTypes.arrayOf(PropTypes.string)
  }),
  pomodoro_website_link: PropTypes.string,
  pomodoro_repo_link: PropTypes.string,
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

          cellardoor {
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

          dataharvest {
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

        personal_projects {
          personal_heading
          tictactoe {
            screenshot {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            tech_list {
              techs {
                tech
              }
            }
            description
            website_link
            repo_link
          }

          simon {
            screenshot {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            tech_list {
              techs {
                tech
              }
            }
            description
            website_link
            repo_link
          }

          pomodoro {
            screenshot {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            tech_list {
              techs {
                tech
              }
            }
            description
            website_link
            repo_link
          }

        }











      }
    }
  }
`
