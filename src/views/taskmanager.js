import TaskOpen from "@/components/TaskOpenView.vue"

export default {
    components: {
        TaskOpen
    },
    data() {
        return {
            viewTask: true,
            tasks: {
                uncomplete: [{
                        name: "test task",
                        description: "lorem ipsum dolor sit amet",
                        end: "2022-07-10"
                    },
                    {
                        name: "Hello my boy <3",
                        description: "You're my sinnabon (*_*)",
                        end: "2022-07-13"
                    }
                ],
                complete: [{
                    name: "test task",
                    end: "2022-07-13"
                }]
            }
        }
    },
    methods: {
        openTask(task, id) {
            // alert(id)
            this.$refs.taskOpen.openTask(task, id)
        }, newTask() {
            this.$refs.taskOpen.newTask()
        }
    }
}