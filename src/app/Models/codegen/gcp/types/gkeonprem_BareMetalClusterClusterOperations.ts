import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalClusterClusterOperations {
  // Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
  enableApplicationLogs?: boolean;
}

export function gkeonprem_BareMetalClusterClusterOperations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableApplicationLogs',
      'Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).',
      () => [],
      false,
      false,
    ),
  ];
}
