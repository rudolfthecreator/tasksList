<!-- @format -->

<template>
  <div class="home">
    <div class="grid-85 mt-8">
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div><button id="btn" @click="createTask">Создать новую</button></div>
    </div>

    <div class="tasks" :key="task.id" v-for="task in store.state.tasks">
      <div class="grid-88">
        <div>
          <div>
            <strong>Название: </strong>
            <span v-if="!task.edit"> {{ task.title }}</span>
            <input
              v-model="task.title"
              v-else
              type="text"
              placeholder="Введите название задачи"
              class="input"
              :class="{
                emptyform: task.title.length == 0,
              }"
            />
          </div>
          <div class="mt-4">
            <strong>Описание: </strong>
            <span v-if="!task.edit">
              {{ task.body }}
            </span>
            <input
              v-model="task.body"
              v-else
              type="text"
              placeholder="Введите описание задачи"
              class="input"
              :class="{
                emptyform: task.body.length == 0,
              }"
            />
          </div>
        </div>
        <div>
          <button v-if="!task.edit" class="mr-8" @click="editTask(task)">
            <span class="material-icons"> edit </span>
          </button>

          <button
            v-else
            :disabled="task.title.length == 0 || task.body.length == 0"
            @click="saveEdit(task)"
          >
            <span class="material-icons"> done </span>
          </button>
          <button @click="deleteTask(task)">
            <span class="material-icons"> delete </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// Хранилище
const store = useStore();

//Проверяем локальное хранилище браузера, если нет задач(при обновлении страницы)
store.dispatch("checkLocalStorage");

// Создать новую задачу
const createTask = () => {
  store.commit("pushTasks");
};

// Удалить задачу
const deleteTask = (task) => {
  store.dispatch("deleteTask", task);
};

// Редактировать задачу
const editTask = (task) => {
  task.edit = true;
};

// Сохранить форму редактирования
const saveEdit = (task) => {
  store.dispatch("saveTask", task);
};

// Заголовок списка задач
const title = computed(() => {
  if (store.state.tasks.length == 0) return "Список задач пуст.";
  else return "Текущие задачи:";
});
</script>

<style scoped>
* {
  margin: 0;
}
.grid-85 {
  display: grid;
  grid-template-columns: 85% 15%;
  margin-top: 8px;
}
.grid-88 {
  display: grid;
  grid-template-columns: 88% 12%;
}
.emptyform {
  background-color: #ff3c3c15;
}
.tasks {
  padding: 15px;
  border: 2px solid;
  margin-top: 15px;
}
#btn {
  padding: 8px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: #2b4ce1;
  box-shadow: 0 5px 0 #002782;
}

#btn:hover {
  background: #002782;
  box-shadow: none;
  position: relative;
  top: 5px;
}
.mr-8 {
  margin-right: 8px;
}
.mt-4 {
  margin-top: 4px;
}

.input {
  font-family: inherit;
  border: 1.5px solid #bdbdbd;
  border-radius: 0.25rem;
}
</style>
