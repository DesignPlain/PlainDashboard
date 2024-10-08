import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchTemplateMonitoring {
  // If `true`, the launched EC2 instance will have detailed monitoring enabled.
  enabled?: boolean;
}

export function ec2_LaunchTemplateMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'If `true`, the launched EC2 instance will have detailed monitoring enabled.',
      () => [],
      false,
      false,
    ),
  ];
}
