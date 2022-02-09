import React from "react";

const Accordion = ({ items }) => {
    const renderedItems = items.map(item, index => {
        //pass the index as 
        return (
            <React.Fragment key={item.title}>
                <div
                    onClick={() => { console.log('title clicked', items[item]) }}
                    className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="active content">
                    <p> {item.content}</p>
                </div>
            </React.Fragment >
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}
export default Accordion