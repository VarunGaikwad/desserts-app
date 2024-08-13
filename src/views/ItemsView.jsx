import Item from "../components/Item";
import data from "../data/data.json";

export default function ItemsView() {
  return (
    <div className="col-span-2">
      <span className="header-title">Desserts</span>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((item) => (
          <Item key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
