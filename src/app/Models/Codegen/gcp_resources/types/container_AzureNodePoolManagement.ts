import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AzureNodePoolManagement {
  // Optional. Whether or not the nodes will be automatically repaired.
  autoRepair?: boolean;
}

export function container_AzureNodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Optional. Whether or not the nodes will be automatically repaired.",
      [],
      false,
      false,
    ),
  ];
}
