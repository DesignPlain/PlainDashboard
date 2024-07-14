import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PolicyAttachmentArgs {
  // The ARN of the policy you want to apply
  policyArn?: string;

  // The role(s) the policy should be applied to
  roles?: Array<string>;

  // The user(s) the policy should be applied to
  users?: Array<string>;

  // The group(s) the policy should be applied to
  groups?: Array<string>;

  // The name of the attachment. This cannot be an empty string.
  name?: string;
}
export class PolicyAttachment extends Resource {
  // The name of the attachment. This cannot be an empty string.
  public name?: string;

  // The ARN of the policy you want to apply
  public policyArn?: string;

  // The role(s) the policy should be applied to
  public roles?: Array<string>;

  // The user(s) the policy should be applied to
  public users?: Array<string>;

  // The group(s) the policy should be applied to
  public groups?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "groups",
        "The group(s) the policy should be applied to",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the attachment. This cannot be an empty string.",
        [],
        false,
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
      new DynamicUIProps(
        InputType.Array,
        "roles",
        "The role(s) the policy should be applied to",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "users",
        "The user(s) the policy should be applied to",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
