import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodePoolAutoConfigNetworkTag {
  // List of network tags applied to auto-provisioned node pools.
  Tags?: Array<string>;
}

export function Container_getClusterNodePoolAutoConfigNetworkTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "List of network tags applied to auto-provisioned node pools.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
