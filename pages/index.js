import { createClient } from 'contentful'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/home.module.css'


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ 
    content_type: "project",
    limit: 3,
   })

  return {
    props: {
      projects: res.items,
    }
  }
}

export default function Home({ projects }) {
  console.log(projects)

  return (
    <div className={styles.container}>

      {projects.map(project => (
        <ProjectCard key={project.sys.id} project={project} />
      ))}
    </div>
  )
} 