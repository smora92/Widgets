import React, { useState } from "react"; //useState gives access to state in fxnal component


const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)
    //this is destructuring elem in the useState array and not creating a new array
    //activeIndex is the piece of state that we are going to keep track of
    //setActiveIndex is the fxn we call to update our state
    //useState initial value null is what's assigned to the activeIndex at the start
    //useState(null) is equivalent to this.state={activeIndex:'null'} in class components

    const onTitleClicked = (index) => {
        return setActiveIndex(index)
        //setActiveIndex(index) === this.setState({activeIndex: index})
    }

    const renderedItems = items.map((item, index) => {  //pass the index as a prop here   
        const active = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={item.title}>
                <div
                    onClick={() => { onTitleClicked(index) }}
                    //use an arrow function to call the onClick function so it is invoked when the function is 
                    //called. If no fxn, the fxn the instant our component renders
                    className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p> {item.content}</p>
                </div>
            </React.Fragment >
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
            {/* {activeIndex} === {this.state.activeIndex} */}
        </div>
    )
}
export default Accordion