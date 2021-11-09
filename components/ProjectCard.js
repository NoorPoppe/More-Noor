import Link from 'next/link'
import { createClient } from 'contentful'
import Image from 'next/image'
import styles from '../styles/ProjectsCard.module.css'
import style from '../styles/Home.module.css'
//import { motion } from "framer-motion";

export default function projectCard({ project }) {
    const { title, slug, thumbnail, elements } = project.fields
    console.log(project);
    return (

        <div className={styles.projectContainer}>
            <Link href={'/projects/' + slug}>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image
                            src={'https:' + thumbnail.fields.file.url}
                            width={thumbnail.fields.file.details.image.width}
                            height={thumbnail.fields.file.details.image.height}
                        /*width={260}
                        height={260}*/
                        />
                    </div>
                    <h4 className={styles.projectTitle}>{title}</h4>
                </div>
            </Link>

        </div>
    )
}