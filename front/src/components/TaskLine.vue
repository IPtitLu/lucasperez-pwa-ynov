<template>
    <div class="task" :class="{ 'checked': checked }">
        <div class="task-container">
            <div class="task-check">
                <input v-model="checked" type="checkbox" @change="updateTask(task, task._id)"/>
            </div>
            <div class="task-content">
                <label @click="toggle">{{ task.title }}</label>
            </div>
            <button class="tas_delete_btn" @click="deleteTask(task._id)">
                <p>Supprimer</p>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { updateTask, deleteTask } from '../services/tasks'

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({
      done: false
    })
  }
})
// const taskId = ref(props.task.id)

const checked = ref(props.task.done)
const toggle = () => {
  checked.value = !checked.value
}

</script>

<style lang="scss" scoped>
    .task {
        width: 100%;
        .task-container {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px 0;
        }
        .task-check {
            display: flex;
            align-items: center;
            input[type="checkbox"] {
                width: 20px;
                height: 20px;
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 5px;
                outline: none;
                cursor: pointer;
                &:checked {
                    background: linear-gradient(125.54deg, #613973 -0.39%, #BB46E4 100%);
                    border: none;
                }
            }
        }
        .task-content {
            flex: 1;
            label {
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
            }
        }
        .tas_delete_btn {
          padding: 5px 10px;
          background: linear-gradient(125.54deg, #613973 -0.39%, #BB46E4 100%);
          border-radius: 5px;
          color: white;
          border: none;
        }
        &.checked {
            .task-content {
                label {
                    text-decoration: line-through;
                    color: #BDBDBD;
                }
            }
        }
    }
</style>
