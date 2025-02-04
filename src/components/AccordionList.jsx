import languages from "../data/languages";
import Accordion from "./Accordion";

export default function AccordionList() {
    return (
         <div className="container">
            {languages.map((language, index) => {
                    return (
                         <Accordion  key={index} title={language.title} description={language.description} />
                    )
                })}
            </div>
    );
}
