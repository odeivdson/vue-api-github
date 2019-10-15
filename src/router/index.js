import Vue from 'vue';
import Router from 'vue-router';
import GitHubIssues from '@/components/GitHubissues';
import GitHubIssue from '@/components/GitHubissue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GitHubIssues',
      component: GitHubIssues,
    },

    {
      path: '/:name/:repo/:issue',
      name: 'GitHubIssue',
      component: GitHubIssue,
    },
  ],
});
