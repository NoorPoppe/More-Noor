import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ProjectsCard.module.css'

export default function projectCard({ project }) {
    const { title, slug, thumbnail } = project.fields

    return (
        <div>
            <Link href={'/projects/' + slug}>
                <div>
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    /*
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    */
                    width={50}
                    height={100}
                />
            </div >
            </Link>
            <Link className={styles.mapContainer}href={'/projects/' + slug}>
                <div className={styles.map}>
                    <Image src="/map-wit.gif" width={248} height={211} alt="map-work" />
                    <h4 className={styles.title}>{title}</h4>
                </div>
            </Link>
        </div>
    )
}