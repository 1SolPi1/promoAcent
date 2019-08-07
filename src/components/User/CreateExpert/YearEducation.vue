<template>
<div class="col-xs-12 col-md-4 col-lg-3">
  <p>Годы обучения</p>
  <select id="startEducation" name="stag" class="select_main select_stag">
    <option 
        v-for="item in count"
        :key="item"
        :value='item' 
        :selected="selectstart == item"
      >{{item}}</option>
  </select>
  <span class="txt">-</span>
  <select id="endEducation" name="stag" class="select_main select_stag">
   <option 
        v-for="item in count"
        :key="item"
        :value='item' 
        :selected="selectend == item"
      >{{item}}</option>
  </select>
</div>
</template>

<script>
    /* eslint-disable */
	export default {
    name: "YearEducation",
    components: {
    },
    props: {
      selectstart:{require: true},
      selectend:{require: true}
    },
    data() {
			return {
        count:[
         1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,202,2021,2022,2023,2024,2025,2026
        ]
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