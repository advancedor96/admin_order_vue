<template>
	<div class="container">
		<div class="row info">
			<div class="title">Overview</div>
			<div class="right">
				<div class="date">2018/6/6</div>
				<div class="dateBetweenIcon">›</div>
				<div class="date">2018/6/13</div>
				<div class="unit">Weekly</div>
			</div>
		</div>
		<div class="row cards">
			<div class="col-md-4">
				<div class="card shadow">
					<div class="card-body">
						<h3 class="title">
							<i class="fas fa-hand-holding-usd"></i>TOTAL REVENUE</h3>
						<h2 class="number" :style="{color: '#7ED321'}">54,540</h2>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card shadow">
					<div class="card-body">
						<h3 class="title">
							<i class="fas fa-th-large"></i>TOTAL COST</h3>
						<h2 class="number" :style="{color: '#D0021B'}">12,660</h2>
					</div>
				</div>

			</div>
			<div class="col-md-4">
				<div class="card shadow">
					<div class="card-body">
						<h3 class="title">
							<i class="fas fa-money-bill"></i>NET INCOME</h3>
						<h2 class="number" :style="{color: '#4A90E2'}">41,880</h2>
					</div>
				</div>

			</div>
		</div>
		<div class="row activity">
			<LineChart />
		</div>

		<div class="row third_block_row">
			<div class="col-md-6">
				<div class="website">
					<div class="title">Transaction Website</div>
					<div class="items">
						<div class="item">
							<div class="left">
								<div class="icon">
									<img src="https://png.icons8.com/metro/1600/facebook.png" alt="">
								</div>
								<div class="name">Facebook</div>
							</div>
							<div class="right">
								<div class="number">45836</div>
								<div class="rate" :style="{color: '#7ED321'}"><i class="fas fa-arrow-up"></i>

20%</div>
							</div>
						</div>
						<div class="item">
							<div class="left">
								<div class="icon">
									<img src="https://cdn.icon-icons.com/icons2/887/PNG/512/Google_icon-icons.com_68981.png" alt="">
								</div>
								<div class="name">Facebook</div>
							</div>
							<div class="right">
								<div class="number">45836</div>
								<div class="rate" :style="{color: '#7ED321'}"><i class="fas fa-arrow-up"></i>

20%</div>
							</div>
						</div>
						<div class="item">
							<div class="left">
								<div class="icon">
									<img src="https://cdn.icon-icons.com/icons2/512/PNG/512/shopify_icon-icons.com_50754.png" alt="">
								</div>
								<div class="name">Facebook</div>
							</div>
							<div class="right">
								<div class="number">45836</div>
								<div class="rate" :style="{color: '#D0021B'}"><i class="fas fa-arrow-down"></i>

20%</div>
							</div>
						</div>
						<div class="item">
							<div class="left">
								<div class="icon">
									<img src="https://image.freepik.com/free-icon/wordpress-logo-of-a-letter-in-a-circle_318-49857.jpg" alt="">
								</div>
								<div class="name">Facebook</div>
							</div>
							<div class="right">
								<div class="number">45836</div>
								<div class="rate" :style="{color: '#D0021B'}"><i class="fas fa-arrow-down"></i>20%</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="last_orders">
					<div class="title">Lasted Orders</div>
					<div class="items">
						<div class="item">
							<div class="first_col">
								<img src="http://via.placeholder.com/100x100" alt="">
							</div>
							<div class="second_col">
								<div class="title">Vintage T-shift</div>
								<div class="datetime"><i class="fas fa-clock"></i>

2018/6/13 13:42</div>
								<div class="customer"><i class="fas fa-male"></i>

Belle Willis</div>
							</div>
							<div class="third_col">
								<div class="total">Total</div>
								<div class="number">3200</div>
							</div>
						</div>
						<div class="item">
							<div class="first_col">
								<img src="http://via.placeholder.com/100x100" alt="">
							</div>
							<div class="second_col">
								<div class="title">Cowboy Jacket</div>
								<div class="datetime"><i class="fas fa-clock"></i>

2018/6/13 13:42</div>
								<div class="customer"><i class="fas fa-male"></i>

Adrian Cummings</div>
							</div>
							<div class="third_col">
								<div class="total">Total</div>
								<div class="number">2800</div>
							</div>
						</div>
						<div class="item">
							<div class="first_col">
								<img src="http://via.placeholder.com/100x100" alt="">
							</div>
							<div class="second_col">
								<div class="title">Coach Coat</div>
								<div class="datetime"><i class="fas fa-clock"></i>

2018/6/13 13:42</div>
								<div class="customer"><i class="fas fa-male"></i>

Lura Holland</div>
							</div>
							<div class="third_col">
								<div class="total">Total</div>
								<div class="number">1600</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>


	</div>
</template>

<script>
	import LineChart from './LineChart.vue';
	export default {
		components: {
			LineChart
		}
		// name: 'Home',
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 940px;
		padding: 0;
		margin: 0 auto;
		.info {
			display: flex;
			justify-content: space-between;
		}
		.right {
			>* {
				// display: inline-block;
				padding: 0 9px;
			}
			align-items: center;
			display: flex;
			color: #9B9B9B;
			font-family: HelveticaNeue-Medium;
			.dateBetweenIcon {
				color: black;
				font-size: 24px;
			}
		}
		.title {
			font-size: 26px;
			font-family: HelveticaNeue-Bold;
		}
		.cards {
			justify-content: space-between;
			.card {
				width: 300px;
				height: 138px; // margin: 10px;
				text-align: center;
				.card-body {
					padding-top: 30px;
					.title {

						font-size: 16px;
						margin-bottom: 0;
					}
					.number {
						margin-top: 16px;
					}
					i {
						margin-right: 8px;
					}
				}
			}
			.shadow {
				box-shadow: 0 0 10px 5px #EBEBEB;
				border-radius: 3px;
			}
		}
	}

	.row.activity {
		background-color: #fff;
		box-shadow: 0 0 10px 5px #EBEBEB;
		border-radius: 3px;
	}

	.row.third_block_row {
		justify-content: space-between;
	}

	.row {
		margin: 0;
		margin-bottom: 20px;
		.website {
			width: 460px;
			background-color: #fff;
			box-shadow: 0 0 10px 5px #EBEBEB;
			border-radius: 3px;
			display: inline-block;
			padding: 0 40px;
			.title {
				margin-top: 30px;
				font-size: 24px;
				margin-bottom: 30px;
			}
			.left {
				display: flex;
				align-items: center;
				.icon>img {
					width: 45px;
					height: 45px;
				}
				.name {
					margin-left: 20px;
					color: #9B9B9B;
				}


			}
			.right {
				font-weight: 600;
				.number {
					color: black;
				}
				.rate {
					font-size: 16px;
				}
			}
		}
		.item {
			display: flex;
			justify-content: space-between;
			padding-bottom: 24px;
			padding-top: 24px;
			border-bottom: 1px solid #e8e8e8;
			&:last-child {
				border-bottom: none;
			}
		}
		.last_orders {
			background-color: #fff;
			width: 460px;
			box-shadow: 0 0 10px 5px #EBEBEB;
			border-radius: 3px;
			display: inline-block;
			padding: 0 40px;
			.title {
				margin-top: 30px;
				font-size: 24px;
				margin-bottom: 30px;
			}
			.items {
				.item {
					margin: 0;
					padding: 0;
					padding-bottom: 8px;
					padding-top: 8px;
					border-bottom: 1px solid #EBEBEB ;

					&:last-child {
						margin-bottom: 0px;
						border-bottom: none;
					}

					.first_col {
						margin-right: 21px;
						width: 100px;
						height: 100px;
						background-color: gray;
					}
					.second_col {
						width: 200px;
						height: 100px;
						overflow: hidden;
						display: flex;
						flex-wrap: wrap;
						>*{
							margin: 0;
						}
						.title{
							width: 100%;
							font-size: 20px;
							color: black;

						}
						.datetime{
							width: 100%;
							font-size: 16px;
							color: #9B9B9B;

						}
						.customer{
							width: 100%;
							font-size: 16px;
							color: #9B9B9B;

						}
					}
					.third_col {
						text-align: right;
						width: 100px;
						height: 100px;
						overflow: hidden;
						display: flex;
						flex-direction: column;
						justify-content: flex-end;
						.total{
							font-size: 14px;
						}
						.number{
							font-family: HelveticaNeue-Bold;
							font-size: 20x;
						}
					}
				}
			}
		}

	}
</style>