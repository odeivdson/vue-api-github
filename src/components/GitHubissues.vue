<template>
    <b-container  fluid>
        <h1>Vue.js + API Github</h1>
        <p class="lead">
            Listagem de issues de um repositório do Github via Vue.js.
        </p>

        <div v-if="response.status === 'error'" class="alert alert-danger">
          {{ response.message }}
        </div>

        <b-row class="justify-content-md-center">
            <b-col col xs="12" sm="6" md="4" lg="4" xl="4">
                <div class="form-group">
                    <input v-model="username"
                          type="text"
                          class="form-control"
                          placeholder="github username">
                </div>
            </b-col>

            <b-col col xs="12" sm="6" md="4" lg="4" xl="4">
                <div class="form-group">
                    <input v-model="repository"
                          type="text"
                          class="form-control"
                          placeholder="github repositório">
                </div>
            </b-col>

            <b-col col xs="12" sm="12" md="4" lg="4" xl="4">
                <div class="form-group">
                    <button  @click.prevent.stop = "getIssues()"
                      class="btn btn-success">PESQUISAR
                    </button>

                    <button @click.prevent.stop = "reset()"
                      class="btn btn-danger">LIMPAR
                    </button>
                </div>
            </b-col>
        </b-row>

        <br><hr><br>

        <table class="table table-sm table-bordered">
            <thead>
            <tr>
                <th width="100">Número</th>
                <th>Título</th>
            </tr>
            </thead>

            <tbody>
              <tr v-if="loader.getIssues">
                <td class="text-center" colspan="2">
                  <img src="/static/loading.svg" width="30px" alt="">
                </td>
              </tr>
              <template v-if="showIssues">
                <tr
                    v-for="issue in issues"
                    :key="issue.number">
                  <td>

                    <router-link 
                      :to="{ 
                          name: 'GitHubIssue',
                          params: { 
                            name: username,
                            repo: repository,
                            issue: issue.number
                          }
                      }"
                    >
                      {{ issue.number }}
                    </router-link>

                    </td>
                  <td>{{ issue.title }}</td>
                </tr>
              </template>

            <tr>
                <td v-if="noIssues"
                    class="text-center"
                    colspan="2">Nenhuma issue encontrada!</td>
            </tr>
            </tbody>
        </table>
    </b-container>
</template>

<script>

import axios from 'axios';

export default {
  name: 'GitHubIssues',

  created() {
    this.getLocalData();
  },

  data() {
    return {
      username: '',
      repository: '',
      issues: [],

      response: {
        status: '',
        message: '',
      },

      loader: {
        getIssues: false,
        getIssue: false,
      },
    };
  },

  computed: {
    showIssues() {
      return !!this.issues.length && !this.loader.getIssues;
    },

    noIssues() {
      return !this.issues.length && !this.loader.getIssues;
    },
  },

  methods: {
    reset() {
      this.username = '';
      this.repository = '';
      localStorage.removeItem('gitHubIssues');
      this.issues = [];
    },

    resetResponse() {
      this.response.status = '';
      this.response.message = '';
    },

    getIssues() {
      this.resetResponse();
      this.response.status = '';
      this.response.message = '';
      this.issues = [];

      if (this.username && this.repository) {
        localStorage.setItem('gitHubIssues', JSON.stringify({ username: this.username, repository: this.repository }));
        this.loader.getIssues = true;
        const url = `https://api.github.com/repos/${this.username}/${this.repository}/issues`;

        axios.get(url).then((response) => {
          this.issues = response.data;
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error.response.data);
          this.response.status = 'error';
          this.response.message = 'Usuário ou repositório não encontrado ;(';
        }).finally(() => {
          this.loader.getIssues = false;
        });
      }
    },

    getLocalData() {
      const localData = JSON.parse(localStorage.getItem('gitHubIssues'));

      if (localData && localData.username && localData.repository) {
        this.username = localData.username;
        this.repository = localData.repository;
        this.getIssues();
      }
    },

  },
};
</script>

<style>

.table {
  text-align-last: left;
}
</style>