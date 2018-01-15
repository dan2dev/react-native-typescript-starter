var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Platform, View } from "react-native";
import { Button, Text } from "native-base";
import appStyle from "./app-style";
var instructions = Platform.select({
    ios: "ios ts-app demo",
    android: "android ts-app demo",
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(View, { style: appStyle.container },
            React.createElement(Text, { style: appStyle.title }, "dan2dev starter"),
            React.createElement(Button, { style: appStyle.button, light: true },
                React.createElement(Text, null, "Hello"))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=app.js.map