import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNetworkPolicy {
  // The selected network policy provider.
  provider?: string;

  // Whether network policy is enabled on the cluster.
  enabled?: boolean;
}

export function container_getClusterNetworkPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'provider',
      'The selected network policy provider.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether network policy is enabled on the cluster.',
      () => [],
      true,
      false,
    ),
  ];
}
