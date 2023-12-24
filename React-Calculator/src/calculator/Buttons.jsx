import style from './button.module.css'

const Button = ({onButtonClick}) => {

  let buttonList = ['C', '%', '^', '/', , '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '00', '.', '=']

 

  return (<div className="d-flex justify-content-center flex-wrap">
    {buttonList.map((item) =>
      <button
        className={style.btn}
        key={item}
        onClick={()=>onButtonClick(item)}
      >{item}
      </button>)
    }

  </div>)
}

export default Button; 