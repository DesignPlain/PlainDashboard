import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_getScriptDagEdge {
  // ID of the node at which the edge starts.
  source?: string;

  // ID of the node at which the edge ends.
  target?: string;

  // Target of the edge.
  targetParameter?: string;
}

export function glue_getScriptDagEdge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetParameter",
      "Target of the edge.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "ID of the node at which the edge starts.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "target",
      "ID of the node at which the edge ends.",
      [],
      true,
      false,
    ),
  ];
}
