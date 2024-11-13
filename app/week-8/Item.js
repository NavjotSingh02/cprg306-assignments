export default function Item({ item, onSelect }) {
  return (
    <div 
      className="p-2 m-4 bg-slate-900 max-w-sm" 
      onClick={() => onSelect(item)}
    >
      <h1 className="text-3xl text-white">{item.name}</h1>
      <p className="text-xs text-white font-bold">{item.quantity} {item.category}</p>
    </div>
  );
}