import { motion } from "framer-motion"
import { fadeUp } from "../../utils/motion"
import SectionTitle from "../ui/SectionTitle"

export default function About({ data }) {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 px-6 max-w-5xl mx-auto"
        >
            <SectionTitle>About</SectionTitle>
            <p className="text-muted leading-relaxed">{data.about}</p>
        </motion.section>
    )
}
