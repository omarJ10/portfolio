import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa'
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiNestjs, 
  SiFirebase, SiPostgresql, SiMongodb, SiMysql 
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 88 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'NestJS', icon: <SiNestjs />, level: 82 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'Firebase', icon: <SiFirebase />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 82 },
        { name: 'MySQL', icon: <SiMysql />, level: 78 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'Docker', icon: <FaDocker />, level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar" 
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
