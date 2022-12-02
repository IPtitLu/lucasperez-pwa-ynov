<template>
  <div class="screen">
    <div class="container details">
      <div class="header">
        <div class="header-title">
          <h1>Dashboard</h1>
        </div>
        <div class="header-profile">
          <q-icon name="person" />
        </div>
      </div>
      <div class="subheader">
        <h2>
          Bonjour,
          <br>
          John Doe ! 👋
        </h2>
      </div>
      <div class="lists">
        <TaskList :list="list" v-for="list of lists" :key="list.id" />
      </div>
    </div>
    <NavBar @open:modale:list:add="openmodale" />
    <ModaleAddList @close="closemodale" v-if="ismodaleOpen" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import TaskList from '../components/TaskList.vue'
import ModaleAddList from '../components/ModaleAddList.vue'
import { getLists } from '../services/lists'

const lists = ref([])
const ismodaleOpen = ref(false);

(async () => {
  const resLists = await getLists()
  lists.value = resLists.data
})()
const openmodale = () => {
  ismodaleOpen.value = true
}
const closemodale = () => {
  ismodaleOpen.value = false
}

</script>

<style lang="scss" scoped>
  .header {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-title {
      h1 {
        font-size: 24px;
        font-weight: 400;
      }
    }
    .header-profile {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #D9D9D9;
      color: #828282;
      font-size: 30px;
    }
  }
  .subheader {
    margin-top: 50px;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
    }
  }
  .lists {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 35px;
  }
  .details {
    padding-bottom: 100px;
  }
</style>
