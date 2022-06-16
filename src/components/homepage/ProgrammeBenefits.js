import { useState } from "react"

const topics = [
  {
    topic: 'Learning Pathways',
    heading: 'Interlinking Pathways',
    description: 'This programme gives us 5 important interlinking Learning Pathways.',
    benefits: [
      {
        heading: 'COMPUTATIONAL THINKING',
        description: 'Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications.'
      },
      {
        heading: 'DEVELOPING DIGITAL OUTCOMES ',
        description: 'This programme is designed to strengthen the outcomes of each students personally to form strong applications.'
      },
      {
        heading: 'DESIGNING PROCESSED OUTCOMES ',
        description: 'Students will be taught the ways of how outcomes are processed, thought about, and produced. '
      },
      {
        heading: 'DEVELOP VISUAL AND SOCIAL COMMUNICATIONS ',
        description: 'Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.'
      },
      {
        heading: 'STRONG TECHNOLOGICAL PRACTICES ',
        description: 'The programme will show students the best practices to think and solve the problems brought on by using technology.'
      }
    ]
  },
  {
    topic: 'Digital Technologies',
    heading: 'Expands Digital Knowledge Base',
    description: 'This programme gives you the 5 major capabilities to be confident in Digital Technologies.',
    benefits: [
      {
        heading: 'PROBLEM SOLVING',
        description: 'The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.'
      },
      {
        heading: 'DECISION-MAKING',
        description: 'The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.'
      },
      {
        heading: 'CONFIDENCE',
        description: 'When having the skills to manipulate the applications and learning to use it brings self-confidence into your life. '
      },
      {
        heading: 'HIGHER SELF-EXPECTATIONS',
        description: 'This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.'
      },
      {
        heading: 'COHERENCE',
        description: 'This programme offers all students a broader education that makes links within and across learning areas.'
      }
    ]
  },
  {
    topic: 'Key Competencies',
    heading: 'Enhance Key Competencies',
    description: 'The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:',
    benefits: [
      {
        heading: 'THINKING',
        description: 'In particular the programme focused on problem solving, design thinking and computational thinking.'
      },
      {
        heading: 'DISCERNING CODES',
        description: 'Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.'
      },
      {
        heading: 'SELF-MANAGEMENT ',
        description: 'Projects and challenges are designed to motivate students to explore and experiment with self-motivation.'
      },
      {
        heading: 'RELATIONSHIPS WITH PEERS',
        description: 'The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.'
      },
      {
        heading: 'PARTICIPATION AND COLLABORATION',
        description: 'The programme encourages students tobe involved in communities, such as family, whanau, school, and contribute and make connections with other people.'
      }
    ]
  },
  {
    topic: 'IR4.0',
    heading: 'IR4.0',
    description: 'Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)',
    benefits: [
      {
        heading: 'LEARNING TO LEARN',
        description: 'The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.'
      },
      {
        heading: 'COMMUNITY ENGAGEMENT ',
        description: 'The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.'
      },
      {
        heading: 'CULTURAL DIVERSITY',
        description: "This programme is designed in New Zealand and reflects NZ's cultural diversity."
      },
      {
        heading: 'INCLUSION',
        description: "In particular the programme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability."
      },
      {
        heading: 'FUTURE FOCUS',
        description: 'The programme leads students to explore future themes such as artificial intelligence and augmented reality.'
      }
    ]
  },
]

const Topic = ({ heading, description, benefits }) => {
  return (
    <div id="pb-topic-cont">
      <h3>{heading}</h3>
      <p>{description}</p>
      <div className="pb-benefits-cont">
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className="pb-benefit-cont">
              <div>
                <img src="images/star-only-logo.png" alt="" />
              </div>
              <div className="pb-benefit-text">
                <h4>{benefit.heading}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          )      
        })}
      </div>
    </div>
  )
}

const Button = ({ id, topic, handleTopicClick, activeBtn }) => {
  return (
    <button 
      id={id} 
      className={`hmpg-standard-btn ${id === activeBtn && 'pb-btn-active'}`}
      onClick={() => handleTopicClick(id, topic)}
    >
      {topic}
    </button>
  )
}

const ProgrammeBenefits = () => {
  const [topic, setTopic] = useState(topics[0])
  const [activeBtn, setActiveBtn] = useState('pb-learning-pathways-btn')  

  const handleTopicClick = (id, topic) => {
    for (const [index, t] of topics.entries()) {
      if (t.topic === topic) {
        setTopic(topics[index])
        setActiveBtn(id)
        break
      } 
    }
  }

  const buttons = [
    {
      id: 'pb-learning-pathways-btn',
      topic: 'Learning Pathways'
    },
    {
      id: 'pb-digital-technologies-btn',
      topic: 'Digital Technologies'
    },
    {
      id: 'pb-key-competencies-btn',
      topic: 'Key Competencies'
    },
    {
      id: 'pb-ir4.0-btn',
      topic: 'IR4.0'
    },
  ]

  return (
    <div id="programme-benefits-container">
      <h2>How our programme helps teachers and schools</h2>
      <div id="pb-btn-cont">
        {buttons.map(btn => {
          return <Button key={btn.id} id={btn.id} topic={btn.topic} handleTopicClick={handleTopicClick} activeBtn={activeBtn}/>
        })}
      </div>
      <Topic heading={topic.heading} description={topic.description} benefits={topic.benefits} />
    </div>
  )
}

export default ProgrammeBenefits