<template>
	<div id="app">
		<MyHeader></MyHeader>
		<router-view />
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader';
	import 'normalize.css';
	export default {
		name: 'app',
		components: {
			MyHeader
		}
	}
</script>

<style lang="scss">
	$color: blue;
	* {
		box-sizing: border-box;
	}

	html,
	body,
	#app {
		// background-color: $color;
		min-height: 100%;
		background-color: #F2F2F2;
	}

	
</style>