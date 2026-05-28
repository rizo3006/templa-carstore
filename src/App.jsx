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
      price: "$249 MXN",

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
      price: "$149 MXN",

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
      price: "$399 MXN",

      fit: "contain",

      image: "/combokit.jpg",
        

      gallery: [
        "/combokit.jpg", 
        
      ],

      description: "Kit completo de limpieza profesional para autos.",
      shipping: "Envío de 7–12 días",
  trend: true,
  stock: "Stock limitado"
    },

     {
      id: 5,
      name: "Kit de lavado para auto",
      price: "$299 MXN",

      fit: "contain",

      image: "pistola1.jpg", 
        

      gallery: [
        "pistola1.jpg", 
        "pistola2.jpg", 
        "pistola3.jpg", 
      
      ],

      description: "Haz que tu carro quede como recién lavado en minutos.",      
      shipping: "Envío de 7–12 días",
  trend: true,
  stock: "Hoy a solo $299 MXN"
    },

    ];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const [checkoutOpen, setCheckoutOpen] = useState(false);
const [showAdded, setShowAdded] = useState(false);
const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [zoom, setZoom] = useState(false);
const [position, setPosition] = useState({ x: 0, y: 0 });

const [scale, setScale] = useState(1);

const [dragging, setDragging] = useState(false);
const [start, setStart] = useState({ x: 0, y: 0 });

// Pinch zoom
const [lastDistance, setLastDistance] = useState(null);
const total = cart.reduce((acc, item) => {
  return acc + parseInt(item.price.replace(/\D/g, "")) * item.quantity;
}, 0);
  return (
    <div className="min-h-screen bg-black text-white">
    {/* NAVBAR */}
<div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800 px-6 py-4 flex items-center justify-between">

  <h1 className="text-2xl font-black">
    NextDrive™
  </h1>

  <button
    onClick={() => setShowCart(true)}
    className="relative bg-zinc-900 px-5 py-3 rounded-2xl border border-zinc-700"
  >
    🛒

    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
        {cart.length}
      </span>
    )}
  </button>
</div>
      {/* HERO */}
      <section className="relative h-[100vh] pt-24 flex items-center justify-center overflow-hidden">
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

          <button
  onClick={() => {
    document
      .getElementById("productos")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
  Ver productos
</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
  id="productos"
  className="py-20 px-6 max-w-7xl mx-auto"
>
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
                <button
  onClick={() => {
    setCart((prev) => {
      setShowAdded(true);

setTimeout(() => {
  setShowAdded(false);
}, 2500);
      const existing = prev.find(
        (item) => item.id === selectedProduct.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === selectedProduct.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...selectedProduct,
          quantity: 1,
        },
      ];
    });
  }}
  className="bg-gradient-to-r from-white to-zinc-300 text-black px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition w-full"
>
  Agregar al carrito
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
{/* CART */}
{showCart && (
  <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4">
    
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-black">
          Tu carrito
        </h2>

        <button
          onClick={() => setShowCart(false)}
          className="text-3xl"
        >
          ×
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-zinc-400">
          Tu carrito está vacío.
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl"
              >
                <img
                  src={item.image}
                  className="w-24 h-24 object-contain bg-black rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <div>
  <p className="text-zinc-400">
    $
{parseInt(item.price.replace(/\D/g, "")) * item.quantity}
MXN
  </p>

  <div className="flex items-center gap-3 mt-3">

  <button
    onClick={() => {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity > 1
                    ? cartItem.quantity - 1
                    : 1,
              }
            : cartItem
        )
      );
    }}
    className="bg-zinc-800 w-8 h-8 rounded-lg text-lg"
  >
    -
  </button>

  <span className="font-bold text-lg">
    {item.quantity}
  </span>

  <button
    onClick={() => {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    }}
    className="bg-zinc-800 w-8 h-8 rounded-lg text-lg"
  >
    +
  </button>
</div>
</div>
                </div>

                <button
                  onClick={() => {
                    const updated = [...cart];
                    updated.splice(index, 1);
                    setCart(updated);
                  }}
                  className="bg-red-500 px-4 py-2 rounded-xl"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <button
  onClick={() => {
    setCheckoutOpen(true);
  }}
  className="w-full mt-6 bg-white text-black py-4 rounded-2xl font-black text-lg"
>
  Continuar al pago
</button>
        </>
      )}
    </div>
  </div>
)}
{/* CHECKOUT */}
{checkoutOpen && (
  <div className="fixed inset-0 bg-black/90 z-[300] overflow-y-auto p-4">

    <div className="max-w-3xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-black">
          Checkout
        </h2>

        <button
          onClick={() => setCheckoutOpen(false)}
          className="text-3xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-6">

        <input
          placeholder="Nombre completo"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="Número de teléfono"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="Código postal"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="Estado"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="Ciudad"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="Colonia"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="Calle y número"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        <input
          placeholder="RFC o CURP"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        />

        {/* PAGOS */}
        {/* PAGOS */}
<div className="mt-10">

  <h3 className="text-2xl font-black mb-5">
    Método de pago seguro
  </h3>

  <div className="space-y-4">

    {/* PAYPAL */}
    <button
      onClick={() => setPaymentMethod("paypal")}
      className={`w-full p-5 rounded-3xl border transition ${
        paymentMethod === "paypal"
          ? "border-blue-500 bg-blue-500/10"
          : "border-zinc-700 bg-zinc-900"
      }`}
    >
      <div className="flex items-center justify-between">

        <div className="text-left">
          <h4 className="text-2xl font-black">
            PayPal
          </h4>

          <p className="text-zinc-400 mt-1">
            Pago rápido y protegido
          </p>
        </div>

        <div className="text-right">
          <div className="text-4xl">
            🔵
          </div>

          {paymentMethod === "paypal" && (
            <p className="text-blue-400 text-sm mt-2 font-bold">
              Seleccionado
            </p>
          )}
        </div>

      </div>
    </button>

    {/* MERCADO PAGO */}
    <button
      onClick={() => setPaymentMethod("mercadopago")}
      className={`w-full p-5 rounded-3xl border transition ${
        paymentMethod === "mercadopago"
          ? "border-sky-400 bg-sky-400/10"
          : "border-zinc-700 bg-zinc-900"
      }`}
    >
      <div className="flex items-center justify-between">

        <div className="text-left">
          <h4 className="text-2xl font-black">
            Mercado Pago
          </h4>

          <p className="text-zinc-400 mt-1">
            Tarjeta, SPEI y meses
          </p>
        </div>

        <div className="text-right">
          <div className="text-4xl">
            🟦
          </div>

          {paymentMethod === "mercadopago" && (
            <p className="text-sky-400 text-sm mt-2 font-bold">
              Seleccionado
            </p>
          )}
        </div>

      </div>
    </button>

    {/* OXXO */}
    <button
      onClick={() => setPaymentMethod("oxxo")}
      className={`w-full p-5 rounded-3xl border transition ${
        paymentMethod === "oxxo"
          ? "border-yellow-400 bg-yellow-400/10"
          : "border-zinc-700 bg-zinc-900"
      }`}
    >
      <div className="flex items-center justify-between">

        <div className="text-left">
          <h4 className="text-2xl font-black">
            OXXO Pay
          </h4>

          <p className="text-zinc-400 mt-1">
            Paga en efectivo en OXXO
          </p>
        </div>

        <div className="text-right">
          <div className="text-4xl">
            🟥
          </div>

          {paymentMethod === "oxxo" && (
            <p className="text-yellow-400 text-sm mt-2 font-bold">
              Seleccionado
            </p>
          )}
        </div>

      </div>
    </button>

  </div>

  {/* MENSAJE */}
  <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-4">

    <p className="text-green-400 font-bold">
      🔒 Pago 100% seguro
    </p>

    <p className="text-zinc-400 text-sm mt-2">
      Tus pagos serán procesados de forma segura mediante plataformas certificadas.
    </p>

  </div>



  <input
    placeholder="Nombre del titular"
    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
  />

</div>
        <div className="flex items-center justify-between mt-10 text-3xl font-black">
          <span>Total:</span>

          <span>${total} MXN</span>
        </div>

        <a
          href={`https://wa.me/5213320354661?text=Hola,%20quiero%20hacer%20un%20pedido%20de:%20${cart
            .map((item) => `${item.name} x${item.quantity}`)
            .join(", ")}`}
          target="_blank"
          className="block text-center bg-green-500 text-white py-5 rounded-2xl font-black text-xl hover:scale-105 transition"
        >
          Confirmar pedido por WhatsApp. Enviaremos un mensaje con los detalles de tu pedido para coordinar la entrega y el pago.
        </a>

      </div>
    </div>
  </div>
)}
{/* NOTIFICATION */}
{showAdded && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[500] bg-white text-black px-6 py-4 rounded-2xl shadow-2xl font-bold animate-bounce">
    ✅ Producto agregado al carrito
  </div>
)}
      {/* FOOTER */}
      <footer className="py-10 border-t border-zinc-800 text-center text-zinc-500">
        © 2026 NextDrive™ / By TemplaShop.
      </footer>
    </div>
  );
}