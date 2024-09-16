import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterDnsConfig {
  // Which in-cluster DNS provider should be used.
  clusterDns?: string;

  // The suffix used for all cluster service records.
  clusterDnsDomain?: string;

  // The scope of access to cluster DNS records.
  clusterDnsScope?: string;
}

export function container_getClusterDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clusterDns',
      'Which in-cluster DNS provider should be used.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterDnsDomain',
      'The suffix used for all cluster service records.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterDnsScope',
      'The scope of access to cluster DNS records.',
      () => [],
      true,
      false,
    ),
  ];
}
