import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text, View } from 'react-native';
import SwitchBox from './SwitchBox';
import CourseCard from './CourseCard';

function MyCourses() {
	const [state, setState] = useState(true)

	const changeHandler = () => {
		state ? setState(false) : setState(true)
	}

	return (
		<View>
			<View style={styles.sectionContainer}>
				<View style={styles.sectionFlex}>
					<Text style={styles.sectionTitle}>My Courses</Text>
				</View>
				<View style={styles.sectionFlex}>
					<SwitchBox
						text1='Ongoing'
						text2='Past'
						switchWidth={200}
						switchBorderRadius={10}
						switchSpeedChange={700}
						btnBackgroundColor='#fff'
						btnBorderColor='#eeeeee'
						switchBackgroundColor='#eeeeee'
						activeFontColor='black'
					/>
				</View>
			</View>
			{
				state ? (
					<ScrollView>
						<CourseCard
							title="Basic English Communication"
							subtitle="Mrs. Folani"
							mediaSource={{
								uri: 'https://www.english2000.com/wp-content/uploads/2018/07/courses-general-english-600x403.jpg'
							}} />
						<CourseCard
							title="Predictive Annalystics for"
							subtitle="Mrs. Folani tar"
							mediaSource={{
								uri: 'https://www.britishcouncil.my/sites/default/files/soft-skills-img.jpg'
							}} />
						<CourseCard
							title="Advanced English"
							subtitle="Mrs. Folani tar tar"
							mediaSource={{
								uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1FfBfQ5ACGIGJpqRk1L87oJxqYU0tY-LWA&usqp=CAU'
							}} />
					</ScrollView>
				) : null
			}
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		backgroundColor: '#fff',
		paddingTop: 35,
	},
	sectionTitle: {
		fontSize: 24,
		color: '#272b36',
	},
	sectionFlex: {
		display: 'flex',
		alignItems: 'center',
		padding: 10
	},
});

export default MyCourses
