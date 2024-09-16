import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterEnableK8sBetaApi {
  // Enabled Kubernetes Beta APIs.
  enabledApis?: Array<string>;
}

export function container_getClusterEnableK8sBetaApi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'enabledApis',
      'Enabled Kubernetes Beta APIs.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
