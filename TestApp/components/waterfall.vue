<template>
	<div class="waterfall">
		<div class="column" v-for="(column, index) in columns" :key="index">
			<div class="item" v-for="item in column.items" :key="item.id" @click="itemClicked(item)">
				<img
					:src="item.imgSrc"
					:alt="item.title"
					style="{
						height: item.height
					}"
				/>
				<h4>{{ item.title }}</h4>
				<p>{{ item.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Waterfall',
	props: {
		items: {
			type: Array,
			required: true
		},
		columnCount: {
			type: Number,
			default: 2
		}
	},
	data() {
		return {
			columns: []
		};
	},
	mounted() {
		const phoneNumber = '12512345678';
		const phoneRegExp = /^1[3456789]\d{9}$/;
		const isValidPhoneNumber = phoneRegExp.test(phoneNumber);
		console.log('isValidPhoneNumber: ', isValidPhoneNumber); // true
		this.initColumns();
		this.distributeItems();
	},
	methods: {
		initColumns() {
			this.columns = Array.from({ length: this.columnCount }, () => ({
				height: 0,
				items: []
			}));
		},
		distributeItems() {
			this.items.forEach(item => {
				let minHeightColumn = this.columns.reduce((a, b) => (a.height < b.height ? a : b));
				minHeightColumn.height += item.height;
				minHeightColumn.items.push(item);
			});
		},
		itemClicked(item) {
			this.$emit('itemClicked', item);
		}
	}
};
</script>

<style scoped>
.waterfall {
	display: flex;
	justify-content: space-between;
}
.column {
	flex: 1;
}
.item {
	margin-bottom: 15px;
}
.item img {
	width: 100%;
	height: auto;
}
</style>
