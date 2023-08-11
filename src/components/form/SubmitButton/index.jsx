import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { RegisterSubmitBtn } from './styles'

const SubmitButton = ({ active, loading, children }) => {
    return (
        <RegisterSubmitBtn disabled={active} type="submit">
            {loading ? (
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.5
                    }}
                >
                    <FontAwesomeIcon icon={faSpinner} />
                </motion.div>
            ) : (
                children
            )}
        </RegisterSubmitBtn>
    )
}

export default SubmitButton
