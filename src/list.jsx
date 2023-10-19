import "./list.css";

function List({ records }) {
  return (
    <ul className="record-container">
      {records.map(({ recordId, recordName, artistName, description }) => (
        <li className="record-card" key={recordId}>
          <p className="record-name">
            <span>Name:</span> <span>{recordName}</span>
          </p>
          <p className="artist-name">
            <span>Artist:</span> <span>{artistName}</span>
          </p>
          <p className="description">
            <span>Des:</span> <span>{description}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default List;
