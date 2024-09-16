import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterNetworkPolicy {
  // Whether network policy is enabled on the cluster.
  enabled?: boolean;

  // The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.
  provider?: string;
}

export function container_ClusterNetworkPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'provider',
      'The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.',
      () => [],
      false,
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
