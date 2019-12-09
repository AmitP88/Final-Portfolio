import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entrySkills = entry.getIn(['data', 'skills_list', 'skills'])
  const skills = entrySkills ? entrySkills.toJS() : []

  const entryTechs_tictactoe = entry.getIn(['data', 'personal_projects', 'tictactoe' , 'tech_list', 'techs'])
  const techs_tictactoe = entryTechs_tictactoe ? entryTechs_tictactoe.toJS() : []

  const entryTechs_simon = entry.getIn(['data', 'personal_projects', 'simon' , 'tech_list', 'techs'])
  const techs_simon = entryTechs_simon ? entryTechs_simon.toJS() : []

  const entryTechs_pomodoro = entry.getIn(['data', 'personal_projects', 'pomodoro' , 'tech_list', 'techs'])
  const techs_pomodoro = entryTechs_pomodoro ? entryTechs_pomodoro.toJS() : []

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

        personal_heading={data.personal_projects.personal_heading}
        tictactoe_screenshot={data.personal_projects.tictactoe.screenshot}
        tictactoe_name={data.personal_projects.tictactoe.name}
        tictactoe_description={data.personal_projects.tictactoe.description}
        tictactoe_techs={{ techs_tictactoe }}
        tictactoe_website_link={data.personal_projects.tictactoe.website_link}
        tictactoe_repo_link={data.personal_projects.tictactoe.repo_link}

        simon_screenshot={data.personal_projects.simon.screenshot}
        simon_name={data.personal_projects.simon.name}
        simon_description={data.personal_projects.simon.description}
        simon_techs={{ techs_simon }}
        simon_website_link={data.personal_projects.simon.website_link}
        simon_repo_link={data.personal_projects.simon.repo_link}

        pomodoro_screenshot={data.personal_projects.pomodoro.screenshot}
        pomodoro_name={data.personal_projects.pomodoro.name}
        pomodoro_description={data.personal_projects.pomodoro.description}
        pomodoro_techs={{ techs_pomodoro }}
        pomodoro_website_link={data.personal_projects.pomodoro.website_link}
        pomodoro_repo_link={data.personal_projects.pomodoro.repo_link}

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
