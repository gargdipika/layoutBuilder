// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="unordered-list-container">
          {showLeftNavbar && (
            <div className="unordered-list-one">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="unordered-list-one">
                <li className="list-item-style">Item 1</li>
                <li className="list-item-style">Item 2</li>
                <li className="list-item-style">Item 3</li>
                <li className="list-item-style">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="container-2">
              <h1 className="heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidunt ut labore et dolore manga aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="container-3">
              <h1 className="heading">Right Navbar Menu</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
