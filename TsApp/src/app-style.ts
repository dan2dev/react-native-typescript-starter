import {
	Platform,
	StyleSheet,
	View,
	ViewStyle,
	TextStyle,
	ImageStyle
} from "react-native";

const appStyle: StyleSheet.NamedStyles<{
	container?: ViewStyle;
	title?: TextStyle;
	button?: ViewStyle;
	demostyle?: ViewStyle | TextStyle | ImageStyle;
}> = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFFFFF"
	} as ViewStyle,
	title: {
		fontSize: 19,
		fontWeight: "bold",
		color: "rgba(0,0,0,0.6)",
		textAlign: "center",
		margin: 10,
	} as TextStyle,
	button: {
		alignSelf: "center",
		alignContent: "center",
		backgroundColor: "rgba(0,0,0,0.1)",
		borderRadius: 10,
		elevation: 0,
		borderWidth: 0
	} as ViewStyle
});
export default appStyle;