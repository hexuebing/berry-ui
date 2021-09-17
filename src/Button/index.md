---
nav:
  title: Components
  path: /components
---

## Button

按钮类型:

```tsx
import React from 'react';
import { Button } from '@hexuebin/berry-ui';

export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);
```

`block` 属性将使按钮适合其父宽度。

```jsx
import React from 'react';
import { Button } from '@hexuebin/berry-ui';

export default () => (
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
