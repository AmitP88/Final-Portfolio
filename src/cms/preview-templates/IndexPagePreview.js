import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entrySkills = entry.getIn(['data', 'hero' ,'skills_list', 'skills'])
  const skills = entrySkills ? entrySkills.toJS() : []

  const entryMDSTprojects = entry.getIn(['data', 'middlestate', 'mdst_projects', 'mdst_projects_list'])
  const mdst_projects_list = entryMDSTprojects ? entryMDSTprojects.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        background_image={data.hero.background_image}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        skills_list={{ skills }}
        shopify_icon={data.shopify.icon}
        shopify_title={data.shopify.title}
        shopify_description={data.shopify.description}
        shopify_subsection_1_title={data.shopify.subsection_1_title}
        shopify_step_1_image={data.shopify.step_1_image}
        shopify_step_2_image={data.shopify.step_2_image}
        shopify_step_3_image={data.shopify.step_3_image}
        shopify_step_4_image={data.shopify.step_4_image}
        shopify_step_5_image={data.shopify.step_5_image}
        shopify_step_6_image={data.shopify.step_6_image}
        shopify_step_7_image={data.shopify.step_7_image}
        mdst_icon={data.middlestate.icon}
        mdst_icon_link={data.middlestate.icon_link}
        mdst_title={data.middlestate.title}
        mdst_description={data.middlestate.description}
        mdst_projects={{ mdst_projects_list }}
        ryan={data.testimonials.ryan}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
