import React from 'react'
import '../css/Item.css'
import bulb from '../img/bulb.jpg'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Item = () => {
    return (
    <article className="product">
            <header>
                <h3> <a href="#">Wifi Smart Bulb</a>  </h3>
                <img src={bulb} alt=""/>
                <data value="39"><del>$50.00</del> 
                    <ins>$39.00</ins>
                </data>
                <p>Smart lamps in compatible with Amazon's Alexa. It only takes a few minutes to configure them and they are immediately ready.
                By voice command, make them change color, intensity and turn them on and off.</p>
                <dl>
                <dt>Rating</dt>
                
                <dd>4.5 <StarIcon /> <StarIcon /> <StarIcon /><StarIcon /> <StarHalfIcon /></dd>
                </dl>
                <a href="#" className="hedin">see more</a>
            </header>
            <form className="form"> 
                <fieldset className="variation"> 
                    <legend>Colours</legend>
                    <ul>
                            <li><label><input type="radio" name="colour" value="RGB" /> RGB-WC</label></li>
                            <li><label><input type="radio" name="colour" value="DC" /> Day-cool</label></li>
                            <li><label><input type="radio" name="colour" value="WL" /> worm light</label></li>
                    </ul>
                </fieldset>  
                <fieldset className="variation">
                    <legend >Sizes</legend>
                        <ul>
                            <li><label><input type="radio" name="size" value="m" /> 10 W</label></li>
                            <li><label><input type="radio" name="size" value="l" /> 9 W</label></li>
                            <li><label><input type="radio" name="size" value="xl" /> 12 W</label></li>
                        </ul>
                </fieldset>      
            </form>
            <footer className="bottons">
            
            <li><a href="#"><i className="fas fa-heart"> Add Favourite</i></a></li>
            <li><a href="#"><i className="fas fa-cart-plus">Add to Cart</i></a></li>
          </footer>
    </article>)
}

export default Item