import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ProjectsCard.module.css'
import style from '../styles/Home.module.css'

export default function projectCard({ project }) {
    const { title, slug, thumbnail } = project.fields

    return (
        <div className={style.projectDiv}>
            <Link href={'/projects/' + slug}>
                <Image 
                    className={style.projectImages}
                    src={'https:' + thumbnail.fields.file.url}
                    /*
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    */
                    width={430}
                    height={291}
                />
            </Link>
            <Link className={styles.mapContainer}href={'/projects/' + slug}>
                <div className={style.map}>
                    <Image className={style.mapImage} src="/map-wit.gif" width={248} height={211} alt="map-work" />
                    <h4 className={style.mapTitle}>{title}</h4>
                </div>
            </Link>
        </div>
    )
}