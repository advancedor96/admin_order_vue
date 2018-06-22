<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark ">
		<div class="container">
			<a class="navbar-brand" href="#">Shoptime</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link active-class="aaa" class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link active-class="aaa" class="nav-link" to="/order">Order</router-link>
					</li>

					<li class="nav-item">
						<router-link active-class="aaa" class="nav-link" to="/product">Products</router-link>
					</li>

				</ul>

				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">Admin
						</a>
					</li>
				</ul>
			</div>
		</div>

	</nav>
</template>

<script>
	export default {
		name: 'Header',

	}
</script>

<style lang="scss">
	ul {
		list-style: none;
	}

	.header {
		height: 50px;
		background-color: gold;
		width: 100%;
	}
		.navbar-brand{
			font-size: 24px;
		}

	a {
		position: relative;
		&:after {
			content: '';
			background: white;
			position: absolute;
			width: 0;
			height: 3px;
			transition: 0.3s;
			bottom: -1px;
			left: 50%;

		}
		&:hover,
		&.router-link-exact-active {
			a {
				color: red;
			}
			&:after {
				width: 100%;
				left: 0px;
			}
		}
	}
</style>