/**
 * This is the Rating component
 * Child component of Movie Details 
 * This Includes:
 *      Outputting Movie Rating (stars)
 */

 /** Imports **/
import React from 'react';

class Ratings extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rating: [] }
    }
    
    /* Output */
    render() {
        return (
            <div id="details-rating">
                {this.state.rating}
            </div>
        )
    }
    componentWillMount() {
        this.checkWholeAndRound(this.props.rating);
    }

    /* Making Half Rating */
    // https://stackoverflow.com/questions/6137986/jasvascript-roundoff-number-to-nearest-0-5
    makeHalf(num) {
        return Math.round(num * 2) / 2;
    }

    /* Check Rating */
    checkWholeAndRound(num) {
        let half = this.makeHalf(num); // round to nearest 0.5
        const result = half % 1; // check if it's a half number or whole

        if (result !== 0) { //if not whole
            this.createHalfRating(half);
        }
        else {
            this.createWholeRating(half);
        }
    }
    
    /* Whole Rating Output */
    createWholeRating(num) {
        let rate = this.state.rating;
        const wholeStar = <i className="fa fa-star" aria-hidden="true"></i>;
        const emptyStar = <i className="fa fa-star-o" aria-hidden="true"></i>

        console.log(num);
        for (let n = 0; n < num; n++) {
            rate.push(wholeStar);
        }

        let empty = 10 - num;
        for (let e = 0; e < empty; e++) {
            rate.push(emptyStar);
        }
        this.setState({ rating: rate });
    }

    /* Half Rating Output */
    createHalfRating(num) {
        let rate = this.state.rating;

        const wholeStar = <i className="fa fa-star" aria-hidden="true"></i>;
        const halfStar = <i className="fa fa-star-half-o" aria-hidden="true"></i>
        const emptyStar = <i className="fa fa-star-o" aria-hidden="true"></i>

        for (let n = 0; n < (num - 0.5); n++) {
            rate.push(wholeStar);
        }
        rate.push(halfStar);

        let empty = 9.5 - num;
        for (let e = 0; e < empty; e++) {
            rate.push(emptyStar);
        }
        this.setState({ rating: rate })
    }
}
export default Ratings;