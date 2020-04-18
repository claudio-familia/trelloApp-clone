<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn v-for="(column, columnIndex) of board.columns"
                  :key="columnIndex"
                  :column="column"
                  :column-index="columnIndex"
                  :board="board" />
      <div class="column flex">
        <input type="text"
              class="p-2 mr-2 flex-grow bg-transparent border-none-chrome"
              placeholder="Type a new column name"
              @keyup.enter="createColumn($event)">
      </div>
    </div>
    <div class="task-bg"
         v-if="isTaskOpen"
         @click.self="close">
         <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn'

export default {
  components: {
    BoardColumn
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task'
    }
  },
  methods: {
    close () {
      this.$router.push({ name: 'board' })
    },
    createColumn (e) {
      this.$store.commit('CREATE_COLUMN', {
        name: e.target.value
      })
      e.target.value = ''
    },
  }
}
</script>

<style lang="css">
.border-none-chrome:focus {
 outline:0px;
}
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.board {
  @apply p-4 bg-indigo-darkest h-full overflow-auto;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.border-none-chrome:focus {
 outline:0px;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}
</style>
