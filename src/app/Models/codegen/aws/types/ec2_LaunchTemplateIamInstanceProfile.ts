import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchTemplateIamInstanceProfile {
  // The Amazon Resource Name (ARN) of the instance profile. Conflicts with `name`.
  arn?: string;

  // The name of the instance profile.
  name?: string;
}

export function ec2_LaunchTemplateIamInstanceProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'The Amazon Resource Name (ARN) of the instance profile. Conflicts with `name`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the instance profile.',
      () => [],
      false,
      false,
    ),
  ];
}
