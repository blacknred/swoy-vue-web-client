export default {
  path: '/:teamId/admin',
  name: 'Admin',
  component: () => import('@views/Administration.vue'),
  children: []
};
