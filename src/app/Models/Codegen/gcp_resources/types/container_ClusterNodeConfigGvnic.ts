import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterNodeConfigGvnic {
  // Whether or not the Google Virtual NIC (gVNIC) is enabled
  enabled?: boolean;
}

export function container_ClusterNodeConfigGvnic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not the Google Virtual NIC (gVNIC) is enabled",
      [],
      true,
      true,
    ),
  ];
}
