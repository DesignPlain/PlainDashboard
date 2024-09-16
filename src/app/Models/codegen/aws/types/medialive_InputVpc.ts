import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_InputVpc {
  // A list of 2 VPC subnet IDs from the same VPC.
  subnetIds?: Array<string>;

  // A list of up to 5 EC2 VPC security group IDs to attach to the Input.
  securityGroupIds?: Array<string>;
}

export function medialive_InputVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'A list of 2 VPC subnet IDs from the same VPC.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'A list of up to 5 EC2 VPC security group IDs to attach to the Input.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
