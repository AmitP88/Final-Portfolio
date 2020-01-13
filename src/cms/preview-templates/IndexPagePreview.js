import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entrySkills = entry.getIn(['data', 'hero' ,'skills_list', 'skills'])
  const skills = entrySkills ? entrySkills.toJS() : []

  const entryMDSTprojects = entry.getIn(['data', 'middlestate', 'mdst_projects', 'mdst_projects_list'])
  const mdst_projects_list = entryMDSTprojects ? entryMDSTprojects.toJS() : []

  const entryPersonalprojects = entry.getIn(['data', 'personal', 'personal_projects', 'personal_projects_list'])
  const personal_projects_list = entryPersonalprojects ? entryPersonalprojects.toJS() : []


  if (data) {
    return (
      <IndexPageTemplate
        background_image={data.hero.background_image}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        skills_list={{ skills }}
        mdst_icon={data.middlestate.icon}
        mdst_icon_link={data.middlestate.icon_link}
        mdst_title={data.middlestate.title}
        mdst_projects={{ mdst_projects_list }}
        ryan={data.testimonials.ryan}
        // tom={data.testimonials.tom}
        // personal_background={data.personal.background_image}
        // personal_title={data.personal.title}
        // personal_projects={{ personal_projects_list }}
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
