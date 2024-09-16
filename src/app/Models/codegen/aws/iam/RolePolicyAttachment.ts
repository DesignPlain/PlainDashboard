import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RolePolicyAttachmentArgs {
  // The ARN of the policy you want to apply
  policyArn?: string;

  // The name of the IAM role to which the policy should be applied
  role?: string;
}
export class RolePolicyAttachment extends DS_Resource {
  // The name of the IAM role to which the policy should be applied
  public role?: string;

  // The ARN of the policy you want to apply
  public policyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policyArn',
        'The ARN of the policy you want to apply',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The name of the IAM role to which the policy should be applied',
        () => [],
        true,
        true,
      ),
    ];
  }
}
