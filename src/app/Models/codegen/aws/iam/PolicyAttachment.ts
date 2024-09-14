import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PolicyAttachmentArgs {
  // Role(s) the policy should be applied to.
  roles?: Array<string>;

  // User(s) the policy should be applied to.
  users?: Array<string>;

  // Group(s) the policy should be applied to.
  groups?: Array<string>;

  // Name of the attachment. This cannot be an empty string.
  name?: string;

  // ARN of the policy you want to apply. Typically this should be a reference to the ARN of another resource to ensure dependency ordering, such as `aws_iam_policy.example.arn`.
  policyArn?: string;
}
export class PolicyAttachment extends DS_Resource {
  // ARN of the policy you want to apply. Typically this should be a reference to the ARN of another resource to ensure dependency ordering, such as `aws_iam_policy.example.arn`.
  public policyArn?: string;

  // Role(s) the policy should be applied to.
  public roles?: Array<string>;

  // User(s) the policy should be applied to.
  public users?: Array<string>;

  // Group(s) the policy should be applied to.
  public groups?: Array<string>;

  // Name of the attachment. This cannot be an empty string.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "roles",
        "Role(s) the policy should be applied to.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "users",
        "User(s) the policy should be applied to.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "groups",
        "Group(s) the policy should be applied to.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the attachment. This cannot be an empty string.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyArn",
        "ARN of the policy you want to apply. Typically this should be a reference to the ARN of another resource to ensure dependency ordering, such as `aws_iam_policy.example.arn`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
