import * as React from "react";
import {
	Platform,
	StyleSheet,
	View
} from "react-native";
import { Container, Header, Content, Button, Text, Footer, FooterTab, Icon } from "native-base";
import appStyle from "./app-style";

const instructions: any = Platform.select({
	ios: "ios ts-app demo",
	android: "android ts-app demo",
});

export default class App extends React.Component<{}> {
	render(): JSX.Element {
		return (
			<View style={appStyle.container}>
				<Text style={appStyle.title}>
					dan2dev starter
				</Text>
				<Button style={appStyle.button} light >
					<Text>Hello</Text>
				</Button>
			</View>
		);
	}
}
