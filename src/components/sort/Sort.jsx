import "../sort/style.css";

export const Sort = ({ handleSorting }) => {
  return (
    <div className="sort__container">
      <button onClick={() => handleSorting}>Latest</button>
    </div>
  );
};
