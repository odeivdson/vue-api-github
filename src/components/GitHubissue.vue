<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col col xs="12" sm="12" md="4" lg="4" xl="4">
        <div v-if="loader.getIssue"><img src="/static/loading.svg" width="30px" alt=""></div>
        <div  v-if="!loader.getIssue && issue.number">

          <h2>{{ issue.title }}</h2> (issue number: {{ issue.number }})
            <div>{{ issue.body }}</div>
            <a href="javascript:history.go(-1)"
              class="btn btn-primary">VOLTAR
            </a>

        </div>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>

import axios from 'axios';

export default {
  name: 'GitHubIssue',

  created() {
    this.getIssue();
  },

  data() {
    return {
      issue: {},
      loader: {
        getIssue: false,
      },
    };
  },

  methods: {

    getIssue() {
      this.loader.getIssue = true;

      const url = `https://api.github.com/repos/${this.$route.params.name}/${this.$route.params.repo}/issues/${this.$route.params.issue}`;

      axios.get(url).then((response) => {
        this.issue = response.data;
      }).finally(() => {
        this.loader.getIssue = false;
      });
    },
  },
};
</script>
