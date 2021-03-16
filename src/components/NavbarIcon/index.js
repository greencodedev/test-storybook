// This is the JS compiled version of `react-navbar-dropdown`
var __extends =
    (this && this.__extends) ||
    (function() {
        var extendStatics = function(d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function(d, b) {
                        d.__proto__ = b
                    }) ||
                function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
                }
            return extendStatics(d, b)
        }
        return function(d, b) {
            extendStatics(d, b)
            function __() {
                this.constructor = d
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
        }
    })()
import {
    NavbarDropdown as NavbarDropdownMain,
    NavbarDropdownToggle,
    NavbarDropdownOpen,
    NavbarDropdownClose,
    NavbarDropdownMenu,
    NavbarDropdownCSSTransitionMenu,
    NavbarDropdownItem,
} from './navbar-dropdown'
var NavbarDropdown = /** @class */ (function(_super) {
    __extends(NavbarDropdown, _super)
    function NavbarDropdown() {
        return (_super !== null && _super.apply(this, arguments)) || this
    }
    NavbarDropdown.Toggle = NavbarDropdownToggle
    NavbarDropdown.Open = NavbarDropdownOpen
    NavbarDropdown.Close = NavbarDropdownClose
    NavbarDropdown.Menu = NavbarDropdownMenu
    NavbarDropdown.CSSTransitionMenu = NavbarDropdownCSSTransitionMenu
    NavbarDropdown.Item = NavbarDropdownItem
    return NavbarDropdown
})(NavbarDropdownMain)
export default NavbarDropdown
