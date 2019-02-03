import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './teacher.module.css'

const StyledVideo = () =>
  <div className={style.videoWrapper}>
    <video
      className={style.video}
      controls
      playsInline
      poster='/spring-2015-recital.jpg'
      preload
    >
      <source
        src='/spring-2015-recital.mp4'
        type='video/mp4'
      />
      <track
        default
        kind='captions'
        srcLang='en'
        src='/spring-2015-recital.vtt'
      />
    </video>
  </div>

const TeacherPage = ({ data }) => (
  <Layout>
    <SEO title='Teacher' />
    <main className={style.main}>
      <h2>
        Who is the teacher?
      </h2>
      <p>
        <strong>Susi Forshey</strong> has been a lifelong student of the Suzuki method. Beginning at age 4, she took piano lessons from Suzuki instructors all the way through high school and into her college years. She started her own private studio as a home business when she was just 13 years old in Halifax County, Virginia—beginning with a few neighbor children.
      </p>

      <p>
        <img
          alt='Susi Forshey in her piano studio, smiling.'
          className={style.img}
          src={data.who.childImageSharp.fluid.src}
          srcSet={data.who.childImageSharp.fluid.srcSet}
        />
        Its growth and success inspired her to receive official teacher training from the Suzuki Association’s teacher trainers. She was lucky enough to apprentice for a few summers in the studio of Gretchen Smith of Greenville, NC. Gretchen is a master teacher-trainer, a Matsumoto graduate of the Talent Education Institute in Japan, and has taught Suzuki method in the US since its introduction to our country in the early 1980’s. Susi completed training with Gretchen in 2002 and is registered with the Suzuki Association of the Americas through level 4. She has continued to pursue educational workshops and master classes with the SAA and Matsumoto graduates, earning a “Suzuki Principles in Action” certification in Tacoma, WA in 2013. She recently added some training in Kodály instruction to her repertoire to help enrich her studio environment through singing, music games, and group classes.
      </p>

      <StyledVideo />

      <p>
        After spending a decade on the West Coast where she taught piano at “Suzuki Olympia”, she has recently returned to the Lynchburg area, and is opening a new studio in her home in Sandusky . She now offers classes to students of all ages in Lynchburg, including one-on-one piano instruction, Kodály-style group singing and music exploration/enrichment classes, voice lessons for children, recitals, and group music sessions throughout the year. She has 3 children of her own, with a 4th due in April. All 3 of her children play the piano, as well as other instruments. They enjoy solos, duets, playing by ear, improvisation,  performing in recitals, playing for the elderly, singing, and acting as part of their homeschool.
      </p>
    </main>
  </Layout>
)

export default TeacherPage

export const query = graphql`
  query {
    who: file(relativePath: { eq: "teacher__who.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
          srcSet
        }
      }
    }
  }
`
