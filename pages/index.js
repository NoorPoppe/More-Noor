import { createClient } from 'contentful'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


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
      <h1><span>Hello</span> <span>👋</span> I’m Noor. At the moment I’m a devine student 🎓.</h1>
      <p>Learning  web-design 🌐 ,  Coding and ux-research 📝.Take a look 👀 on my portfolio! 😊</p>
      <li><Link href="/projects/"><a>Check out my work</a></Link></li>

      <div>
        <h2 className="hidden">Projects</h2>
        <div>
          {projects.map(project => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
        <li><Link href="/projects/"><a>Check out more work</a></Link></li>
      </div>

      <div>
        <h2> 💪 where am i good in? <span>💪</span> </h2>
        <div>
        </div>
      </div>
    </div>
  )
}