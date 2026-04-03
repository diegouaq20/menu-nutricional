import { useState } from "react";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const menu = [
  {
    dia: "Lunes",
    kcal: 1395,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Huevos a la mexicana", descripcion: "2 huevos revueltos con jitomate, cebolla y chile serrano. 1 tortilla de maíz. Prepáralo en casa tranquila.", kcal: 290 },
      { tipo: "☀️ Comida", nombre: "Tuperware: Pollo con arroz y zanahoria", descripcion: "100g pechuga cocida y deshebrada + ½ taza arroz integral + zanahoria cocida. Sazona con limón y sal. Fácil de recalentar o comer frío.", kcal: 430 },
      { tipo: "🍎 Snack", nombre: "Almendras + mandarina", descripcion: "10 almendras + 1 mandarina. Caben perfectamente en una bolsita para la mochila.", kcal: 170 },
      { tipo: "🌙 Cena", nombre: "Sopa de verduras con pollo", descripcion: "Caldo de pollo desgrasado con chayote, zanahoria y calabaza. 80g pollo deshebrado. 1 tortilla.", kcal: 310 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Lleva tu termo al laboratorio. Mínimo 2L al día.", kcal: 0 },
    ],
  },
  {
    dia: "Martes",
    kcal: 1400,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Molletes ligeros", descripcion: "1 bolillo partido y tostado en comal, con frijoles negros machacados y queso panela. Sin mantequilla.", kcal: 300 },
      { tipo: "☀️ Comida", nombre: "Tuperware: Ensalada de atún con pasta", descripcion: "1 lata atún en agua escurrida + ½ taza pasta integral cocida + jitomate + pepino + limón + sal. Lista desde la noche anterior.", kcal: 420 },
      { tipo: "🍎 Snack", nombre: "Zanahorias baby con hummus", descripcion: "1 taza zanahorias baby + 2 cdas hummus en un recipiente pequeño. Muy portable.", kcal: 140 },
      { tipo: "🌙 Cena", nombre: "Omelette de champiñones", descripcion: "2 huevos + 3 champiñones en rebanadas + cebolla + epazote o cilantro. 1 tortilla de maíz.", kcal: 280 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Lleva tu termo al laboratorio. Mínimo 2L al día.", kcal: 0 },
    ],
  },
  {
    dia: "Miércoles",
    kcal: 1390,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Huevos con nopales", descripcion: "2 huevos revueltos con ½ taza nopales cocidos y escurridos, cebolla y sal. 1 tortilla de maíz.", kcal: 280 },
      { tipo: "☀️ Comida", nombre: "Tuperware: Lentejas guisadas", descripcion: "1 taza lentejas con jitomate, cebolla y un toque de comino. Puedes llevar 1 tortilla aparte en papel aluminio.", kcal: 430 },
      { tipo: "🍎 Snack", nombre: "Jícama con chile y limón", descripcion: "1 taza jícama en bastones con chile piquín y limón. Prepárala de noche y guárdala en tupperware.", kcal: 80 },
      { tipo: "🌙 Cena", nombre: "Tilapia al limón con ensalada", descripcion: "150g tilapia a la plancha, ensalada de lechuga, pepino y jitomate con limón y sal.", kcal: 320 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Lleva tu termo al laboratorio. Mínimo 2L al día.", kcal: 0 },
    ],
  },
  {
    dia: "Jueves",
    kcal: 1410,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Tostadas de frijoles con huevo", descripcion: "2 tostadas horneadas con frijoles negros + 1 huevo cocido rebanado encima + salsa y limón.", kcal: 300 },
      { tipo: "☀️ Comida", nombre: "Tuperware: Wrap de pollo", descripcion: "1 tortilla de harina integral con 100g pollo a la plancha, lechuga, jitomate, aguacate (¼) y mostaza. Envuélvela en papel aluminio. Se come frío perfecto.", kcal: 460 },
      { tipo: "🍎 Snack", nombre: "Nueces + manzana", descripcion: "5 nueces + 1 manzana chica. Clásico de mochila.", kcal: 180 },
      { tipo: "🌙 Cena", nombre: "Caldo tlalpeño ligero", descripcion: "Caldo de pollo con garbanzo, pollo deshebrado y chipotle (poquito). Sin tortilla o 1 si tienes hambre.", kcal: 290 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Lleva tu termo al laboratorio. Mínimo 2L al día.", kcal: 0 },
    ],
  },
  {
    dia: "Viernes",
    kcal: 1400,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Sincronizada ligera", descripcion: "2 tortillas de maíz con 50g pechuga de pavo en rebanadas y queso panela. Cocinadas en comal sin aceite.", kcal: 310 },
      { tipo: "☀️ Comida", nombre: "Tuperware: Arroz con frijoles y atún", descripcion: "½ taza arroz integral + ¼ taza frijoles + 1 lata atún en agua + jitomate picado + cilantro. El combo más fácil de armar.", kcal: 440 },
      { tipo: "🍎 Snack", nombre: "Yogurt griego natural", descripcion: "1 yogurt griego sin azúcar (150g). Llévalo en tu mochila con un hielo reutilizable si es lejos.", kcal: 130 },
      { tipo: "🌙 Cena", nombre: "Chilaquiles verdes ligeros", descripcion: "1 taza tortilla en tiras horneada (no frita), salsa verde hervida, 1 huevo pochado, queso fresco rallado (poco).", kcal: 300 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Lleva tu termo al laboratorio. Mínimo 2L al día.", kcal: 0 },
    ],
  },
  {
    dia: "Sábado",
    kcal: 1420,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Huevos rancheros ligeros", descripcion: "2 huevos estrellados en sartén antiadherente sin aceite, salsa roja casera, 1 tortilla de maíz. Disfrútalo tranquila que es fin de semana.", kcal: 310 },
      { tipo: "☀️ Comida", nombre: "Tacos de nopales con frijoles", descripcion: "3 tortillas de maíz, nopales asados, frijoles negros enteros, cebolla morada, salsa verde, cilantro y limón.", kcal: 420 },
      { tipo: "🍎 Snack", nombre: "Pepino con queso cottage", descripcion: "½ pepino rebanado + 3 cdas queso cottage. Fresco y llena bastante.", kcal: 100 },
      { tipo: "🌙 Cena", nombre: "Crema de calabaza sin crema", descripcion: "2 tazas calabaza cocida licuada con caldo de pollo, ajo y cebolla. Sazona con sal y pimienta. Acompañada de 1 tortilla.", kcal: 280 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Mínimo 2L al día.", kcal: 0 },
    ],
  },
  {
    dia: "Domingo",
    kcal: 1400,
    comidas: [
      { tipo: "🌅 Desayuno", nombre: "Machaca con huevo", descripcion: "50g machaca de res + 2 huevos revueltos + jitomate + cebolla + chile. 1 tortilla de maíz.", kcal: 320 },
      { tipo: "☀️ Comida", nombre: "Pozole rojo ligero", descripcion: "1 taza maíz pozolero, 100g pechuga deshebrada, caldo desgrasado. Adorna con lechuga, rábanos y orégano. Sin tostadas.", kcal: 400 },
      { tipo: "🍎 Snack", nombre: "Palomitas naturales", descripcion: "2 tazas palomitas en olla sin mantequilla. Sal al gusto.", kcal: 100 },
      { tipo: "🌙 Cena", nombre: "Ensalada de atún completa", descripcion: "1 lata atún en agua, lechuga, jitomate, pepino, aguacate (¼), maíz (2 cdas), limón y sal.", kcal: 290 },
      { tipo: "💧 Hidratación", nombre: "Agua", descripcion: "Mínimo 2L al día.", kcal: 0 },
    ],
  },
];

const colores = {
  "🌅 Desayuno": { bg: "bg-amber-50", border: "border-amber-300", badge: "bg-amber-100 text-amber-700" },
  "☀️ Comida": { bg: "bg-orange-50", border: "border-orange-300", badge: "bg-orange-100 text-orange-700" },
  "🍎 Snack": { bg: "bg-green-50", border: "border-green-300", badge: "bg-green-100 text-green-700" },
  "🌙 Cena": { bg: "bg-indigo-50", border: "border-indigo-300", badge: "bg-indigo-100 text-indigo-700" },
  "💧 Hidratación": { bg: "bg-sky-50", border: "border-sky-300", badge: "bg-sky-100 text-sky-700" },
};

const iconoTipo = {
  "🌅 Desayuno": "En casa",
  "☀️ Comida": "🎒 Portable",
  "🍎 Snack": "🎒 Portable",
  "🌙 Cena": "En casa",
  "💧 Hidratación": "",
};

export default function MenuNutricional() {
  const [diaActivo, setDiaActivo] = useState(0);
  const d = menu[diaActivo];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white p-4 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-rose-600">🥗 Menú Semanal</h1>
          <p className="text-sm text-gray-500 mt-1">~1,400 kcal/día · Desayunos salados · Comidas portables 🎒</p>
        </div>

        {/* Leyenda */}
        <div className="flex gap-3 justify-center mb-4 text-xs">
          <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">🏠 En casa = desayuno y cena</span>
          <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">🎒 Portable = comida y snack</span>
        </div>

        {/* Selector de días */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-hide">
          {dias.map((dia, i) => (
            <button
              key={dia}
              onClick={() => setDiaActivo(i)}
              className={`flex-shrink-0 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                diaActivo === i
                  ? "bg-rose-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {dia.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Día activo */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">{d.dia}</h2>
            <span className="bg-rose-100 text-rose-600 text-sm font-semibold px-3 py-1 rounded-full">
              {d.kcal} kcal
            </span>
          </div>

          <div className="space-y-3">
            {d.comidas.map((c, i) => {
              const col = colores[c.tipo] || { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100 text-gray-700" };
              const portable = iconoTipo[c.tipo];
              return (
                <div key={i} className={`rounded-xl border ${col.border} ${col.bg} p-3`}>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${col.badge}`}>
                        {c.tipo}
                      </span>
                      {portable && portable.includes("🎒") && (
                        <span className="text-xs bg-teal-100 text-teal-600 font-medium px-2 py-0.5 rounded-full">🎒 Portable</span>
                      )}
                    </div>
                    {c.kcal > 0 && (
                      <span className="text-xs text-gray-400 font-medium ml-1">{c.kcal} kcal</span>
                    )}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm mt-1">{c.nombre}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{c.descripcion}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips laboratorio */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 mb-3">
          <h3 className="font-bold text-teal-700 mb-2">🧪 Tips para BIOMIVA</h3>
          <ul className="text-xs text-teal-700 space-y-1.5">
            <li>✅ Prepara la comida del día siguiente desde la noche anterior.</li>
            <li>✅ Usa tupperware hermético para que no haya derrames en la mochila.</li>
            <li>✅ Lleva tu snack en una bolsita separada del lunch principal.</li>
            <li>✅ Un termo de agua en la mochila te evita comprar bebidas azucaradas.</li>
            <li>✅ La mayoría de estas comidas se comen frías o a temperatura ambiente.</li>
          </ul>
        </div>

        {/* Tips generales */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
          <h3 className="font-bold text-rose-700 mb-2">💡 Tips generales</h3>
          <ul className="text-xs text-rose-600 space-y-1.5">
            <li>✅ Cocina al vapor, horno o plancha. Evita freír.</li>
            <li>✅ Si tienes mucha hambre, agrega más verduras (casi no tienen calorías).</li>
            <li>⚠️ Si tienes alguna condición de salud, consulta a un nutriólogo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}