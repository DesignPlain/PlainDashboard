import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface GroupPolicyAttachmentArgs {
  // The ARN of the policy you want to apply
  policyArn?: string;

  // The group the policy should be applied to
  group?: string;
}
export class GroupPolicyAttachment extends DS_Resource {
  // The group the policy should be applied to
  public group?: string;

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
        'group',
        'The group the policy should be applied to',
        () => [],
        true,
        true,
      ),
    ];
  }
}
