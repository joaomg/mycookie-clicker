var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState;


var CookieClicker = function CookieClicker(_ref) {
    var onClickFunction = _ref.onClickFunction;

    var handleClick = function handleClick() {
        onClickFunction(1);
    };
    return React.createElement(
        "button",
        { onClick: handleClick, className: "pure-button pure-button-primary" },
        React.createElement("i", { className: "fas fa-cookie-bite xlarge" }),
        " Bite me ;-)"
    );
};

var Cookie = function Cookie() {
    var _useState = useState(0),
        _useState2 = _slicedToArray(_useState, 2),
        clicks = _useState2[0],
        setClicks = _useState2[1];

    var clickCookie = function clickCookie(click) {
        setClicks(clicks + click);
    };

    return React.createElement(
        "div",
        null,
        React.createElement(CookieClicker, { onClickFunction: clickCookie }),
        React.createElement("br", null),
        React.createElement(
            "span",
            null,
            "Click count: ",
            clicks
        )
    );
};

ReactDOM.render(React.createElement(Cookie, null), document.getElementById('cookie'));