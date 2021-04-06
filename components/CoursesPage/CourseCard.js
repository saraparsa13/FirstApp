import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
} from 'react-native';
import {
	Card,
	CardTitle,
	CardContent,
	CardAction,
	CardButton,
	CardImage,
} from 'react-native-material-cards';

function CourseCard({ mediaSource, title, subtitle }) {
	return (
		<View style={styles.container}>
			<Card
				mediaSource={mediaSource}
				style={{
					margin: 20,
					borderRadius: 20
				}}
			>
				<CardTitle
					subtitleAbove={false}
					title={title}
					subtitle={subtitle}
				/>
			</Card>
		</View>
	)
}

export default CourseCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
});