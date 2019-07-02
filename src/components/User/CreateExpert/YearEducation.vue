<template>
<div class="col-xs-12 col-md-4 col-lg-3">
  <p>Годы обучения</p>
  <select id="startEducation" name="stag" class="select_main select_stag">
    <option value='2005'>2005</option>
    <option value='2006'>2006</option>
    <option value='2007'>2007</option>
    <option value='2008'>2008</option>
    <option value='2009'>2009</option>
    <option value='2010'>2010</option>
    <option value='2011'>2011</option>
  </select>
  <span class="txt">-</span>
  <select id="endEducation" name="stag" class="select_main select_stag">
    <option value='2005'>2005</option>
    <option value='2006'>2006</option>
    <option value='2007'>2007</option>
    <option value='2008'>2008</option>
    <option value='2009'>2009</option>
    <option value='2010'>2010</option>
    <option value='2011'>2011</option>
  </select>
</div>
</template>

<script>
    /* eslint-disable */
    let item = 0;
	export default {
    name: "YearEducation",
    components: {
    },
    props: {},
    data() {
			return {
      }
    },
    created() {
    },
    mounted() {
      var vm = this;
       $('#startEducation').styler({
        onSelectClosed: function() {
            vm.$emit('changeStartYear', $(this).find(":selected").val())
            }
       });
        $('#endEducation').styler({
        onSelectClosed: function() {
            vm.$emit('changeEndYear', $(this).find(":selected").val())
            }
       });
       setTimeout(function() {  
      $('select').trigger('refresh');  
    }, 1)
     },
		methods: {},
		computed: {
    },
	}
</script>

<style scoped>

</style>