import Data from '../assets/Data.json'


export const getSkillsForProject=(skillsIDs)=> {
    const skillsList = Data.Skills

    let skillsData = []

    if(Array.isArray(skillsIDs)) {

        if(skillsIDs.length === 0) return false
        skillsList.forEach(skill => {
            if (skillsIDs.includes(parseInt(skill.id))) {
                skillsData.push(skill)
            }
        })
        return skillsData
    } else {
        return false
    }

}

export const getProjects=(projectIDs)=> {
    const projectsList = Data.projects

    let projectData = []
    if(Array.isArray(projectIDs)) {

        if(projectIDs.length === 0) return false
        projectsList.forEach(project => {
            if (projectIDs.includes(parseInt(project.id))) {
                projectData.push(project)
            }
        })
        return projectData
    } else {
        return false
    }

}