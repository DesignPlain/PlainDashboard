import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccessPointPolicyArgs {
  // The ARN of the access point that you want to associate with the specified policy.
  accessPointArn?: string;

  // The policy that you want to apply to the specified access point.
  policy?: string;
}
export class AccessPointPolicy extends Resource {
  // The policy that you want to apply to the specified access point.
  public policy?: string;

  // The ARN of the access point that you want to associate with the specified policy.
  public accessPointArn?: string;

  // Indicates whether this access point currently has a policy that allows public access.
  public hasPublicAccessPolicy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accessPointArn",
        "The ARN of the access point that you want to associate with the specified policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy that you want to apply to the specified access point.",
        [],
        true,
        false,
      ),
    ];
  }
}
