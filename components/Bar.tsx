import { FunctionComponent } from "react";
import { Skill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
    data: Skill
}> = ({ data: { Icon, level, name }, }) => {

    // const bar_width = `${level}%`;

    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: level,
            transition: {
                duration: 0.7,
                type: "spring",
                damping: 10,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
            <motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-purple-900 to-blue-700"
                style={{ width: level }}
                variants={variants}
                initial="initial"
                animate="animate"
            >

                <Icon className="mr-3" />
                {name}
            </motion.div>
        </div>
    );
}

export default Bar;