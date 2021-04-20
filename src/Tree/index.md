---
nav:
  title: Components
  path: /components
---

## Tree

Demo:

```tsx
import React from 'react';
import { Tree } from '@hexuebin/berry-ui';

const data = new Array(1000)
  .fill(1)
  .map((item, index) => ({ label: `item-${index}`, key: `${index}` }));

export default () => (
  <div style={{ border: '1px solid' }}>
    <Tree data={data} />
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
