import styles from './styles.module.scss'

type ButtonProps = {
  text: string;
  onClick?: any;
}

export function Button({text, onClick = () => {}}: ButtonProps) {
  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <div className={styles.buttonContent}>
        <span>{text}</span>
      </div>
    </div>
  )
}
