import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EmailIdentityPolicyArgs {
  // The name of the policy.
  policyName?: string;

  // The email identity.
  emailIdentity?: string;

  // The text of the policy in JSON format.
  policy?: string;
}
export class EmailIdentityPolicy extends Resource {
  // The email identity.
  public emailIdentity?: string;

  // The text of the policy in JSON format.
  public policy?: string;

  // The name of the policy.
  public policyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyName",
        "The name of the policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "emailIdentity",
        "The email identity.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The text of the policy in JSON format.",
        [],
        true,
        false,
      ),
    ];
  }
}
