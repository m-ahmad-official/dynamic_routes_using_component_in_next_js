export default function CountryDetails(data: any) {
  return (
    <div>
      {data.countryInfo ? (
        <div>
          <h1 style={{ padding: "5px" }}>Name: {data.countryInfo.name}</h1>
          <h1 style={{ padding: "5px" }}>
            Population: {data.countryInfo.population}
          </h1>
          <h1 style={{ padding: "5px" }}>
            Capital: {data.countryInfo.capital}
          </h1>
        </div>
      ) : (
        <h1>{data.url} Country Not Find</h1>
      )}
    </div>
  );
}
