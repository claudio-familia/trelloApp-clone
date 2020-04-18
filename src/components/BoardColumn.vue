<template>  
   <div class="column"
         draggable
         @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
         @dragover.prevent
         @dragenter.prevent
         @dragstart.self="pickupColumn($event, columnIndex)"
   >
      <div class="flex items-center mb-2 font-bold">
         {{ column.name }}
      </div>
      <div class="list-reset">
         <ColumnTask v-for="(task, taskIndex) of column.tasks"
                     :key="task.id"
                     :task="task"
                     :task-index="taskIndex"
                     :column="column"
                     :column-index="columnIndex"
                     :board="board" />

         <input type="text"
                  placeholder="+ Type the new task and press enter"
                  class="bg-transparent w-full block p-2 border-none-chrome"
                  @keyup.enter="createTask($event, column.tasks)"
         >
      </div>
   </div>
</template>

<script>
import ColumnTask from './ColumnTask'
import MoveTaskAndColumnMixin from '../mixins/MoveTaskAndColumnMixin'

export default {
   components: { ColumnTask },
   mixins: [MoveTaskAndColumnMixin],
   methods: {
      pickupColumn (e, columnIndex) {
         e.dataTransfer.effectAllowed = 'move'
         e.dataTransfer.dropEffect = 'move'

         e.dataTransfer.setData('from-column-index', columnIndex)
         e.dataTransfer.setData('type', 'column')
      },        
      createTask (e, tasks) {
         this.$store.commit('CREATE_TASK', {
         tasks,
         name: e.target.value
         })
         e.target.value = ''
      }  
   }
}
</script>

<style>
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>