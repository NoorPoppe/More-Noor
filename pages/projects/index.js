import { createClient } from 'contentful'
import ProjectCard from '../../components/projectCard'

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
        <div className="recipe-list">
            {projects.map(project => (
                <ProjectCard key={project.sys.id} project={project} />
            ))}
        </div>
    )
}