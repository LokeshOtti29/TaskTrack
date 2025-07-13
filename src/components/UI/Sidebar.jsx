import React from "react";
import { SIDE_BAR } from "../../constants/constant";

const Sidebar = () => {
  return (
    <div>
      <div>
        <div></div>
        <div>
          {SIDE_BAR.map((sidebar, index) => (
            <div key={index}>
              <div>
                <img src={sidebar.IMAGE} alt={sidebar.NAME} />
              </div>
              <div>
                <button>{sidebar.NAME}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
