import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('programming') //the default search term on first render
    const [debouncedTerm, setDebouncedTerm] = useState(term) //triggers search only once per user input
    const [results, setResults] = useState([])

    // console.log(results)
    //the useEffect are for watching the term and the debounced term

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000) //for as long as the user is typing under 1sec the search won't trigger.And for every key press
        //the timer resets to 1s and only when 1s elapses then the search triggers
        return () => {
            clearTimeout(timeId)
        }
    }, [term])

    useEffect(() => {

        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm,
                }
            })
            setResults(data.query.search)
        }
        search()
    }, [debouncedTerm])

    // useEffect(() => {

    //     if (term) {
    //         search() //the if statement ensures our app renders immediately first time without wait

    //         const timeoutId = setTimeout(() => { // this fxn prevents autorerender for ever letter typed from here
    //             if (term) {
    //                 search()
    //             }
    //         }, 1000) //the setTimeout sets timer search in 500ms and resets timer for ever clearTimeout()

    //         return () => {                //this cancels the previous timer 
    //             clearTimeout(timeoutId)
    //         }                                 //to here
    //     }


    // }, [term])

    //this second argument controls when our code gets executed. could be an array, empty array or 
    //nothing, never an object or function. Empty [] will only run at initial render, nothing will run initial &
    //also run after every rerender. Array with data runs afrer every rerender if data has changed since last


    let renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`} //go to page when click go
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        <h2>{result.title}</h2>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div >
        )
    })


    return (
        <div>
            <div className="ui form segment ">
                <div className="field">
                    <label>Enter Search term</label>
                    <input
                        className="ui query"
                        value={term}
                        onChange={e => { setTerm(e.target.value) }}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
export default Search