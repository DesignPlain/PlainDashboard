import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Backupdisasterrecovery_ManagementServerNetwork {
  // Network with format `projects/{{project_id}}/global/networks/{{network_id}}`
  Network?: string;

  /*
Type of Network peeringMode
Default value is `PRIVATE_SERVICE_ACCESS`.
Possible values are: `PRIVATE_SERVICE_ACCESS`.

- - -
*/
  PeeringMode?: string;
}

export function Backupdisasterrecovery_ManagementServerNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      "Network with format `projects/{{project_id}}/global/networks/{{network_id}}`",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PeeringMode",
      "Type of Network peeringMode\nDefault value is `PRIVATE_SERVICE_ACCESS`.\nPossible values are: `PRIVATE_SERVICE_ACCESS`.\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
