function List({ records }) {
  return (
    <ul>
      {records.map(({ recordName, artistName, description }) => {
        <li>
          <h3>{recordName}</h3>
          <p className="artistName">{artistName}</p>
          <p className="description">{description}</p>
        </li>;
      })}
    </ul>
  );
}

export default List;
