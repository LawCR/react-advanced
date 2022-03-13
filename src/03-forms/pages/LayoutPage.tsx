import styles from './layout.module.css'

export const LayoutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.nav_container}>
            <div className={styles.nav_logo}>
                <p>Key</p>
            </div>
            <div className={styles.nav_options}>
                <ul className={styles.nav_options_list}>
                    <li>Log in</li>
                    <li>Register</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className={styles.form_container}>
            <div>
                <p>Logo</p>
            </div>
            <form className={styles.form}>
                <input className={styles.form_input} type='text' placeholder='Username' />
                <input className={styles.form_input} type='password' placeholder='Password' />
                <button className={styles.form_button}>GET STARTED</button>
            </form>
            <div></div>
        </div>
    </div>
  )
}
