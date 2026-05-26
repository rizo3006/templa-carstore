import { useState } from "react";

export default function DropshippingStoreStarter() {
  const products = [
    {
      id: 1,
      name: "NightDrive™ LED Ambient Lights",
      price: "$159 MXN", 
      oldPrice: "$120 c/u", 
      badge: "2x1 HOY",

      image: "/led2.png",

  gallery: [
    "/led2.png",
    "/led1.png",
    "/led3.png",

  ],

      description:
        "Convierte el interior de tu carro en una experiencia premium.",
        description: "Convierte el interior de tu carro en una experiencia premium.",
  shipping: "Envío de 7–12 días",
  trend: true,
  stock: "Stock limitado"

    },

    {
      id: 2,
      name: "HydroClean 16PZ Pro",
      price: "$349 MXN",

      fit: "contain",

      image: "/imagekit3.jpg", 
        

      gallery: [
        "/imagekit3.jpg",
        "/imagekit2.jpg",
      ],

      description: "Kit completo de limpieza profesional para autos.",
      shipping: "Envío de 7–12 días",
  trend: true,
  stock: "Stock limitado"
    },

    {
      id: 3,
      name: "SportDrive™ Pedal Kit",
      price: "$199 MXN",

       image: "/pedal3.png",

  gallery: [
    "/pedal3.png",
    "/pedal1.jpg",
    "/pedal2.jpg",

  ],

      description:
        "Aspiradora portátil potente y compacta para tu coche.",
        shipping: "Envío de 7–12 días",
  trend: true,
  stock: "Stock limitado"
    },


  {
      id: 4,
      name: "LED + Pedales combo kit",
      price: "$299 MXN",

      fit: "contain",

      image: "/combokit.png",
        

      gallery: [
        "/combokit.png", 
        
      ],

      description: "Kit completo de limpieza profesional para autos.",
      shipping: "Envío de 7–12 días",
  trend: true,
  stock: "Stock limitado"
    },
    ];


  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [zoom, setZoom] = useState(false);
const [position, setPosition] = useState({ x: 0, y: 0 });

const [scale, setScale] = useState(1);

const [dragging, setDragging] = useState(false);
const [start, setStart] = useState({ x: 0, y: 0 });

// Pinch zoom
const [lastDistance, setLastDistance] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="carro"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            NEXT LEVEL CAR ACCESSORIES
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl mb-8">
            Productos virales para transformar tu carro.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition">
            Comprar ahora
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black">Productos</h2>

          <div className="text-zinc-400">
             Store Demo
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-600 hover:-translate-y-2 transition shadow-2xl relative"
            >
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {product.badge}
                </div>
              )}

              <div
                className="aspect-[4/5] overflow-hidden relative cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedImage(product.gallery[0]);
                  setQuantity(1);
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full ${
  product.fit === "contain"
    ? "object-contain p-4 bg-black"
    : "object-cover"
} hover:scale-110 transition duration-500`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-zinc-400 mb-2">
  {product.description}
</p>

<div className="mt-2 space-y-1 text-xs">
  <p className="text-zinc-400">🚚 {product.shipping}</p>

  {product.trend && (
    <p className="text-yellow-400 font-semibold">
      🔥 Pedido en tendencia
    </p>
  )}

  <p className="text-red-400 font-semibold">
    ⚠️ {product.stock}
  </p>
</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-black text-white">
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-zinc-500 line-through text-lg">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    {product.badge && (
                      <div className="text-green-400 font-semibold mt-1">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedImage(product.gallery[0]);
                      setQuantity(1);
                    }}
                    className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Ver producto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT POPUP */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto flex items-start md:items-center justify-center p-3 md:p-6">
          <div className="bg-black border border-zinc-800 rounded-3xl max-w-6xl w-full overflow-y-auto max-h-[95vh] grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
             <div
  className="w-full h-[300px] md:h-[500px] bg-black rounded-3xl overflow-hidden flex items-center justify-center touch-none"
  onTouchStart={(e) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      setDragging(true);
      setStart({
        x: t.clientX - position.x,
        y: t.clientY - position.y,
      });
    }

    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      setLastDistance(dist);
    }
  }}
  onTouchMove={(e) => {
    e.preventDefault(); // 🔥 evita zoom del navegador

    // 🟢 PINCH ZOOM (MUY SUAVE)
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (lastDistance) {
        const delta = dist / lastDistance;

        let newScale = scale * delta;

        // límites tipo Shopify
        newScale = Math.max(1, Math.min(newScale, 4));

        setScale(newScale);
      }

      setLastDistance(dist);
      return;
    }

    // 🟡 DRAG SOLO SI HAY ZOOM
    if (dragging && scale > 1 && e.touches.length === 1) {
      const t = e.touches[0];

      setPosition({
        x: t.clientX - start.x,
        y: t.clientY - start.y,
      });
    }
  }}
  onTouchEnd={() => {
    setDragging(false);
    setLastDistance(null);

    // reset suave si regresa a normal
    if (scale <= 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }}
>
  <img
    src={selectedImage}
    alt="product"
    draggable={false}
    className="select-none"
    style={{
      transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
      transformOrigin: "center",
      transition: "transform 0.12s ease-out",
      touchAction: "none", // 🔥 CLAVE: bloquea zoom del navegador
      cursor: scale > 1 ? "grab" : "zoom-in",
    }}
  />
</div>
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {selectedProduct.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    className="w-16 h-16 md:w-24 md:h-24 object-contain bg-black rounded-xl border border-zinc-700 hover:border-white hover:scale-105 transition shadow-lg cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <div className="p-5 md:p-10 flex flex-col justify-center">
              {selectedProduct.badge && (
                <div className="bg-red-500 text-white px-4 py-2 rounded-full w-fit font-bold mb-6">
                  {selectedProduct.badge}
                </div>
              )}

              <h2 className="text-3xl md:text-5xl font-black mb-4">
                {selectedProduct.name}
              </h2>

              <p className="text-zinc-400 text-lg mb-6">
                {selectedProduct.description}
              </p>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl md:text-6xl font-black">
                  {selectedProduct.price}
                </span>

                {selectedProduct.oldPrice && (
                  <span className="text-zinc-500 line-through text-2xl">
                    {selectedProduct.oldPrice}
                  </span>
                )}
              </div>

              <p className="text-green-400 font-semibold mb-8">
                Envío gratis hoy 🚚
              </p>

              <div className="mb-8">
                <p className="text-zinc-300 mb-3 font-semibold">
                  Cantidad
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="bg-zinc-800 w-12 h-12 rounded-xl text-2xl"
                  >
                    -
                  </button>

                  <span className="text-3xl font-bold w-10 text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-zinc-800 w-12 h-12 rounded-xl text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-gradient-to-r from-white to-zinc-300 text-black px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition w-full">
                  Comprar ahora
                </button>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-zinc-800 px-8 py-4 rounded-2xl font-black text-lg hover:bg-zinc-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            ¿Cómo funciona?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <div className="text-5xl font-black mb-4">1</div>
              <h3 className="text-2xl font-bold mb-2">Elige</h3>
              <p className="text-zinc-400">
                selecciona tu producto.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <div className="text-5xl font-black mb-4">2</div>
              <h3 className="text-2xl font-bold mb-2">
                Paga tus productos
              </h3>
              <p className="text-zinc-400">
                Compartenos tu dirección de entrega.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <div className="text-5xl font-black mb-4">3</div>
              <h3 className="text-2xl font-bold mb-2">Envío</h3>
              <p className="text-zinc-400">
                Te llegará a tu dirección de entrega y la fecha estimada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-zinc-800 text-center text-zinc-500">
        © 2026 NextDrive™ / By TemplaShop.
      </footer>
    </div>
  );
}