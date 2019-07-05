import { LinkButton } from '@/shared';

export default [
  'LinkButton',
  () => ({
    components: { LinkButton },
    props: {
      to: '/test',
    },
    template: "<LinkButton :to='to'>Link Button</LinkButton>",
  }),
];