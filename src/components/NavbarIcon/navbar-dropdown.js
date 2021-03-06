var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', {value: raw})
        } else {
            cooked.raw = raw
        }
        return cooked
    }
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
var __assign =
    (this && this.__assign) ||
    function() {
        __assign =
            Object.assign ||
            function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __rest =
    (this && this.__rest) ||
    function(s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]]
            }
        return t
    }
import React from 'react'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'
var NavbarDropdownContext = React.createContext({})
var StyledNavbarDropdown = styled.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            ['\n  display: inline-block;\n  position: relative;\n'],
            ['\n  display: inline-block;\n  position: relative;\n']
        ))
)
var NavbarDropdown = /** @class */ (function(_super) {
    __extends(NavbarDropdown, _super)
    function NavbarDropdown(props) {
        var _this = _super.call(this, props) || this
        _this.ref = React.createRef()
        _this.state = {open: false}
        _this.handleClickToggle = _this.handleClickToggle.bind(_this)
        _this.handleClickItem = _this.handleClickItem.bind(_this)
        _this.handleClickOutside = _this.handleClickOutside.bind(_this)
        return _this
    }
    NavbarDropdown.prototype.handleClickToggle = function() {
        this.setState({open: !this.state.open})
    }
    NavbarDropdown.prototype.handleClickItem = function() {
        this.setState({open: false})
    }
    NavbarDropdown.prototype.handleClickOutside = function(e) {
        if (this.state.open) {
            if (this.ref.current && !this.ref.current.contains(e.target)) {
                this.setState({open: false})
                e.stopPropagation()
            }
        }
    }
    NavbarDropdown.prototype.componentDidMount = function() {
        document.addEventListener('click', this.handleClickOutside, true)
    }
    NavbarDropdown.prototype.render = function() {
        var contextValue = {
            open: this.state.open,
            handleClickToggle: this.handleClickToggle,
            handleClickItem: this.handleClickItem,
        }
        return React.createElement(
            NavbarDropdownContext.Provider,
            {value: contextValue},
            React.createElement(
                StyledNavbarDropdown,
                __assign({ref: this.ref}, this.props),
                this.props.children
            )
        )
    }
    return NavbarDropdown
})(React.Component)
export {NavbarDropdown}
export var NavbarDropdownToggle = function(props) {
    var contextValue = React.useContext(NavbarDropdownContext)
    var onClick = props.onClick,
        other = __rest(props, ['onClick'])
    return React.createElement(
        'span',
        __assign(
            {
                onClick: function(e) {
                    if (onClick) onClick(e)
                    contextValue.handleClickToggle()
                },
            },
            other
        ),
        props.children
    )
}
export var NavbarDropdownOpen = function(props) {
    var contextValue = React.useContext(NavbarDropdownContext)
    return React.createElement(React.Fragment, null, !contextValue.open && props.children)
}
export var NavbarDropdownClose = function(props) {
    var contextValue = React.useContext(NavbarDropdownContext)
    return React.createElement(React.Fragment, null, contextValue.open && props.children)
}
var StyledNavbarDropdownMenu = styled.div(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            ['\n  position: absolute;\n  width: max-content;\n'],
            ['\n  position: absolute;\n  width: max-content;\n']
        ))
)
export var NavbarDropdownMenu = function(props) {
    var contextValue = React.useContext(NavbarDropdownContext)
    return React.createElement(
        React.Fragment,
        null,
        contextValue.open &&
            React.createElement(StyledNavbarDropdownMenu, __assign({}, props), props.children)
    )
}
export var NavbarDropdownCSSTransitionMenu = function(props) {
    var contextValue = React.useContext(NavbarDropdownContext)
    return React.createElement(
        CSSTransition,
        __assign({in: contextValue.open, unmountOnExit: true}, props),
        React.createElement(StyledNavbarDropdownMenu, __assign({}, props), props.children)
    )
}
var StyledNavbarDropdownItem = styled.div(
    templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
            ['\n  &:hover {\n    cursor: pointer;\n  }\n'],
            ['\n  &:hover {\n    cursor: pointer;\n  }\n']
        ))
)
export var NavbarDropdownItem = function(props) {
    var contextValue = React.useContext(NavbarDropdownContext)
    var onClick = props.onClick,
        other = __rest(props, ['onClick'])
    return React.createElement(
        StyledNavbarDropdownItem,
        __assign(
            {
                onClick: function(e) {
                    if (onClick) onClick(e)
                    contextValue.handleClickItem()
                },
            },
            other
        ),
        props.children
    )
}
var templateObject_1, templateObject_2, templateObject_3
