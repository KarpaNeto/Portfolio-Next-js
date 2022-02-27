// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { motion } from 'framer-motion'
// import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
// import { Service } from '../type'

// ABOUT PAGE //

const about = () => {
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation}
      initial="initial"
      animate="animate">
      <h5 className='my-3 font-medium'>
      My name is Pedro Karpinski Neto, I'm 31 years old, I graduated in Law from UNIVALI.
I graduated in Law to take a public contest for a police career.
However, little by little I changed my dream. Because I grew up in front of the computer and it was something I really wanted to be able to make a living from.
    <h5 className='my-3 font-medium'>
      <ul>
          <li>
          -I am currently studying Systems Analysis and Development at Anhanguera.
          </li>
          <li>
          -I'm passionate about technology, design and games and everything that involves the universe, galaxies etc...
          </li>
          <li>
          -I love the family moment, I love being with my daughter and my wife.
          </li>
      </ul>
    </h5>
    ____<br/>
I've been studying programming since October 2021. I started my studies with Python, with a 100 hours course and soon migrated to the front-end.

I started studying HTML5, CSS3 and JavaScript, creating a lot of personal projects to improve my skills <br/><br/>

With 3 months of study I did my first real project. Getting paid to do what I love is indescribable.

This served as an inspiration to continue steadily in studies.

My main focus is currently on Front-end, with React.js and Svelte.

I work as a freelancer to support my family.

However, I am looking for my first job in a company.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500' style={{ marginInline: '-1.5rem' }}>
        <h6 className='my-3 font-bold tracking-wide text-1'>What i'm doing</h6>

        <motion.div className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial="initial"
          animate="animate">

          {services.map((service) => (
            <motion.div className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200" key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

  )
}

export default about


// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {

//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//   const data = await res.json()

//   return {
//     props: { endpoint: process.env.VERCEL_URL }
//   }
// }


// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {

//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }