<template>
    <div class="modale-add-task">
        <div class="modale-add-task-container">
            <div class="modale-add-task-header">
                <h2>Ajouter une tâche</h2>
                <q-icon name="close" @click="closemodale" :class="'modale-add-task-close'"/>
            </div>
            <div class="modale-add-task-body">
                <div class="modale-add-task-body-input">
                    <q-input v-model="taskName" label="Nom de la tâche" />
                </div>
                <div class="modale-add-task-body-button">
                    <q-btn label="Ajouter" @click="addTask" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { postTask } from '../services/tasks'

const props = defineProps({
  listId: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['close'])
const taskName = ref('')
const closemodale = () => {
  emits('close')
}
const addTask = () => {
  console.log('taskname value : ', taskName.value)
  console.log('List id value : ', props.listId)
  postTask({
    title: taskName.value,
    list: props.listId
  })

  closemodale()
  window.location.reload()
}
</script>

<style lang="scss" scoped>
    .modale-add-task {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        .modale-add-task-container {
            width: 90%;
            max-width: 500px;
            background-color: #fff;
            border-radius: 10px;
            padding: 25px;
            .modale-add-task-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                }
            }
            .modale-add-task-close {
                font-size: 1.5rem;
                cursor: pointer;
            }
            .modale-add-task-body {
                margin-top: 25px;
                .modale-add-task-body-input {
                    margin-bottom: 25px;
                }
                .modale-add-task-body-button {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
            }
        }
    }
</style>
