const Table = ({ keywords }: { keywords: any[] }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 text-left">Palabra Clave</th>
              <th className="py-2 px-4 text-center">Impresiones</th>
              <th className="py-2 px-4 text-center">Clics</th>
              <th className="py-2 px-4 text-center">Posición</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-100 cursor-pointer"
                title={`Impresiones: ${keyword.impressions}, Clics: ${keyword.clicks}, Posición: ${keyword.position?.toFixed(1)}`}
              >
                <td className="py-2 px-4">{keyword.keys[0]}</td>
                <td className="py-2 px-4 text-center">{keyword.impressions}</td>
                <td className="py-2 px-4 text-center">{keyword.clicks}</td>
                <td className="py-2 px-4 text-center">{keyword.position?.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  