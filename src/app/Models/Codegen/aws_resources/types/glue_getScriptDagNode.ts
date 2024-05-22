import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_getScriptDagNodeArg,
  glue_getScriptDagNodeArg_GetTypes,
} from "./glue_getScriptDagNodeArg";

export interface glue_getScriptDagNode {
  // Line number of the node.
  lineNumber?: number;

  // Type of node this is.
  nodeType?: string;

  // Nested configuration an argument or property of a node. Defined below.
  args?: Array<glue_getScriptDagNodeArg>;

  // Node identifier that is unique within the node's graph.
  id?: string;
}

export function glue_getScriptDagNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "lineNumber",
      "Line number of the node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeType",
      "Type of node this is.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Nested configuration an argument or property of a node. Defined below.",
      glue_getScriptDagNodeArg_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Node identifier that is unique within the node's graph.",
      [],
      true,
      false,
    ),
  ];
}
