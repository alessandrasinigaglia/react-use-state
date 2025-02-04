import languages from "../data/languages";

export default function AccordionList() {
    return (
         <div className="container">
            {languages.map((language, index) => {
                    return  ( 
                    <div className="accordion" key={index}>
                    <div className="accordion-title">
                        <h2>Titolo</h2>
                        <button className="accordion-btn">+</button>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
                    temporibus eum ad maiores ullam quam explicabo nihil eligendi praesentium hic molestias.
                    In recusandae sapiente eligendi, id commodi natus suscipit omnis.
                    </div>
                </div>
                    );
                })}
            </div>
    );
}
