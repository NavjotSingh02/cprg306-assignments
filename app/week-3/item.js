export default function Item({name,quantity,category}){
    return(
      <div className="bg-blue-950">
       <h1 className="txt-x1">{name}</h1>
       <p className="text-xs">{quantity} {category}</p>
      </div>
    ); 
   
   }