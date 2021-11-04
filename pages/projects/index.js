import { createClient } from 'contentful'
import ProjectCard from '../../components/ProjectCard'
import styles from '../../styles/Project.module.css'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({
        content_type: "project",
        limit: 6,
    })

    return {
        props: {
            projects: res.items,
        }
    }
}

export default function Projects({ projects }) {
    console.log(projects)

    return (
        <div className={styles.container}>
            <article className={styles.containerTitle}>
                <h1 className={styles.title}>Here is some of my <span className={styles.titleGreen}>work</span> </h1>
            </article>
            <article className={styles.projectContainer}>
                <h1 className="hidden">Projects</h1>
                
                <section>
                    {/*projects.map(project => (
                        <ProjectCard key={project.sys.id} project={project} />
                    ))*/}
                </section>
            </article>
        </div>
    )
}