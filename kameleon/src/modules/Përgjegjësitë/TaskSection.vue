<template>
    <div class="tasks-container">
      <div class="tasks-header">
        <button class="sort-button">Sort</button>
        <button class="filter-button">All Tasks</button>
        <input type="text" class="search-input" placeholder="Search Projects" v-model="searchQuery" />
      </div>
      <table class="tasks-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Assigned</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in filteredTasks" :key="task.id">
            <td><input type="checkbox" /></td>
            <td><img :src="task.icon" class="task-icon" /> {{ task.name }}</td>
            <td><span :class="task.status">{{ task.status }}</span></td>
            <td>
              <div class="assigned">
                <img v-for="(user, index) in task.assigned" :key="index" :src="user.avatar" class="avatar" />
                <span v-if="task.assigned.length > 2">+{{ task.assigned.length - 2 }}</span>
              </div>
            </td>
            <td><span :class="task.priority">{{ task.priority }}</span></td>
            <td>{{ task.dueDate }}</td>
            <td>
              <button class="edit-button">✏️</button>
              <button class="delete-button">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        tasks: [
          {
            id: 1,
            name: 'The Dashtail Template',
            status: 'Inprogress',
            assigned: [
              { avatar: 'avatar1.png' },
              { avatar: 'avatar2.png' },
              // Add more avatars if needed
            ],
            priority: 'High',
            dueDate: '31 Jan, 2024',
            icon: 'icon1.png'
          },
          // Add more tasks as needed
        ]
      };
    },
    computed: {
      filteredTasks() {
        return this.tasks.filter(task => task.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
    }
  };
  </script>
  
  <style scoped>
  .tasks-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .tasks-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .sort-button, .filter-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
  }
  
  .search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .tasks-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .tasks-table th, .tasks-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .tasks-table th {
    background-color: #f9f9f9;
  }
  
  .task-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  
  .assigned {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 5px;
  }
  
  .edit-button, .delete-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .inprogress {
    color: #6c63ff;
    background-color: #e6e1ff;
    padding: 5px 10px;
    border-radius: 15px;
  }
  
  .completed {
    color: #28a745;
    background-color: #dff0d8;
    padding: 5px 10px;
    border-radius: 15px;
  }
  
  .high {
    color: #fff;
    background-color: #ff4d4f;
    padding: 5px 10px;
    border-radius: 15px;
  }
  
  .medium {
    color: #fff;
    background-color: #ff9800;
    padding: 5px 10px;
    border-radius: 15px;
  }
  
  .low {
    color: #fff;
    background-color: #1890ff;
    padding: 5px 10px;
    border-radius: 15px;
  }
  </style>
  