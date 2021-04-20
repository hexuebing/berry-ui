import React, { useRef, useState } from 'react';
import './index.less';

type DataItem = { label: string; key: string };

export interface TreeOptions {
  data: Array<DataItem>;
}

export default ({ data }: TreeOptions) => {
  const treeRef = useRef<HTMLDivElement>(null);
  const [itemHeight] = useState(30);
  const [showNodesLength] = useState(data.length);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [showNodes, setShowNodes] = useState<Array<DataItem>>(data);

  function getViewItems() {
    if (treeRef.current) {
      const { scrollTop, clientHeight } = treeRef.current;
      const visibleCount = Math.ceil(clientHeight / itemHeight);
      const startNumber = Math.floor(scrollTop / itemHeight);
      setStart(startNumber);
      setEnd(startNumber + visibleCount);
      getShowNodes();
    }
  }

  function getShowNodes() {
    const nodes: Array<DataItem> = data.slice(start, end);
    setShowNodes(nodes);
  }

  const listItem = showNodes.map(item => (
    <div key={item.key} style={{ height: itemHeight, border: '1px dashed' }}>
      {item.label}
    </div>
  ));

  return (
    <div
      className="tree__box"
      ref={treeRef}
      onScroll={getViewItems}
      style={{ height: 200, overflowY: 'auto' }}
    >
      <div
        style={{ height: showNodesLength * itemHeight }}
        className="tree__phantom"
      ></div>
      <div className="tree__content" style={{ paddingTop: start * itemHeight }}>
        {listItem}
      </div>
    </div>
  );
};
