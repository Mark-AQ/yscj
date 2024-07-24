import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		sum: 1,

	},
	mutations: {
		//相当于同步的操作
		JIA(state, value) {
			state.sum += value
		},
		JIAN(state, value) {
			state.sum -= value
		}
	},
	actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
		jia(context, value) {
			context.commit('JIA', value)
		},
		// jian(context, value) {
		// 	context.commit('JIAN', value)
		// }

		jiaWAIT(context, value) {
			setTimeout(() => {
				context.commit('JIA', value)
			}, 500)
		}
	}
})
export default store
