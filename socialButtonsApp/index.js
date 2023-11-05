const Button = (props) => {
  //  Write your code here.
  return <button className={props.className}>{props.textContent}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button textContent="Like" className="like-button" />
        <Button textContent="Comment" className="comment-button" />
        <Button textContent="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
