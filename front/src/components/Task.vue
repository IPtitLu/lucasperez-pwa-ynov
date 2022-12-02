<template>
    <div class="task" :class="{ 'checked': checked }">
        <div class="task-container">
            <div class="task-check">
                <input v-model="checked" type="checkbox" />
            </div>
            <div class="task-content">
                <label @click="toggle">{{ task.title }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { putTask } from '../services/tasks'
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
const checked = ref(props.task.completed)
const toggle = () => {
  checked.value = !checked.value
}
watch(checked, (val) => {
  const task = props.task
  task.completed = val
  putTask(task)
})
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
