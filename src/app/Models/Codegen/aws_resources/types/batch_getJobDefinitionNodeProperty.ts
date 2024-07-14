import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_getJobDefinitionNodeProperty {
  // A list of node ranges and their properties that are associated with a multi-node parallel job.
  nodeRangeProperties?: Array<string>;

  // The number of nodes that are associated with a multi-node parallel job.
  numNodes?: number;

  // Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.
  mainNode?: number;
}

export function batch_getJobDefinitionNodeProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeRangeProperties",
      "A list of node ranges and their properties that are associated with a multi-node parallel job.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numNodes",
      "The number of nodes that are associated with a multi-node parallel job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "mainNode",
      "Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.",
      [],
      true,
      false,
    ),
  ];
}
