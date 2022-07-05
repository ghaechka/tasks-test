<template>
  <div class="taskopen">
    <template v-if="view && editable">
      <div class="edit-text">
        <input
          type="text"
          v-model="data.name"
          placeholder="Name of task"
          class="title"
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Text of task"
        v-model="data.description"
      >
      </textarea>
      <div class="date">
        <input type="date" name="end" v-model="data.end" />
      </div>
      <div v-if="data.id === ''" class="btn-place">
        <button
          class="waves-effect waves-purple btn purple lighten-2 w100"
          @click="create"
        >
          Create
        </button>
      </div>
      <div v-else class="btn-place">
        <button
          class="waves-effect waves-grey btn grey lighten-2 w100 edit"
          @click="cancel"
        >
          cancel
        </button>
        <button class="waves-effect waves-green btn green w100 complete">
          confirm
        </button>
      </div>
    </template>
    <template v-else-if="!editable && view">
      <h3 class="title">{{ data.name }}</h3>
      <div class="description">{{ data.description }}</div>
      <div class="date">
        <div>
          {{
            `${data.end.split("-")[2]}.${data.end.split("-")[1]}.${
              data.end.split("-")[0]
            }  `
          }}
        </div>
      </div>
      <div class="btn-place">
        <button
          class="waves-effect waves-grey btn grey lighten-2 w100 edit"
          @click="edit"
        >
          change
        </button>
        <button class="waves-effect waves-green btn green w100 complete">
          complete
        </button>
      </div>
    </template>
  </div>
</template>
<script src="./taskopen.js"></script>
<style lang="less">
.taskopen {
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  min-height: calc(100vh - 120px);
  padding: 8px 24px;
  .description,
  textarea {
    width: 100%;
    height: 300px;
    margin-top: 16px;
    padding: 8px 12px;
    box-sizing: border-box;
    border: 1px solid white;
    color: rgba(0, 0, 0, 0.87);
  }
  textarea {
    resize: none !important;
    border: 1px solid #e1bee7;
    border-radius: 6px;
    transition: all 0.15s ease;
  }

  textarea:focus {
    border-color: #8e24aa;
    outline: none;
  }
  input[type="text"].title {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 1px solid #e1bee7 !important;
    position: absolute;
    font-size: 30px !important;
    top: 0;
    left: 0;
    display: inline-block;
    box-sizing: border-box;
  }
  h3.title {
    font-size: 30px !important;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 22.5px;
  }
  input:focus {
    border-color: #8e24aa !important;
    border-width: 2px;
    box-shadow: none !important;
  }
  .date {
    margin-top: 16px;
  }
  input[type="date"],
  .date > div {
    max-width: 116px;
    color: #8e24aa;
    border-color: #e1bee7 !important;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  .date > div {
    padding: 14px 6px;
    font-size: 16px;
    letter-spacing: 1px;
  }
  input[type="date"]:not(:last-child) {
    margin-right: 20px;
  }
}
.edit-text {
  position: relative;
  width: 100%;
  height: 50px;
  h2 {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    font-size: 30px;
    padding-top: 6px;
  }
}
.btn-place {
  position: absolute;
  display: flex;
  justify-content: end;
  width: calc(100% - 48px);
  bottom: 0;
  margin-bottom: 20px;
}
.btn {
  width: 100%;
}
.btn:not(:last-child) {
  margin-right: 8px;
}
.btn.edit {
  width: auto;
  color: #000;
}
.btn.complete {
  color: #fff;
  width: auto;
}
</style>
