export default function Item({ grocery, onDeleteItem, onToggleItem }) {
  return (
    <li key={grocery.id}>
      <input
        type="checkbox"
        onChange={() => onToggleItem(grocery.id)}
        checked={grocery.checked}
      />
      <span style={grocery.checked ? { textDecoration: "line-through" } : {}}>
        {grocery.quantity} {grocery.name}
      </span>
      <button onClick={() => onDeleteItem(grocery.id)}>&times;</button>
    </li>
  );
}
