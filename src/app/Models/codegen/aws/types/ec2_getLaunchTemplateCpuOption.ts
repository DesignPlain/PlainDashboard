import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchTemplateCpuOption {
  //
  amdSevSnp?: string;

  //
  coreCount?: number;

  //
  threadsPerCore?: number;
}

export function ec2_getLaunchTemplateCpuOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'amdSevSnp',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'coreCount',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'threadsPerCore',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
