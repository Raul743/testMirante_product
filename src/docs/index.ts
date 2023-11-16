import components from './components';
import infos from './infos';
import servers from './servers';
import tags from './tags';

import products from './products';

export default {
  ...infos,
  ...servers,
  ...tags,
  ...components,
  paths: {
    ...products
  },
};
