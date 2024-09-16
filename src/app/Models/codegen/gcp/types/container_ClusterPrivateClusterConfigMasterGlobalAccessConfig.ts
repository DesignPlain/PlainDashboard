import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /*
Whether the cluster master is accessible globally or
not.
*/
  enabled?: boolean;
}

export function container_ClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether the cluster master is accessible globally or\nnot.',
      () => [],
      true,
      false,
    ),
  ];
}
