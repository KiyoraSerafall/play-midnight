import { css } from 'styled-components';

import createStylesheet from 'utils/createStylesheet';

const styles = () => ({
  myLibrary: css`
    #nav_collections a[data-type='mylibrary'],
    #quickNavContainer gpm-quick-nav-item[view-type='mylibrary'],
    #quick-nav-container gpm-quick-nav-item[view-type='mylibrary'] {
      display: none;
    }
  `,
  recent: css`
    #nav_collections a[data-type='recents'],
    #quickNavContainer gpm-quick-nav-item[view-type='recents'],
    #quick-nav-container gpm-quick-nav-item[view-type='recents'] {
      display: none;
    }
  `,
  topCharts: css`
    #nav_collections a[data-type='wtc'],
    #quickNavContainer gpm-quick-nav-item[view-type='wtc'],
    #quick-nav-container gpm-quick-nav-item[view-type='wtc'] {
      display: none;
    }
  `,
  newReleases: css`
    #nav_collections a[data-type='wnr'],
    #quickNavContainer gpm-quick-nav-item[view-type='wnr'],
    #quick-nav-container gpm-quick-nav-item[view-type='wnr'] {
      display: none;
    }
  `,
  browseStations: css`
    #nav_collections a[data-type='wbs'],
    #quickNavContainer gpm-quick-nav-item[view-type='wbs'],
    #quick-nav-container gpm-quick-nav-item[view-type='wbs'] {
      display: none;
    }
  `,
  podcasts: css`
    #nav_collections a[data-type='tps'],
    #quickNavContainer gpm-quick-nav-item[view-type='tps'],
    #quick-nav-container gpm-quick-nav-item[view-type='tps'] {
      display: none;
    }
  `,
  shop: css`
    #nav_collections a[data-type='shop'] {
      display: none;
    }
  `,
  subscribe: css`
    #nav_collections a[data-type='sub'] {
      display: none;
    }
  `,
});

export default createStylesheet(styles);
