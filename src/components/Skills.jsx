import './Skills.css'

const Skills = () => {
  const categories = [
    {
      title: 'ML & Deep Learning',
      skills: ['TensorFlow', 'TFLite', 'PyTorch', 'Scikit-learn', 'CNNs', 'MobileNetV2', 'Transfer Learning', 'SMOTE', 'Ensemble Methods']
    },
    {
      title: 'MLOps & Backend',
      skills: ['FastAPI', 'MLflow', 'Docker', 'CI/CD', 'Elasticsearch', 'Kibana', 'Nginx']
    },
    {
      title: 'Data & Databases',
      skills: ['Python', 'SQL', 'PostgreSQL', 'pgvector', 'MongoDB', 'Oracle SQL']
    },
    {
      title: 'Frontend & Cloud',
      skills: ['ReactJS', 'Flutter', 'Git', 'GitHub', 'Azure', 'LangChain', 'Llama 3', 'MQTT']
    }
  ]

  return (
    <>
      <div className="divider" />
      <section id="skills" className="skills">
        <span className="section-label">// Skills</span>
        <div className="skills-header">
          <h2 className="section-heading">
            My Tech Stack<br />
            <span className="highlight">& Expertise</span>
          </h2>
          <span className="code-bracket">&lt;/&gt;</span>
        </div>

        <div className="skills-categories">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-group">
              <h3 className="skill-group-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
