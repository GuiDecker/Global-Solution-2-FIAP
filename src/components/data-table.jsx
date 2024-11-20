const DataTable = ({ solarData, windData }) => {
  const hours = Object.keys(solarData);

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Hourly Data</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Hour</th>
            <th>Solar Irradiance (Wh/m²)</th>
            <th>Wind Speed (m/s)</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td>{hour}</td>
              <td>{solarData[hour]}</td>
              <td>{windData[hour]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
