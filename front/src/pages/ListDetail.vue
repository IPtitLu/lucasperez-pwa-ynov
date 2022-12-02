<template>
  <div class="q-pa-xl list-detail">
    <nav></nav>
    <div class='task-list'>
        <h3 class="detail-list-title">Tasks - {{ tasksArray.length }}</h3>
        <ul>
            <div  v-for="(task) in tasksArray" :key="task.id">
                <li v-if="task.done != true">
                    <input type="checkbox" :value="task" :id="task.id"  v-model="checked">
                    <label :for="task.id">{{ task.title }}</label>
                </li>
            </div>
        </ul>
    </div>
    <div class='task-completed-list'>
        <h3 class="detail-list-title">Tasks Completed - {{ tasksArray.length }}</h3>
        <ul>
            <div  v-for="(task) in tasksArray" :key="task.id">
                <li v-if="task.done != false">
                    <input :id="task.id"  type="checkbox" v-model="checked">
                    <label :for="task.id">{{ task.title }}</label>
                </li>
            </div>
        </ul>
    </div>
  </div>
</template>

<script setup>
// Syntax vue3 Composition API
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getAllTasksByListId } from 'services/tasks'
import { getList } from 'services/lists'

const tasksArray = ref([])
const list = ref([])

const route = useRoute()
const id = route.params.id;

(async () => {
  const { data } = await getAllTasksByListId(id)
  tasksArray.value = data
  console.log('tasks array : ', tasksArray)
})();

(async () => {
  const { data } = await getList(id)
  list.value = data
  console.log(list)
})()

</script>
