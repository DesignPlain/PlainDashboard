import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface backupdisasterrecovery_ManagementServerNetwork {
  // Network with format `projects/{{project_id}}/global/networks/{{network_id}}`
  network?: string;

  /*
Type of Network peeringMode
Default value is `PRIVATE_SERVICE_ACCESS`.
Possible values are: `PRIVATE_SERVICE_ACCESS`.

- - -
*/
  peeringMode?: string;
}

export function backupdisasterrecovery_ManagementServerNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'network',
      'Network with format `projects/{{project_id}}/global/networks/{{network_id}}`',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'peeringMode',
      'Type of Network peeringMode\nDefault value is `PRIVATE_SERVICE_ACCESS`.\nPossible values are: `PRIVATE_SERVICE_ACCESS`.\n\n- - -',
      () => [],
      false,
      true,
    ),
  ];
}
