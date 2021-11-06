import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ProjectsCard.module.css'
import style from '../styles/Home.module.css'
//import { motion } from "framer-motion";

export default function projectCard({ project }) {
    const { title, slug, thumbnail } = project.fields
    console.log(project);
    return (

        <div className={style.projectDiv}>
            <Link href={'/projects/' + slug}>
                <div className={style.projectDivDiv}>
                    <Image
                        src={'https:' + thumbnail.fields.file.url}
                        /*
                        width={thumbnail.fields.file.details.image.width}
                        height={thumbnail.fields.file.details.image.height}*/
                        width={260}
                        height={260}
                    />

                        <h4 className={style.mapTitle}>{title}</h4>

                </div>
            </Link>

        </div>
    )
}