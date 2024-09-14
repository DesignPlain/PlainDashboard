import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_NodePoolManagement {
  // Whether the nodes will be automatically upgraded. Enabled by default.
  autoUpgrade?: boolean;

  // Whether the nodes will be automatically repaired. Enabled by default.
  autoRepair?: boolean;
}

export function container_NodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoUpgrade",
      "Whether the nodes will be automatically upgraded. Enabled by default.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Whether the nodes will be automatically repaired. Enabled by default.",
      () => [],
      false,
      false,
    ),
  ];
}
