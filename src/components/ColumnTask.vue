<template>
  <div
      class="task"      
      draggable
      @dragstart="pickupTask($event, taskIndex, columnIndex)"
      @click="goToTask(task)"
      @dragover.prevent
      @dragenter.prevent
      @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)">
      <span class="w-full flex-np-\ font-bold">
         {{ task.name }}
      </span>
      <span v-if="task.description" class="w-full flex-np-shrink mt-1 text-sm">
         {{ task.description }}
      </span>
   </div>
</template>

<script>
import MoveTaskAndColumnMixin from '../mixins/MoveTaskAndColumnMixin'

export default {
   mixins: [MoveTaskAndColumnMixin],
   props: {
      task: {
         task: Object,
         required: true
      },
      taskIndex: {
         type: Number,
         required: true
      }
   },
   methods: {
      goToTask (task) {
         this.$router.push({ name: 'task', params: { id: task.id } })
      },
      pickupTask (e, taskIndex, columnIndex) {
         e.dataTransfer.effectAllowed = 'move'
         e.dataTransfer.dropEffect = 'move'

         e.dataTransfer.setData('task-index', taskIndex)
         e.dataTransfer.setData('from-column-index', columnIndex)
         e.dataTransfer.setData('type', 'task')
      },      
   }
}
</script>

<style>

</style>