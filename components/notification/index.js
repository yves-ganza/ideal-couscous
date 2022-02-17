import {useState} from 'react'
import styles from './Notification.module.css'


const Notification = ({children, callback}) => {
    const [shouldShow, setShouldShow] = useState(true)

    const handleChange = () => {
        callback('')
        setShouldShow('false')
    }
    return(
        <>  
        {
            !shouldShow ? '' :
            <div className={styles.container} onClick={() => handleChange()}>
                <div>
                    {children}
                </div>
            </div>
        }
        </>
    )
}

export default Notification