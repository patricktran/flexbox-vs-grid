import "./Flexbox.css";

const Flexbox = () => {
  return (
    <>
      <h1>Flexbox</h1>
      <h4>Example 1</h4>
      <div className="flex-container-ex1">
        <div className="cell">1</div>
        <div className="cell">2</div>
        <div className="cell">3</div>
      </div>

      <h4>Example 2 - Content shapes the Layout</h4>
      <div className="flex-container-ex2">
        <div className="cell">
          This is some very long content which will most likely span on a few
          lines, depending on the size of the parent and the available space.
        </div>
        <div className="cell">2</div>
        <div className="cell">3</div>
        <div className="cell">4</div>
        <div className="cell">5</div>
      </div>
      <h4>Example 3 - Responsive Layouts</h4>
      <div className="flex-container-ex3">
        Flexbox does not natively support Responsive layouts. Flexbox will just
        try to 'wrap' new items to new rows. Alternatively, you'd use media
        queries/calc()/flex-shrink to create responsive flex rules.
      </div>
      <footer>
        <h2>Notes</h2>
        <p>Flexbox is best when you want your CONTENT to shape the LAYOUT</p>
        <p>
          Flexbox is one-dimensional. This means Flexbox lays out items along
          either the horizontal or the vertical axis, so you have to decide
          whether you want a row-based or a column-based layout.
        </p>
        <p>
          Flexbox DOESN't natively support grid system (12 column grid), you'd
          have to use a framework such as Bootstrap.
        </p>
      </footer>
    </>
  );
};

export default Flexbox;
