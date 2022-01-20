// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = event => {
        console.log(event.target.value)
        onToggleShowContent(event.target.value)
      }

      const onClickLeftNavbar = event => {
        console.log(event.target.value)
        onToggleShowLeftNavbar(event.target.value)
      }

      const onClickRightNavbar = event => {
        console.log(event.target.value)
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <div className="card">
            <h1>Layout</h1>
            <input
              type="checkbox"
              id="content"
              value="content"
              checked={showContent}
              onClick={onClickContent}
            />
            <label htmlFor="content">Content</label>
            <br />
            <input
              type="checkbox"
              id="leftNavbar"
              value="left navbar"
              checked={showLeftNavbar}
              onClick={onClickLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
            <br />
            <input
              type="checkbox"
              id="rightNavbar"
              value="right navbar"
              checked={showRightNavbar}
              onClick={onClickRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
