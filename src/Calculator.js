import './Calculator.css'
import {useState} from 'react';
import { evaluate } from 'mathjs'

function Calculator(){

    let[result, setResult] = useState('')
    let[hasDot , setHasDot] = useState(false)

    let operators = [ '+' , '-' , '*' , '/']

    const checkInput = (text)=> {
        if(text === '×') return '*'
        if(text === '÷') return '/'
        return text
    }

    const clickHandler = (e)=> {
        let input = checkInput(e.target.innerText);
        if(input === '.' ) {
            if(hasDot === true) return
            else setHasDot(true)
        }

        if(operators.includes(input)) {
            setHasDot(false)
        }

        setResult(result + input)
    }

    const clearBtn = ()=> {
        setResult('')
        setHasDot(false)

    }

    const backSpaceBtn = ()=> {
        if(result.endsWith('.'))
            setHasDot(false)
        setResult(result.slice(0, -1))
    }

    const equalBtn = ()=> {
        setResult(String(evaluate(result)))
        setHasDot(false)
    }

    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={clearBtn} className='color twoCol'>Clear</button>
                <button onClick={backSpaceBtn} className='color' >C</button>
                <button onClick={clickHandler}  className='color' >÷</button>
                <button onClick={clickHandler} >7</button>
                <button onClick={clickHandler} >8</button>
                <button onClick={clickHandler} >9</button>
                <button onClick={clickHandler}  className='color' >×</button>
                <button onClick={clickHandler} >4</button>
                <button onClick={clickHandler} >5</button>
                <button onClick={clickHandler} >6</button>
                <button onClick={clickHandler}  className='color' >-</button>
                <button onClick={clickHandler} >1</button>
                <button onClick={clickHandler} >2</button>
                <button onClick={clickHandler} >3</button>
                <button onClick={clickHandler}  className='color' >+</button>
                <button onClick={clickHandler} >0</button>
                <button onClick={clickHandler} >.</button>
                <button onClick={equalBtn} className='color twoCol'>=</button>
            </div>
        </div>
    )
}
export default Calculator