import {FaRegThumbsUp, FaRegGrimace, FaRegThumbsDown } from "react-icons/fa";
import React from 'react';
import css from '../Feedback/Feedback.module.css';


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percentage: 0,
    };

    handleIncrementGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    }

    handleIncrementNeut = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    }

    handleIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    }

    countTotalFeedback = () => {
        this.setState(prevState => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad ,
            };
        });
    }

    render() {
        return (
            <div className={css.Feedback}>
                <h1>Please leave feedback</h1>

                <div className={css.Feedback__controls}>
                    <button
                        type="button"
                        className={`${css.Feedback__buttnGood} ${css.Feedback__buttn}`}
                        onClick={this.handleIncrementGood}>
                        <FaRegThumbsUp  size="16px" className={css.icon} />
                        Good
                    </button>

                    <button
                        type="button"
                        className={`${css.Feedback__buttnNeutr} ${css.Feedback__buttn}`}
                        onClick={this.handleIncrementNeut}>
                        <FaRegGrimace  size="16px" className={css.icon} />
                        Neutral
                    </button>

                    <button
                        type="button"
                        className={`${css.Feedback__buttnBad} ${css.Feedback__buttn}`}
                        onClick={this.handleIncrementBad}>
                        <FaRegThumbsDown  size="16px" className={css.icon} />
                        Bad
                    </button>
                </div>
                
                <h2>Statistics</h2>

                <div className={css.Feedback__display}>
                    <span className={css.Feedback__value}>Good: {this.state.good}</span>
                    <span className={css.Feedback__value}>Neutral: {this.state.neutral}</span>
                    <span className={css.Feedback__value}>Bad: {this.state.bad}</span>
                    <span className={css.Feedback__value}>Total: {this.state.total}</span>
                    <span className={css.Feedback__value}>Positive feedback: {this.state.percentage}</span>
                </div>



             </div>
        )
    }
}

export default Feedback;