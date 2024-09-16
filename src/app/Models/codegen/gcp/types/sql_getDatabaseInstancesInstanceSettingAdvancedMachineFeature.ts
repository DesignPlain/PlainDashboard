import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature {
  // The number of threads per physical core. Can be 1 or 2.
  threadsPerCore?: number;
}

export function sql_getDatabaseInstancesInstanceSettingAdvancedMachineFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'threadsPerCore',
      'The number of threads per physical core. Can be 1 or 2.',
      () => [],
      true,
      false,
    ),
  ];
}
