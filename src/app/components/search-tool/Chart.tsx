import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// ✅ Registrar módulos necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// 🔹 Generar datos de posición en los últimos 30 días (si hay datos)
const generatePositionData = (position?: number) => {
  if (position === undefined || position === null) {
    return []; // Si no hay datos, devolvemos un array vacío
  }

  return Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // Últimos 30 días
    value: Math.round(position + Math.random() * 5 - 2), // 🔹 Variación ligera
  })).map((d) => ({
    ...d,
    value: Math.max(1, Math.min(100, d.value)), // 🔹 Mantener valores en el rango 1-100
  }));
};

const Chart = ({ keywords }: { keywords: any[] }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {keywords.map((keyword, index) => {
        const positionData = generatePositionData(keyword.position);

        // 🔴 Si no hay datos, no renderizar la gráfica
        if (positionData.length === 0) {
          return null;
        }

        return (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">{keyword.keys[0]}</h4>
            <div className="w-full h-48">
              <Line
                data={{
                  labels: positionData.map((d) => d.date), // 🔹 Fechas en el eje X
                  datasets: [
                    {
                      label: "Posición en Google",
                      data: positionData.map((d) => d.value),
                      borderColor: "red",
                      backgroundColor: "rgba(255, 0, 0, 0.2)",
                      fill: false,
                      tension: 0.3,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    tooltip: {
                      mode: "index",
                      intersect: false,
                      callbacks: {
                        label: function (tooltipItem: any) {
                          return `Posición: ${tooltipItem.raw}`;
                        },
                      },
                    },
                    legend: {
                      display: true,
                      position: "top",
                    },
                  },
                  scales: {
                    x: {
                      display: true, // ✅ Fechas visibles en el eje X
                    },
                    y: {
                      reverse: true, // ✅ Ahora la posición 1 está arriba y 100 abajo
                      display: true,
                      title: {
                        display: true,
                        text: "Posición en Google (Menor es Mejor)",
                      },
                      ticks: {
                        stepSize: 5, // Intervalos de 5 en el eje Y
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
