<template>
	<li @click="$emit('changeitem')">
		<a 
			href="javascript:void(0)" 
			class="item_category" 
			:class="[{active: active},'cat_'+ clases]"
			>
				<img 
					:src="image" 
					alt="alt"
					>
				{{name}}
			</a>
	</li>
</template>
<script>
	export default {
		props:{
			clases:{
				type: String
			},
			image:{
				type: String
			},
			name:{
				type: String
			},
			active: {
				type: Boolean,
				default: false
			}
		},
        name: "ItemCategory",
    }
</script>
<style scoped>
	
</style>