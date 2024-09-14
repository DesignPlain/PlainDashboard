import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccessPointPolicyArgs {
  // The ARN of the access point that you want to associate with the specified policy.
  accessPointArn?: string;

  // The policy that you want to apply to the specified access point.
  policy?: string;
}
export class AccessPointPolicy extends DS_Resource {
  // The ARN of the access point that you want to associate with the specified policy.
  public accessPointArn?: string;

  // Indicates whether this access point currently has a policy that allows public access.
  public hasPublicAccessPolicy?: boolean;

  // The policy that you want to apply to the specified access point.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accessPointArn",
        "The ARN of the access point that you want to associate with the specified policy.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy that you want to apply to the specified access point.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
