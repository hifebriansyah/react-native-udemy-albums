import React from 'react';
import { View } from 'react-native';

const styles = {
	view: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

const Card = (props) => (
	<View style={styles.view}>
		{props.children}
	</View>
);

export { Card };
