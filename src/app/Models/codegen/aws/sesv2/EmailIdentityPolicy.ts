import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EmailIdentityPolicyArgs {
  // The email identity.
  emailIdentity?: string;

  // The text of the policy in JSON format.
  policy?: string;

  // The name of the policy.
  policyName?: string;
}
export class EmailIdentityPolicy extends DS_Resource {
  // The text of the policy in JSON format.
  public policy?: string;

  // The name of the policy.
  public policyName?: string;

  // The email identity.
  public emailIdentity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "emailIdentity",
        "The email identity.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The text of the policy in JSON format.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyName",
        "The name of the policy.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
