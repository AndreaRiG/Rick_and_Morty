import Card from './Card.jsx';

 function Cards(props) {
   const { characters, onClose } = props;

   return (
   <div>
      {
         characters.map(({id,name, species, gender, image})=>{
            return <Card 
            key={id}
            name ={name}
            species ={species}
            gender ={gender}
            image ={image}
            id={id}
            onClose={() => onClose (id)}
            />
         })
      }
   </div>
   );
}
export default Cards;