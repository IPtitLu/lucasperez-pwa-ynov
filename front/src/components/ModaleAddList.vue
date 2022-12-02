<template>
    <div class="modale-add-list">
        <div class="modale-add-list-container">
            <div class="modale-add-list-header">
                <h2>Ajouter une liste</h2>
                <q-icon name="close" @click="closemodale" :class="'modale-add-list-close'"/>
            </div>
            <div class="modale-add-list-body">
                <div class="modale-add-list-body-input">
                    <q-input v-model="listName" label="Nom de la liste" />
                </div>
                <div class="modale-add-list-body-button">
                    <q-btn label="Ajouter" @click="addList" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { postList } from '../services/lists'
const emits = defineEmits(['close'])
const listName = ref('')
const closemodale = () => {
  emits('close')
}
const addList = () => {
  console.log(listName.value)
  postList({
    title: listName.value
  })
  emits('close')
  window.location.reload()
}
</script>

<style lang="scss" scoped>
    .modale-add-list {
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
        .modale-add-list-container {
            width: 90%;
            max-width: 500px;
            background-color: #fff;
            border-radius: 10px;
            padding: 25px;
            .modale-add-list-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                }
            }
            .modale-add-list-close {
                font-size: 1.5rem;
                cursor: pointer;
            }
            .modale-add-list-body {
                margin-top: 25px;
                .modale-add-list-body-input {
                    margin-bottom: 25px;
                }
                .modale-add-list-body-button {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
            }
        }
    }
</style>
