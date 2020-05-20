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
	.basebuttoncancle { font-size: 20px; padding: 10px 0; color: #828282; flex: 1; text-align: center; border-right: 1px solid #dfe6ed; background: #dfe6ed;}
</style>
