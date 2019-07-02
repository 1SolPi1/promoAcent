<template>
<div class="col-xs-12 col-md-3 mar-left">
  <p>Стаж</p>
  <span class="txt ml-0 mr">с</span>
    <select id="experience" name="stag" class="select_main select_stag">
      <option value='2005' :selected="experience === 2005">2005</option>
      <option value='2006' :selected="experience === 2006">2006</option>
      <option value='2007' :selected="experience === 2007">2007</option>
      <option value='2008' :selected="experience === 2008">2008</option>
      <option value='2009' :selected="experience === 2009">2009</option>
      <option value='2010' :selected="experience === 2010">2010</option>
      <option value='2011' :selected="experience === 2011">2011</option>
    </select>
    <span class="txt">года</span>
</div>
</template>

<script>
    /* eslint-disable */
    let item = 0;
	export default {
    name: "Experience",
    components: {
    },
    props: {
      experience: Number
    },
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
      var vm = this;
       $('#experience').styler({
        onSelectClosed: function() {
            vm.$emit('changevalue',$(this).find(":selected").val())
            }
       });
       setTimeout(function() {  
      $('select').trigger('refresh');  
    }, 1)
     },
		methods: {
		},
		computed: {
    },
	}
</script>

<style scoped>

</style>