import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodeConfigGvnic {
  // Whether or not gvnic is enabled
  enabled?: boolean;
}

export function container_getClusterNodeConfigGvnic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not gvnic is enabled",
      [],
      true,
      false,
    ),
  ];
}
