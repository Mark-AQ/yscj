<template>
	<view class="content">
		<image class="logo" @click="tap" src="/static/logo.png"></image>
		<view class="text-area" @click="tapUI">
			<text class="title">{{ title }}</text>
		</view>
		<view style="display: flex; flex-direction: row;" class="">
			<text>结果: {{ $store.state.sum }}</text>
			<button @click="jia">+</button>
			<button @click="jian">-</button>
			<button @click="jiaWait">等会在加</button>
			<A></A>
			<B></B>
		</view>
	</view>
</template>

<script>
import A from '../../components/A.vue';
import B from '../../components/B.vue';
export default {
	components: {
		A,
		B
	},
	data() {
		return {
			title: 'Hello',
			
			
			num: 0
		};
	},

	mounted() {
		console.log('$store', this.$store);
	},
	
	
	methods: {
		jia() {
			this.$store.dispatch('jia', 100);
		},

		jian() {
			this.$store.commit('JIAN', 1);
		},
		jiaWait() {
			this.$store.dispatch('jiaWAIT', 1);
		},
		tapUI() {
			uni.navigateTo({
				url: 'componetView'
			});
		},

		tap() {
			const PluginName = uni.requireNativePlugin('lmk-testplugin');
			console.log('PluginName', PluginName);
			// 调用异步方法
			PluginName.showMessage(
				{
					name: 'uni-app',
					age: 1
				},
				ret => {
					uni.showToast({
						title: '调用异步方法: ' + ret,
						icon: 'none'
					});
				}
			);
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
