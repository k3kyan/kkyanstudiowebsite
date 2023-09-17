import FormElement from "./FormElement"
//divClass for div css stuff
export default function FormSection(divClass, elementList){
    const elements = elementList.map((val, index) => (
        <FormElement key={index} name={val[0]} title={val[1]} type={val[2]} id={val[3]} pattern={val[4]} placeholder={val[5]}/>
    ))
    console.log(elementList[0][1])
    console.log(elements)
    return(
        <div className={divClass} >
            {elements}
        </div>
    )
}