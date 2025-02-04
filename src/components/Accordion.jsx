import { useState } from "react"

export default function Accordion({title, description}) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen((current) => !current);
    }

    return (
    <div className="accordion">
    <div className="accordion-title">
        <h2>{title}</h2>
        <button className="accordion-btn" onClick={toggleAccordion}>+</button>
        {isOpen && <div>{description}</div>}
    </div>
</div>
    )
}