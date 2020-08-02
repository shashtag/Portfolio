import React from "react";

// drawer component that is sohow on click of hamburger?

const drawer = props => {
  let drawerClass = "drawer";
  if (props.show) {
    drawerClass = "drawer open";
  }
  return (
    <div className={drawerClass}>
      <nav>
        <ul>
          <li>
            <a href="/">link 1</a>
          </li>
          <li>
            <a href="/">link 2</a>
          </li>
          <li>
            <a href="/">link 3</a>
          </li>
          <li>
            <a href="/">link 4</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default drawer;
