<template>
    <div class="list">
        <div class="list-container">
            <div class="list-header">
                <h3 :title="list._id">{{ list.title }}</h3>
                <q-icon class="list-icon" name="more_horiz" />
            </div>
            <div v-if="tasks.length" class="list-body">
                <TaskLine v-for="task of tasks" :key="task._id" :task="task" />
            </div>
            <p class="list-empty" v-else>
                Cette liste ne contient aucune tâche.<br>
                Ajoutez-en une depuis la liste.
            </p>
            <div class="list-footer">
                <div class="list-footer-container">
                    <router-link :to="`/list/${list._id}`">
                        Voir la liste complète
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAllTasksByListId } from '../services/tasks'
import TaskLine from './TaskLine.vue'
const props = defineProps({
  list: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Loading...'
    })
  }
})
const tasks = ref([]);
(async () => {
  const resTasks = await getAllTasksByListId(props.list._id)
  tasks.value = resTasks.data
})()
</script>

<style lang="scss" scoped>
    .list {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.14);
        overflow: hidden;
        .list-container {
            .list-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 25px;
                background-color: #F2F2F2;
                h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                }
            }
            .list-body {
                padding: 15px 25px;
            }
            .list-empty {
                padding: 15px 25px;
                color: #BDBDBD;
                text-align: center;
            }
            .list-footer {
                padding-bottom: 0;
                .list-footer-container {
                    width: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    padding: 15px 0;
                    border-top: 1px solid #E5E5E5;
                    a {
                        color: #000;
                        text-decoration: none;
                    }
                }
            }
        }
        .list-icon {
            color: rgba(0, 0, 0, 0.54);
            font-size: 30px;
        }
    }
</style>
