import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UserPolicyAttachmentArgs {
  // The ARN of the policy you want to apply
  policyArn?: string;

  // The user the policy should be applied to
  user?: string;
}
export class UserPolicyAttachment extends Resource {
  // The ARN of the policy you want to apply
  public policyArn?: string;

  // The user the policy should be applied to
  public user?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyArn",
        "The ARN of the policy you want to apply",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "The user the policy should be applied to",
        [],
        true,
        true,
      ),
    ];
  }
}
