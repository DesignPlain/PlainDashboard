import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNodePoolAutoConfigNetworkTag {
  // List of network tags applied to auto-provisioned node pools.
  tags?: Array<string>;
}

export function container_getClusterNodePoolAutoConfigNetworkTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "List of network tags applied to auto-provisioned node pools.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
