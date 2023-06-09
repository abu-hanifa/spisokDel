const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.print(i));
        }
    },
  
    add: function(text) {
        this.items.unshift({
            text: text,
            completed: false,

        })
    },
  
    remove: function(index) {
        this.items.splice(index, 1)
    },
  
    print: function(index) {
        if (this.items[index].completed === false) {
            console.log(`[ ] ${this.items[index].text}`);
        } else {
            console.log(`[x] ${this.items[index].text}`);
        }
       
    },
  
    complete: function(index) {
        todoList.items[index].completed = true
    },
  };
  todoList.complete(1)
  todoList.printAll()
 