import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backupdisasterrecovery_getManagementServerNetwork {
  // Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'
  network?: string;

  // Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"]
  peeringMode?: string;
}

export function backupdisasterrecovery_getManagementServerNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      "Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "peeringMode",
      'Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"]',
      [],
      true,
      false,
    ),
  ];
}
