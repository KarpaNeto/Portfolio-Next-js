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