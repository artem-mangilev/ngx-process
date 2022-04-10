export interface Point {
  x: number;
  y: number;
}

export interface NodeDimension {
  width: number;
  height: number;
}

export interface Node {
  id: string;
  position?: Point;
  dimension?: NodeDimension;
  transform?: string;
  label?: string;
  data?: any;
  meta?: any;
  anchor: {
    transform: {
      input: string;
      output: string;
    };
  };
}

export interface ClusterNode extends Node {
  childNodeIds?: string[];
}
