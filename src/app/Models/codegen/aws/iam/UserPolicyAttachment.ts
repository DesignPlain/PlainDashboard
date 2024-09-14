import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface UserPolicyAttachmentArgs {
  // The user the policy should be applied to
  user?: string;

  // The ARN of the policy you want to apply
  policyArn?: string;
}
export class UserPolicyAttachment extends DS_Resource {
  // The ARN of the policy you want to apply
  public policyArn?: string;

  // The user the policy should be applied to
  public user?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "user",
        "The user the policy should be applied to",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyArn",
        "The ARN of the policy you want to apply",
        () => [],
        true,
        true,
      ),
    ];
  }
}
