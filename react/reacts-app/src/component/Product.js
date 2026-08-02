function ProductCard({ name, price, image }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "200px" }}>
      <img src={image} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>₦{price}</p>
    </div>
  );
}

export default function App() {
  const products = [
    { id: 1, name: "Wireless Earbuds", price: 15000, image: "https://placehold.co/200x150" },
    { id: 2, name: "Phone Case", price: 3500, image: "https://placehold.co/200x150" },
    { id: 3, name: "Power Bank", price: 12000, image: "https://placehold.co/200x150" },
  ];

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
