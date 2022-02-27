import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";


const resume = () => {

    return (
        <motion.div className="px-6 py-2"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit">
            {/* education & exp */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 font-bold text-x1">Analysis and Systems Development</h5>
                        <p className="font-semibold">Anhanguera College</p>
                        <p className="my-3">
                            I am currently in the 2nd semester of the Analysis and Systems Development course at Anhanguera</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 font-bold text-x1">Front-end Developer</h5>
                        <p className="font-semibold">Freelance</p>
                        <p className="my-3">
                            actually i build website pages, landing pages, institucional website, one-page website and more as freelancer.</p>
                    </div>
                </motion.div>
            </div>
            {/* LANGUAGES AND TOOLS */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {languages.map(language => (
                            <Bar data={language} key={language.name} />
                        ))}

                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">

                        {tools.map(tool => (
                            <Bar data={tool} key={tool.name} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default resume;