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


