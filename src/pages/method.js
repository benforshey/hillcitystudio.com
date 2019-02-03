import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import style from './method.module.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

class MethodPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded: false,
      height: 0
    }

    this.supplementary = React.createRef()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState((state) => {
      return {
        height: this.supplementary.current.scrollHeight + 10,
        expanded: !state.expanded
      }
    })
  }

  render () {
    return (
      <Layout>
        <SEO title='Method' />
        <main className={style.main}>
          <h2>
            How does it work?
          </h2>
          <p>
            Remember when your child learned to speak his first word? How exciting—almost a miracle! How do children learn to speak their mother tongue? How do they learn to say what’s on their minds in any language around the world, no matter how complex the language?
          </p>
          <p>
            <img
              alt='Young lady with glasses playing the piano.'
              className={style.img}
              src={this.props.data.how.childImageSharp.fluid.src}
              srcSet={this.props.data.how.childImageSharp.fluid.srcSet}
            />
            More than 50 years ago in Japan, Dr. Schinichi Suzuki developed the Suzuki Method. His unique “mother tongue approach” helps children learn music in the same way they learned to speak their mother tongue. It simply applies the basic language-acquisition principles to the learning of music. It is based on the central principle that children absorb and learn their mother tongue in an immersive environment created by their families, with little-to-no effort or intention, no matter how complex or difficult the language. At Hill City Studio, children learn as early as age 3 or 4 to “speak the language of music” with ease and acquire mastery of their instrument and a deep sensibility for what music is.
          </p>

          <p className={style.cta}>
            <Link to='/tuition/#contact'>Contact the teacher</Link> to see if the Suzuki Method is a good fit for you and your child.
          </p>

          <h2 className={style.supplementaryHeader}>
            <button
              aria-controls='supplementary'
              aria-expanded={this.state.expanded ? 'true' : 'false'}
              className={style.supplementaryButton}
              onClick={this.handleClick}
            >
              More on the Method&thinsp;
              <svg className={style.svg} viewBox='0 0 10 10' aria-hidden='true' focusable='false'>
                <rect fill='#3E3E3E' className={style.vertical} height='8' width='2' y='1' x='4' />
                <rect fill='#3E3E3E' height='2' width='8' y='4' x='1' />
              </svg>
            </button>
          </h2>

          <div
            className={style.supplementary}
            data-expanded={this.state.expanded}
            id='supplementary'
            ref={this.supplementary}
            style={{ maxHeight: this.state.expanded ? this.state.height : 0 }}
          >
            <h3 className={style.supplementaryTopicHeader}>
              Language
            </h3>
            <p>
              <img
                alt='Smiling mother and toddler face-to-face, almost touching noses.'
                className={style.img}
                src={this.props.data.language.childImageSharp.fluid.src}
                srcSet={this.props.data.language.childImageSharp.fluid.srcSet}
              />
              We know that babies are born already recognizing their mother’s voice. This is because hearing is developed before birth, and while a child is still in the womb, it can hear the voices of its parents and identify them. How amazing!
            </p>

            <p>
              As they grow outside the womb, babies continue hearing their mother tongue spoken, day and night; sometimes to them, sometimes around them. No special attention is paid to infants to “apply” their language lessons or “practice” speaking.  Since imitation is a natural part of early learning in children, it is natural that after hearing words spoken hundreds of times by others, they should attempt to copy what they hear—and, voila! You have a speaking child!
            </p>

            <h3 className={style.supplementaryTopicHeader}>
              Music
            </h3>
            <p>
              <img
                alt='Smiling young lady playing the piano.'
                className={style.img}
                src={this.props.data.music.childImageSharp.fluid.src}
                srcSet={this.props.data.music.childImageSharp.fluid.srcSet}
              />
              Within the Suzuki method, we give children an environment to absorb music the same way they absorbed the sounds of their mother tongue as infants.
            </p>

            <p>
              Parents play a CD recording for them in the background of their home environment. It contains Level One of the Suzuki Piano method, consisting of mostly folk songs and some classical pieces. These are the pieces they will learn to play by ear on the piano during the first year of lessons.
            </p>

            <p>
              The instruction time during the lessons with the teacher involves refining their technique and tone, and concentrating on developing musical sensibilities. There’s no frustrating “memorizing” time where notes and melody line have to be figured out and committed to memory. A natural environment for learning is the most fun, most beautiful, and most rewarding way to learn!
            </p>

            <h3 className={style.supplementaryTopicHeader}>
              A Note on Sight-Reading Music
            </h3>
            <p>
            Just as children learn to speak their language and express themselves in sentences before being taught to read, so in Suzuki method, children are taught to “speak” the language of music, to play, and to understand it before they are taught to read music. Just as we would not teach the alphabet and phonics to a child who is not yet speaking, we do not teach the complex system of scales and graphs to a child who cannot yet play his instrument or understand and imitate a musical phrase. Note-reading is delayed until a child has developed some ability to understand the language of music and play with some physical skill first. This pathway to sight-reading that begins with comprehension and imitation provides a much easier and more holistic way to music-reading, as you would expect.
            </p>
          </div>
        </main>
      </Layout>
    )
  }
}

export default MethodPage

MethodPage.propTypes = {
  props: PropTypes.shape({
    data: PropTypes.shape({
      how: PropTypes.object.isRequired
    }).isRequired
  })
}

export const query = graphql`
  query {
    how: file(relativePath: { eq: "method__how.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
          srcSet
        }
      }
    }

    language: file(relativePath: { eq: "method__language.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
          srcSet
        }
      }
    }

    music: file(relativePath: { eq: "method__music.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
          srcSet
        }
      }
    }
  }
`
