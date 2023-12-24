import CytoscapeComponent from "react-cytoscapejs";

import { PageTemplate } from "src/components/templates/page_template/page_template";
export const JOB_PAGE_PATH = "/jobs";

export const JobPage = () => {
  return (
    <PageTemplate>
      <SampleGraph />
    </PageTemplate>
  );
};

const SampleGraph = () => {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
    {
      data: {
        source: "one",
        target: "two",
        label: "Edge from Node1 to Node2",
      },
    },
  ];

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "600px", height: "600px" }}
    />
  );
};
