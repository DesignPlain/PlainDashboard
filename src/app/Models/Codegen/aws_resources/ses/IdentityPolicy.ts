import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IdentityPolicyArgs {
  // Name or Amazon Resource Name (ARN) of the SES Identity.
  identity?: string;

  // Name of the policy.
  name?: string;

  // JSON string of the policy.
  policy?: string;
}
export class IdentityPolicy extends Resource {
  // Name or Amazon Resource Name (ARN) of the SES Identity.
  public identity?: string;

  // Name of the policy.
  public name?: string;

  // JSON string of the policy.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "identity",
        "Name or Amazon Resource Name (ARN) of the SES Identity.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the policy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON string of the policy.",
        [],
        true,
        false,
      ),
    ];
  }
}
