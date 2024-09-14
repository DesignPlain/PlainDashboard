import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface integrationconnectors_ConnectionNodeConfig {
  // Minimum number of nodes in the runtime nodes.
  maxNodeCount?: number;

  // Minimum number of nodes in the runtime nodes.
  minNodeCount?: number;
}

export function integrationconnectors_ConnectionNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxNodeCount",
      "Minimum number of nodes in the runtime nodes.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minNodeCount",
      "Minimum number of nodes in the runtime nodes.",
      () => [],
      false,
      false,
    ),
  ];
}
