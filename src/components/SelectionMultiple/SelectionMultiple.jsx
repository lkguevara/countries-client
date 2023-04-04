import styles from './SelectionMultiple.module.css'

export const SelectionMultiple = (props) => {
  return (
    <div className={styles.countryContainer} >
      <p>{props.country}</p>
      <h4 onClick={()=>props.onDeletee(props.country)}>X</h4>
    </div>
  )
}