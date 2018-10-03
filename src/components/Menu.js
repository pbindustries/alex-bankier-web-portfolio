import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link className="button fit" onClick={props.onToggleMenu} to="/landing">About Me</Link></li>
                <li><Link className="button fit" onClick={props.onToggleMenu} to="/generic">Temp</Link></li>
                <li><Link className="button fit" onClick={props.onToggleMenu} to="/acting">Acting</Link></li>
                <li><Link className="button fit" onClick={props.onToggleMenu} to="/generic">Stunt Work</Link></li>
                <li><Link className="button fit" onClick={props.onToggleMenu} to="/generic">Motion Capture</Link></li>

                {/*<li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>*/}
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
