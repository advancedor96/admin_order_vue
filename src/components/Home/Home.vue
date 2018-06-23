<template>
	<div class="container">
		<div class="row info">
			<div class="title">Overview</div>
			<div class="right">
				<div class="date">{{$moment().subtract(6, 'days').format("YYYY/MM/DD")}}</div>
				<div class="dateBetweenIcon">›</div>
				<div class="date">{{$moment().format("YYYY/MM/DD")}}</div>

				<div class="dropdown unit">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
 aria-expanded="false">
						{{filterDate}}
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a v-for="item in dateOptions" :key="item" class="dropdown-item" href="#" @click="selectFilter(item)">{{item}}
						</a>

					</div>
				</div>


			</div>
		</div>
		<div class="row cards">
			<div class="card shadow">
				<div class="card-body">
					<h3 class="title">
						<i class="fas fa-hand-holding-usd"></i>TOTAL REVENUE</h3>
					<h2 class="number" :style="{color: '#7ED321'}">{{this.myR | currency}}</h2>
				</div>
			</div>
			<div class="card shadow">
				<div class="card-body">
					<h3 class="title">
						<i class="fas fa-th-large"></i>TOTAL COST</h3>
					<h2 class="number" :style="{color: '#D0021B'}">{{this.myC | currency}}</h2>
				</div>
			</div>

			<div class="card shadow">
				<div class="card-body">
					<h3 class="title">
						<i class="fas fa-money-bill"></i>NET INCOME</h3>
					<h2 class="number" :style="{color: '#4A90E2'}">{{ (this.myR - this.myC) | currency }}</h2>
				</div>
			</div>

		</div>
		<div class="row activity">
			<div class="line-chart">
				<div class="sub-block">
					<div class="title">Activity</div>
					<canvas id="mycanvas"></canvas>
				</div>
			</div>
		</div>

		<div class="row third_block_row">
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
							<div class="rate" :style="{color: '#7ED321'}">
								<i class="fas fa-arrow-up"></i>

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
							<div class="rate" :style="{color: '#7ED321'}">
								<i class="fas fa-arrow-up"></i>

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
							<div class="rate" :style="{color: '#D0021B'}">
								<i class="fas fa-arrow-down"></i>

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
							<div class="rate" :style="{color: '#D0021B'}">
								<i class="fas fa-arrow-down"></i>20%</div>
						</div>
					</div>

				</div>
			</div>
			<div class="last_orders">
				<div class="title">Lasted Orders</div>
				<div class="items">
					<div class="item">
						<div class="first_col">
							<img src="http://via.placeholder.com/100x100" alt="">
						</div>
						<div class="second_col">
							<div class="title">{{$faker().commerce.productName()}}</div>
							<div class="datetime">
								<i class="fas fa-clock"></i>

								{{$moment().format("YYYY/MM/DD HH:mm")}}</div>
							<div class="customer">
								<i class="fas fa-male"></i>
								{{$faker().name.findName()}}</div>
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
							<div class="title">{{$faker().commerce.productName()}}</div>
							<div class="datetime">
								<i class="fas fa-clock"></i>

								{{$moment().format("YYYY/MM/DD HH:mm")}}</div>
							<div class="customer">
								<i class="fas fa-male"></i>
								{{$faker().name.findName()}}</div>
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
							<div class="title">{{$faker().commerce.productName()}}</div>
							<div class="datetime">
								<i class="fas fa-clock"></i>

								{{$moment().format("YYYY/MM/DD HH:mm")}}</div>
							<div class="customer">
								<i class="fas fa-male"></i>
								{{$faker().name.findName()}}</div>
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
</template>

<script>
	// import LineChart from './LineChart.vue';

	import Chart from 'chart.js';
	import Vue from "vue"
	// 加這段filter可以讓金錢自動加$字號以及逗號
	Vue.filter('currency', function (value) {
		return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	});

	export default {
		// components: {
		// 	// LineChart
		// },
		data() {
			return {
				fakeRevenue: [],
				fakeCost: [],
				fakeIncome: [],
				fakeDate: [],
				totalR: 0,
				totalC: 0,
				totalRWeek: 0,
				totalCWeek: 0,
				dateOptions: ['Weekly', 'Monthly'],
				filterDate: 'Weekly',
			}
		},
		methods: {
			selectFilter: function (newFilter) {
				this.filterDate = newFilter;
				// eslint-disable-next-line
				// console.log('進入selectFilter函數，設為newFilter',newFilter);
				var ctx = document.getElementById("mycanvas");
				// var myChart = 
				new Chart(ctx, {
					type: 'line',
					data: {
						labels: this.myDate,
						datasets: [{
							label: 'Revenue',
							data: newFilter==='Weekly'? this.fakeRevenue.slice(31-7, 31): this.fakeRevenue,
							backgroundColor: [
								'#7ED321'
							],
							borderColor: [
								'#7ED321'
							],
							borderWidth: 2,
							fill: false,
							lineTension: false,
						},{
							label: 'Cost',
							data: newFilter==='Weekly'? this.fakeCost.slice(31-7, 31): this.fakeCost,
							backgroundColor: [
								'#D0021B'
							],
							borderColor: [
								'#D0021B'
							],
							borderWidth: 2,
							fill: false,
							lineTension: false,
						},{
							label: 'Income',
							data: newFilter==='Weekly'? this.fakeIncome.slice(31-7, 31): this.fakeIncome,
							backgroundColor: [
								'#4A90E2'
							],
							borderColor: [
								'#4A90E2'
							],
							borderWidth: 2,
							fill: false,
							lineTension: false,
						},
						
						]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}
				});


			}
		},
		computed: {
			myR: function () {
				if (this.filterDate === 'Weekly') {
					return this.totalRWeek;
				} else {
					return this.totalR;
				}
			},
			myC: function () {
				if (this.filterDate === 'Weekly') {
					return this.totalCWeek;
				} else {
					return this.totalC;
				}

			},
			myDate: function () {
				if (this.filterDate === 'Weekly') {
					return this.fakeDate.slice(this.fakeDate.length - 7, this.fakeDate.length);
				} else {
					return this.fakeDate;
				}
			}
		},
		created: function () {
			for (let i = 0; i <= 30; i++) {
				let random1 = Vue._.random(10, 1000);
				let random2 = Vue._.random(10, 500);
				this.totalR += random1;
				this.totalC += random2;

				this.fakeRevenue.push(random1);
				this.fakeCost.push(random2);
				this.fakeIncome.push(random1 - random2);
				this.fakeDate.push(this.$moment().subtract(30 - i, 'days').format("DD MMM"));
				if (30 - i <= 6) {
					this.totalRWeek += random1;
					this.totalCWeek += random2;
				}
			}
			// eslint-disable-next-line
			// console.log('revenue:', this.fakeRevenue);
			// eslint-disable-next-line
			// console.log('fakeCost:', this.fakeCost);
			// eslint-disable-next-line
			// console.log('fakeIncome:', this.fakeIncome);
		},
		mounted(){
			this.selectFilter('Weekly');
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
			margin-top: 30px;
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
				margin-bottom: 6px;
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
		.website,
		.last_orders {
			margin-bottom: 8px;
		}
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
					border-bottom: 1px solid #EBEBEB;

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
						align-items: center;
						>* {
							margin: 0;
						}
						i {
							width: 16px;
						}
						.title {
							width: 100%;
							font-size: 20px;
							color: black;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;

						}
						.datetime {
							width: 100%;
							font-size: 16px;
							color: #9B9B9B;

						}
						.customer {
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
						.total {
							font-size: 14px;
						}
						.number {
							font-family: HelveticaNeue-Bold;
							font-size: 20x;
						}
					}
				}
			}
		}

	}

	.line-chart {
		width: 100%;
		.sub-block {
			width: 100%;
			align-items: flex-start;
			overflow: auto;
			.title {
				margin-top: 30px;
				margin-left: 40px;
			}
		}
		#mycanvas {
			width: 100%;
			min-width: 360px;
		}
	}
</style>