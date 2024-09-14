import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ResourcePolicyArgs {
  // An IAM policy. The policy string in JSON must not contain newlines or blank lines.
  policy?: string;

  // The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
  resourceArn?: string;
}
export class ResourcePolicy extends DS_Resource {
  // An IAM policy. The policy string in JSON must not contain newlines or blank lines.
  public policy?: string;

  // The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "An IAM policy. The policy string in JSON must not contain newlines or blank lines.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
