const SiteSelector = ({ sites, setSelectedSite }: { sites: string[], setSelectedSite: any }) => {
    return (
      <>
        <h2 className="text-lg font-semibold mb-2">Selecciona un sitio web</h2>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedSite(e.target.value)}
        >
          <option value="">Selecciona un sitio</option>
          {sites.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
      </>
    );
  };
  
  export default SiteSelector;
  