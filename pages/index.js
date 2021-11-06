import { createClient } from 'contentful'
import ProjectCard from '../components/ProjectCard'
import GoodCard from '../components/GoodCard'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}><Image src="/hello.gif" width={219} height={132} alt="Hello" /><Image src="/hello-hand.gif" width={170} height={128} alt="Hello" /> I’m <span className={styles.playfairItalic}>Noor</span>. At the moment I’m a devine student 🎓.</h1>
          <p className={styles.subTextTitle}>Learning <span className={styles.playfairItalic}>web-design</span>  🌐 ,  Coding and <br /> <span className={styles.playfair}>ux-research</span> 📝.Take a look 👀 on my portfolio! 😊</p>
          <Link href="/projects/"><Image className={styles.button} src="/checkoutmwork-blauw.gif" width={503} height={180} alt="button-more-work" /></Link>
        </div>
        <Image className={styles.imageNoor}src="/hey-noor-home.gif" width={540} height={650} alt="ik" />
      </div>
      <div className={styles.containerProjects}>
        <span className={styles.arrow}><Image src="/pijl-down.gif" width={70} height={70} alt="button go down" /></span>
        <h2 className="hidden">Projects</h2>
        <div className={styles.containerProject}>
            {projects.map(project => (
              <ProjectCard className={styles.projectProjectCard} key={project.sys.id} project={project} />
            ))}
        </div>
        <Link className={styles.buttonRight} href="/projects/"><Image  src="/checkoutmywork-witgif.gif" width={503} height={180} alt="button-more-work" /></Link>
      </div>

      <div>
        <h2 className={styles.subTitle}> <Image src="/gif/forsbalgif.gif" width={130} height={130} alt="forsebal" /> what am i good in? <Image className={styles.flip} src="/gif/forsbalgif.gif" width={130} height={130} alt="forsebal" /> </h2>
          <GoodCard />
      </div>
    </div>
  )
}

