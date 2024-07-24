<template>
	<div id="app"><Waterfall :items="items" :columnCount="3" @itemClicked="handleItemClick" /></div>
</template>

<script>
import Waterfall from '../../components/waterfall.vue';

export default {
	name: 'App',
	components: {
		Waterfall
	},
	data() {
		return {
			items: [
				{
					id: 1,
					imgSrc: 'https://source.unsplash.com/200x300',
					title: 'Title 1',
					description: 'Description 1',
					height: 100
				},
				{
					id: 2,
					imgSrc: 'https://source.unsplash.com/200x300',
					title: 'Title 1',
					description: 'Description 2',
					height: 200
				},
				{
					id: 3,
					imgSrc: 'https://source.unsplash.com/200x300',
					title: 'Title 1',
					description: 'Description 3',
					height: 350
				},
				{
					id: 4,
					imgSrc: 'https://source.unsplash.com/200x300',
					title: 'Title 1',
					description: 'Description 4',
					height: 860
				}
			]
		};
	},
	methods: {
		handleItemClick(item) {
			console.log('Item clicked:', item);
		}
	}
};
</script>

<style>
#app {
	margin: 0 auto;
	max-width: 1200px;
	padding: 50px;
}
</style>
