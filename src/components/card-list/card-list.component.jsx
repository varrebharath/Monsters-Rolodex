import { Component } from "react";
import PropTypes from 'prop-types';
import './card-list.style.css'
import Card from "../card.component/card.component";
class CardList extends Component{
    render() {
        
        const { monsters } = this.props
        return( 
        <div className="card-list">
            {monsters.map(monster => {
                return <Card monster={ monster} />
            } )}
        </div>
        )
    }
}
CardList.propTypes = {
    monsters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired
}
export default CardList