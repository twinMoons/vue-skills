<template>
	<div class="basebuttoncancle">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'BaseButtonCancle'
}
</script>
<style scoped>
	.basebuttoncancle { font-size: 42px; font-weight: bold; color: #828282; flex: 1; text-align: center; border-right: 1px solid #dfe6ed; background: #dfe6ed;}
</style>
