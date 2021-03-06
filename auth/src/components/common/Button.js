import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
	TouchableOpacity: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	text: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

const Button = (props) => (
	<TouchableOpacity style={styles.TouchableOpacity} onPress={props.onPress}>
		<Text style={styles.text}>{props.text}</Text>
	</TouchableOpacity>
);

export { Button };
