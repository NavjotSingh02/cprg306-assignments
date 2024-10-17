import ItemList from "./item-list";

export default function page(){
    return(
      <main>
        <h1 style={{backgroundColor:"black",fontSize:"40px",color:"white"}}>shopping list</h1>
        <ItemList/>
      </main>
    );
}