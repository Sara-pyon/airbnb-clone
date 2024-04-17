import { ReactNode } from "react"

interface Props{
    title: string,
    onClick: () => void,
    selected?: boolean
}

const ButtonSecondary = ({title, onClick, selected}: Props) => {
    let styles = 'border rounded-full hover:border-black self-end px-4 py-2';
    if(selected) styles += 'border-black';

  return (
    <div>
        <button className={styles}
                onClick={() => onClick()}>
            {title}
        </button>
    </div>
  )
}

export default ButtonSecondary