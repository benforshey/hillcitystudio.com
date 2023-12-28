import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from './tuition.module.css'

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Tuition" />
    <main className={style.main}>
      <h2>How do I begin?</h2>
      <p>
        <img
          alt="Susi Forshey in her piano studio, smiling."
          className={style.img}
          src={data.how.childImageSharp.fluid.src}
          srcSet={data.how.childImageSharp.fluid.srcSet}
        />
        Contact the teacher to discuss if the Suzuki method is a good fit for
        your family. A parent-teacher interview can help determine this. Learn
        more about the at-home music environment, how to coach your child at
        home, and more about why this popular method produces a deep,
        foundational love of music and love of learning in children all over the
        world.
      </p>
      <p id="contact" className={style.contact}>
        Call Susi at <a href="tel:2539617912">253.961.7912</a> or email her at{' '}
        <a href="mailto:susi@hillcitystudio.com">susi@hillcitystudio.com</a>.
      </p>
      <h3>Tuition Rates & Options</h3>
      <p>Pay by Session or by Month</p>
      <ul>
        <li>Session Payments of $440</li>
        <li>Monthly Payments of $135</li>
      </ul>

      <h3>What is a Session?</h3>
      <ul>
        <li>Winter Session: January–April</li>
        <li>Spring Session: May–August</li>
        <li>Fall Session: September–December</li>
      </ul>

      <h3>Every Year Your Tuition Pays For</h3>
      <ul>
        <li>44 once-a-week private lessons</li>
        <li>unlimited observation of studio lessons</li>
        <li>10 once-a-month group classes</li>
        <li>2 formal recitals</li>
      </ul>
    </main>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    how: file(relativePath: { eq: "tuition__how.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
          srcSet
        }
      }
    }
  }
`
