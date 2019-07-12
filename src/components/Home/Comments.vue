<template>
  <li>
    <div class="item_client">
      <div class="row">
        <div class="col-sm-6">
          <div class="client_info">
            <router-link to="/person/1" class="link_client">{{name}}</router-link>
            <div class="text_client">
              <p>{{desc}}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="image_client">
            <img src="img/client1.jpg" alt="alt">
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
        name: "Comments",
        components: {},
        props: {
            name:{
                type: String,
                default: 'name'
            },
            desc:{
                type: String,
                default: 'desc'
            },
            img:{}
        },
        data() {
            return {
                }
        },
        created() {
        },
        mounted() {
        },
        methods: {},
        computed: {},
    }
</script>

<style scoped>
    
</style>