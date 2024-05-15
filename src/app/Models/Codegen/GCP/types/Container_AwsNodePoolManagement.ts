import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsNodePoolManagement {
  // Optional. Whether or not the nodes will be automatically repaired.
  AutoRepair?: boolean;
}

export function Container_AwsNodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AutoRepair",
      "Optional. Whether or not the nodes will be automatically repaired.",
      [],
      false,
      false,
    ),
  ];
}
