import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GroupPolicyAttachmentArgs {
  // The group the policy should be applied to
  group?: string;

  // The ARN of the policy you want to apply
  policyArn?: string;
}
export class GroupPolicyAttachment extends Resource {
  // The group the policy should be applied to
  public group?: string;

  // The ARN of the policy you want to apply
  public policyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "group",
        "The group the policy should be applied to",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyArn",
        "The ARN of the policy you want to apply",
        [],
        true,
        true,
      ),
    ];
  }
}
