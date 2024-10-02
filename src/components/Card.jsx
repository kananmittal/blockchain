import Styles from './card.module.css'
const Card = (props) => {
    console.log(props.recipe.recipe, "com");
    return (
      <div className={Styles.img}>
        <h2>{props.recipe.recipe.label}</h2>
        <img src={props.recipe.recipe.image} />
      </div>
    );
  };
  
  export default Card;