import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterAddonsConfigCloudrunConfig {
  //
  disabled?: boolean;

  //
  loadBalancerType?: string;
}

export function container_getClusterAddonsConfigCloudrunConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'loadBalancerType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'disabled', '', () => [], true, false),
  ];
}
