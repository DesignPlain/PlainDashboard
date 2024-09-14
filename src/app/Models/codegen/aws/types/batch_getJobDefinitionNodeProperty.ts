import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_getJobDefinitionNodePropertyNodeRangeProperty,
  batch_getJobDefinitionNodePropertyNodeRangeProperty_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangeProperty";

export interface batch_getJobDefinitionNodeProperty {
  // The number of nodes that are associated with a multi-node parallel job.
  numNodes?: number;

  // Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.
  mainNode?: number;

  // A list of node ranges and their properties that are associated with a multi-node parallel job.
  nodeRangeProperties?: Array<batch_getJobDefinitionNodePropertyNodeRangeProperty>;
}

export function batch_getJobDefinitionNodeProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "numNodes",
      "The number of nodes that are associated with a multi-node parallel job.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "mainNode",
      "Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeRangeProperties",
      "A list of node ranges and their properties that are associated with a multi-node parallel job.",
      () => batch_getJobDefinitionNodePropertyNodeRangeProperty_GetTypes(),
      true,
      false,
    ),
  ];
}
