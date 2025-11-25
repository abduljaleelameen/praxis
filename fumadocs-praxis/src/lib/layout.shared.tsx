import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Praxis',
    },
    sidebar: {
      collapsible: true,
      defaultOpenLevel: 0,
    },
  };
}
