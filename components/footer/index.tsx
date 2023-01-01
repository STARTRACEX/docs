import styles from './footer.module.css'
function F() {
   var date = new Date();
   return (
      <footer className={styles.footer}>
         <span>©{date.getFullYear()} startrace.ga </span>
         <a href="https://nextra.site/">with Nextra</a>
      </footer>
   )
}

export default function () {
   return <F />
}
