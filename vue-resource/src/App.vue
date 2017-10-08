<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username: *</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email: *</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <label>Data: *</label>
                <input type="text" class="form-control" v-model="node">
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">
                        {{ u.username }} - {{ u.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        created() {
            // Normal way
            // this.resource = this.$resource('data.json');

            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            };

            // Custom resource
            // this.resource = this.$resource('data.json', {}, customActions);

            // Using dynamic URL
            this.resource = this.$resource('{node}.json', {}, customActions);
        },

        methods: {
            submit() {
                // Send the data to Firebase
                // Uses the promise approach
//                this.$http.post('data.json', this.user)
//                    .then(response => {
//                        console.log(response);
//                    }, error => {
//                        console.log(error);
//                    });
//                this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },
            fetchData() {
//                this.$http.get('data.json')
//                    .then(response => {
//                        return response.json();
//                    })
//                    .then(data => {
//                        const resultArray = [];
//                        for (let key in data) {
//                            resultArray.push(data[key]);
//                        }
//                        this.users = resultArray;
//                    });

                this.resource.getData({node: this.node})
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }

        }
    }
</script>

<style>
</style>
