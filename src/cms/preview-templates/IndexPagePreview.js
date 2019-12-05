import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entrySkills = entry.getIn(['data', 'skills_list', 'skills'])
  const skills = entrySkills ? entrySkills.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        background_image={data.hero.background_image}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        skills_list={{ skills }}
        logo={data.middlestate.logo}
        mdst_heading={data.middlestate.mdst_heading}
        gf_screenshot={data.middlestate.grizzlyfest.screenshot}
        gf_name={data.middlestate.grizzlyfest.name}
        gf_tech={data.middlestate.grizzlyfest.tech_used}
        gf_description={data.middlestate.grizzlyfest.description}
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
