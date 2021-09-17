import "./Grid.css";

const Grid = () => {
  return (
    <>
      <h1>Grid</h1>
      <h4>Example 1</h4>
      <div className="grid-container-ex1">
        <div className="cell">1</div>
        <div className="cell">2</div>
        <div className="cell">3</div>
      </div>
      <h4>Example 2 - Layout shapes the Content</h4>
      <div className="grid-container-ex2">
        <div className="cell">
          This is some very long content which will most likely span on a few
          lines, depending on the size of the parent and the available space.
        </div>
        <div className="cell">2</div>
        <div className="cell">3</div>
        <div className="cell">4</div>
        <div className="cell">5</div>
      </div>
      <h4>Example 3 - Shrink/Expand your window to see the effect.</h4>
      <div className="grid-container-ex3">
        <div className="cell">Responsive</div>
        <div className="cell">Responsive</div>
        <div className="cell">Responsive</div>
        <div className="cell">Responsive</div>
        <div className="cell">Responsive</div>
      </div>
      <footer>
        <h2>Notes</h2>
        <p>Grid is best when you want your LAYOUT to shape your CONTENT.</p>
        <p>
          Grid is two-dimensional. This means Grid lets you work along two axes:
          horizontally and vertically.{" "}
        </p>
        <p>
          Grid allows you to create two-dimensional layouts where you can
          precisely place grid items into cells defined by rows and columns.
        </p>
        <p>Grid natively supports grid system (12 column grid)</p>
      </footer>
    </>
  );
};

export default Grid;
