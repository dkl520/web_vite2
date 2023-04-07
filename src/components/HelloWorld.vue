<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="states.count++">count is: {{ states.count }}</button>

  <div>
    <form @submit.prevent="searchData">
      <input v-model="searchTerm" type="text" placeholder="Enter search term">
      <button type="submit" @click="searchData">Search</button>
    </form>
    <!-- <ul>
      <li v-for="result in searchResults" :key="result.id">{{ result.name }}</li>
    </ul> -->

    <el-table :data="table.data" border style="width: 80%">
      <el-table-column prop="employee_id" label="employee_id" />
      <el-table-column prop="first_name" label="firstName" />
      <el-table-column prop="email" label="email" />
      <el-table-column prop="phone_number" label="phone_number" />
      <el-table-column prop="hire_date" label="hire_date" />
      <el-table-column prop="last_name" label="lastName" />
      <el-table-column prop="salary" label="salary" />
      <el-table-column prop="commission_pct" label="commission_pct" />
    </el-table>
    <el-pagination @size-change="handleSizeChange"  v-model:current-page="currentPage2"
      v-model:page-size="pageSize2"  @current-change="handleCurrentChange"   :page-sizes="[100, 200, 300, 400]" :pager-count="11" layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>

  <!-- <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from "axios"
// axios.defaults.baseURL = '/api'
// const baseurl =  import.meta.env.VITE_BASIC_API;
defineProps({
  msg: String
})
const cont = ref(0);
const currentPage2 = ref(1)
const pageSize2 = ref(100)
console.log(cont);
const states = reactive({ count: 0 });

const table = reactive({
  searchTerm:"",
  data: [],
  bigData: []
});
function handleSizeChange(number) {
  console.log(`${val} items per page`)
}
function handleCurrentChange(v){
 table.data=table.bigData.slice(v*10,v*10+10);
}
function getData() {
   const service= axios.create({
      // baseURL:baseurl,
    //   headers: {
    //     'Access-Control-Allow-Origin"': '*',
    //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    //     // 'Access-Control-Allow-Credentials': "Authorization",
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Headers': 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'
    // }
    })
    service.get('/api/data')
    .then(response => {
      table.data = response.data.slice(0, 10);
      table.bigData = response.data;
    })
    .catch(error => {
      console.log(error);
    })
  // axios({
  //   baseURL:import.meta.env.VITE_BASIC_API,
  //   url: '/api/data',
  //   method: "get"
  // })
  //   .then(response => {
  //     table.data = response.data.slice(0, 10);
  //     table.bigData = response.data;
  //     // tableData= state.data;
  //     // debugger
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
}
function sizeChange(v) {
}

async function searchData() {

  await getData()
  // tableData= state.data; 
  // debugger       

}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
