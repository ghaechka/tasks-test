export default {
    data() {
        return {
            data: {
                name: "",
                description: "",
                start: "",
                end: "",
                id: "",
            },
            view: false,
            editable: false
        }
    },
    methods: {
        create() {
            alert(typeof(this.data.start))
        },
        openTask(task, id) {
            if (!this.view) {
                this.view = true;
            }
            this.editable = false;
            this.data.name = task.name;
            this.data.id = id;
            this.data.description = task.description;
            this.data.start = task.start;
            this.data.end = task.end;
        },
        completeTask() {
            // this.$emit
        },
        newTask() {
            this.view = true;
            this.editable = true;
            for (let key in this.data) {
                this.data[key] = ""
            }
        },
        edit() {
            this.editable = true;
        },
        cancel() {
            this.editable = false;
        }
    },
}