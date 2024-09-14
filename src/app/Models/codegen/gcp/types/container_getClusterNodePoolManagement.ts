import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodePoolManagement {
  // Whether the nodes will be automatically repaired. Enabled by default.
  autoRepair?: boolean;

  // Whether the nodes will be automatically upgraded. Enabled by default.
  autoUpgrade?: boolean;
}

export function container_getClusterNodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Whether the nodes will be automatically repaired. Enabled by default.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoUpgrade",
      "Whether the nodes will be automatically upgraded. Enabled by default.",
      () => [],
      true,
      false,
    ),
  ];
}
