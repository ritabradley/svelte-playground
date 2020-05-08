<script>
	export let name;
	export let age;

	let increaseAge = () => {
		age++
	}
	let decreaseAge = () => {
		age--
	}
</script>

<style>
	h1 {
		color: #000;
	}
	span {
		color: crimson
	}

	.btn {
		border-radius: 4px;
		color: #fff;
	}

	.btn-increase {
		background-color: #009b00;
		border-color: #008000;
		transition: background-color 2s;
	}
	.btn-decrease {
		background-color: #ff1645;
		border-color: #dc143c;
		transition: background-color 2s;
	}
	.btn-increase:hover {
		background-color: #008000
	}
	.btn-decrease:hover {
		background-color: #dc143c;
	}
</style>

<h1>Hello, my name is <span>{name}</span> and I am <span>{age}</span> years old!</h1>
<button class="btn btn-increase" on:click={increaseAge}>Age Me</button>
<button class="btn btn-decrease" on:click={decreaseAge}>Make Me Younger</button>
