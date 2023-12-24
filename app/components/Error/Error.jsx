import { clearError, clearSuccessMessage, useDispatch } from "@/lib/redux";
import styles from "./error.module.css"

const Error = ({ error, success }) => {
    const dispatch = useDispatch();
    let styleClass = '';
    let displayMessage = ''
    if (error.hasError) {
        displayMessage = error.errorMessage;
        styleClass = styles.errorStyle;
    } else if (success.message) {
        styleClass = styles.success;
        displayMessage = success.message
    }
    if (styleClass) {
        dispatch(clearError())
        dispatch(clearSuccessMessage())
        return (
            <p className={styles.message + " " + `${styleClass}`}>{displayMessage}</p>
        )
    }
}

export default Error;