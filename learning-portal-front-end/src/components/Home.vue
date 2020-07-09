<template>
  <div>
    <div>
      <b-card-group deck>
        <div v-for="item in courses" :key="item.id">
          <hr />
          <router-link :to="{path: '/test/' + item.id}">
          <b-card
            border-variant="primary"
            :header= item.nameCourse
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
          >
            <b-card-text class="post-meta">
                Posted by
            <router-link :to="{path: '/about'}">{{ item.createBy }}</router-link>
            on {{ item.createDate }}.
            </b-card-text>
          </b-card>
          </router-link>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {         
            return {
                courses: null,
                test: 'abc'
            }
        },
        mounted() {
            axios.get('http://localhost:8082/cli/courses/get_all').then((response) => {
                this.courses = response.data;
                console.log(this.courses);
            })
        }
    }
</script>