export default function Item({name,quantity,category}){
    return(
      <div className="p-2 m-4 bg-slate-900 max-w-sm">
       <h1 className="text-3xl text-white">{name}</h1>
       <p className="text-xs text-white font-bold">{quantity} {category}</p>
      </div>
    ); 
   
   }