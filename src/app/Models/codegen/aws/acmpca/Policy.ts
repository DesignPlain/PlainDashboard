import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PolicyArgs {
  // JSON-formatted IAM policy to attach to the specified private CA resource.
  policy?: string;

  // ARN of the private CA to associate with the policy.
  resourceArn?: string;
}
export class Policy extends DS_Resource {
  // JSON-formatted IAM policy to attach to the specified private CA resource.
  public policy?: string;

  // ARN of the private CA to associate with the policy.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON-formatted IAM policy to attach to the specified private CA resource.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "ARN of the private CA to associate with the policy.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
