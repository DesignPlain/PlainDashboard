import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_VpcIpamPoolCidrCidrAuthorizationContext {
  // The plain-text authorization message for the prefix and account.
  message?: string;

  // The signed authorization message for the prefix and account.
  signature?: string;
}

export function ec2_VpcIpamPoolCidrCidrAuthorizationContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'message',
      'The plain-text authorization message for the prefix and account.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'signature',
      'The signed authorization message for the prefix and account.',
      () => [],
      false,
      true,
    ),
  ];
}
