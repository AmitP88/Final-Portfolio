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
        gf_website={data.middlestate.grizzlyfest.website_link}
        gf_repo={data.middlestate.grizzlyfest.repo_link}

        cd_screenshot={data.middlestate.cellardoor.screenshot}
        cd_name={data.middlestate.cellardoor.name}
        cd_tech={data.middlestate.cellardoor.tech_used}
        cd_description={data.middlestate.cellardoor.description}
        cd_website={data.middlestate.cellardoor.website_link}
        cd_repo={data.middlestate.cellardoor.repo_link}

        dh_screenshot={data.middlestate.dataharvest.screenshot}
        dh_name={data.middlestate.dataharvest.name}
        dh_tech={data.middlestate.dataharvest.tech_used}
        dh_description={data.middlestate.dataharvest.description}
        dh_website={data.middlestate.dataharvest.website_link}
        dh_repo={data.middlestate.dataharvest.repo_link}
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
