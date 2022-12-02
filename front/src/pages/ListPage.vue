<template>
    <div class="screen">
        <div class="container details">
            <div class="header">
                <div class="header-left">
                    <div class="header-icon-container">
                        <router-link to="/">
                            <q-icon class="header-icon" name="chevron_left" />
                        </router-link>
                    </div>
                    <h1 class="header-title">
                        {{ listName }}
                    </h1>
                </div>
                <div class="header-right">
                    <q-icon :class="'header-icon'" name="more_horiz" />
                </div>
            </div>
            <div class="tasks">
                <h3>Tasks - {{listTaskUncompleted.length}} </h3>
                <Task class="task" v-for="task of listTaskUncompleted" :key="task._id" :task="task" />
            </div>
            <div class="tasks">
                <h3>Tasks Completed - {{listTaskCompleted.length}}</h3>
                <Task class="task" v-for="task of listTaskCompleted" :key="task._id" :task="task" />
            </div>
            <div class="add-task">
                <div @click="openmodale" class="add-task-container">
                    <q-icon class="add-task-icon" name="add" />
                </div>
            </div>
            <ModaleAddTask @close="closemodale" v-if="ismodaleOpen" :listId="route.params.id" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getList } from '../services/lists'
import { getAllTasksUncompletedByListId, getAllTasksCompletedByListId } from '../services/tasks'
import Task from '../components/TaskLine.vue'
import ModaleAddTask from '../components/ModaleAddTask.vue'

const route = useRoute()
const listId = ref(route.params.id)
const listName = ref('Loading...')
const listTaskUncompleted = ref([])
const listTaskCompleted = ref([])
const ismodaleOpen = ref(false)
const taskUncompletedArray = ref([])
const taskCompletedArray = ref([]);

(async () => {
  const resList = await getList(listId.value)
  listName.value = resList.data.title
  const resTaskUncompleted = await getAllTasksUncompletedByListId(listId.value)
  const resTaskCompleted = await getAllTasksCompletedByListId(listId.value)
  listTaskUncompleted.value = resTaskUncompleted.data
  listTaskCompleted.value = resTaskCompleted.data
})()

console.log('tasksUncompleted : ', taskUncompletedArray)
console.log('tasksCompleted : ', taskCompletedArray)

const closemodale = () => {
  ismodaleOpen.value = false
}
const openmodale = () => {
  ismodaleOpen.value = true
}

</script>

<style lang="scss" scoped>
    .header {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-left {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
            .header-title {
                font-size: 1.5rem;
                font-weight: 700;
            }
            .header-icon-container {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #F2F2F2;
                border-radius: 4px;
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                    text-decoration: none;
                }
            }
        }
        .header-right {
            .header-icon {
                color: #757575;
                font-size: 30px;
            }
        }
    }
    .tasks {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;

        h3 {
            color: #38343A;
            font-weight: bold;
        }
    }
    .task {
        flex: 1;
        padding: 15px;
        background-color: #F2F2F2;
        border-radius: 10px;
    }
    .add-task {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 20px;
        left: 0;
       .add-task-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-color: #F2F2F2;
            border-radius: 50%;
            background: linear-gradient(125.54deg, #613973 -0.39%, #BB46E4 100%);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
       }
        .add-task-icon {
            color: #fff;
            font-size: 30px;
        }
    }
    .details {
        padding-bottom: 100px;
    }
</style>
