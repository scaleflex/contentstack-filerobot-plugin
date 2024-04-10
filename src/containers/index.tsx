import React from 'react';

const DefaultPage = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="app-component-content">
          <p>Nothing to show here. Are you trying to access any of the following paths?</p>
          <ul className="ui-location">
            <li>
              <a href="/custom-field">Custom Field</a>
            </li>
            <li>
              <a href="/app-configuration">App Configuration</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
