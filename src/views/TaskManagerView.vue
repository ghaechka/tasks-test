<template>
  <div class="row">
    <div class="col s4">
      <button class="waves-effect waves-purple btn purple lighten-2" @click="newTask">
        + Add new task
      </button>
      <h5 class="purple-text text-darken-2">Uncomplete</h5>
      <div class="tasks" v-if="tasks.uncomplete">
        <template v-for="(task, id) of tasks.uncomplete" v-bind:key="task">
          <div
            @click="openTask(task, id)"
            class="waves-effect waves-purple waves-lighten-2 task purple lighten-5"
          >
            {{ task.name }} <br />
            <small v-if="task.end">{{ task.end }}</small>
            <small v-else>—</small>
          </div>
        </template>
      </div>
      <h5 class="purple-text text-darken-2">Complete</h5>
      <div class="tasks" v-if="tasks.uncomplete">
        <template v-for="task in tasks.complete" v-bind:key="task">
          <div
            @click="openTask(task)"
            class="waves-effect waves-grey waves-lighten-5 task grey lighten-5"
          >
            {{ task.name }} <br />
            <small v-if="task.end">{{ task.end }}</small>
            <small v-else>—</small>
          </div>
        </template>
      </div>
    </div>
    <div class="col s8">
        <task-open
        ref="taskOpen"
        />
    </div>
  </div>
</template>
<script src="./taskmanager.js"></script>
<style lang="less">
button {
  width: 100%;
}
.task {
  padding: 8px 24px;
  width: 100%;
  border-radius: 6px;
}
.task:not(:last-child) {
  margin-bottom: 8px;
}
.tasks {
  width: 100%;
  background-color: #fff;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px #f6f0f7a1;
}
</style>
