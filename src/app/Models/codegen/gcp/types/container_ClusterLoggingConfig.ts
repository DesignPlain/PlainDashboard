import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterLoggingConfig {
  /*
The GKE components exposing logs. Supported values include:
`SYSTEM_COMPONENTS`, `APISERVER`, `CONTROLLER_MANAGER`, `SCHEDULER`, and `WORKLOADS`.
*/
  enableComponents?: Array<string>;
}

export function container_ClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'enableComponents',
      'The GKE components exposing logs. Supported values include:\n`SYSTEM_COMPONENTS`, `APISERVER`, `CONTROLLER_MANAGER`, `SCHEDULER`, and `WORKLOADS`.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
