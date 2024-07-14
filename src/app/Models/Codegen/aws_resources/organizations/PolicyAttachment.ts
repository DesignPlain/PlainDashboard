import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PolicyAttachmentArgs {
  // The unique identifier (ID) of the root, organizational unit, or account number that you want to attach the policy to.
  targetId?: string;

  // The unique identifier (ID) of the policy that you want to attach to the target.
  policyId?: string;

  // If set to `true`, destroy will --not-- detach the policy and instead just remove the resource from state. This can be useful in situations where the attachment must be preserved to meet the AWS minimum requirement of 1 attached policy.
  skipDestroy?: boolean;
}
export class PolicyAttachment extends Resource {
  // The unique identifier (ID) of the root, organizational unit, or account number that you want to attach the policy to.
  public targetId?: string;

  // The unique identifier (ID) of the policy that you want to attach to the target.
  public policyId?: string;

  // If set to `true`, destroy will --not-- detach the policy and instead just remove the resource from state. This can be useful in situations where the attachment must be preserved to meet the AWS minimum requirement of 1 attached policy.
  public skipDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "targetId",
        "The unique identifier (ID) of the root, organizational unit, or account number that you want to attach the policy to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyId",
        "The unique identifier (ID) of the policy that you want to attach to the target.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "If set to `true`, destroy will **not** detach the policy and instead just remove the resource from state. This can be useful in situations where the attachment must be preserved to meet the AWS minimum requirement of 1 attached policy.",
        [],
        false,
        false,
      ),
    ];
  }
}
