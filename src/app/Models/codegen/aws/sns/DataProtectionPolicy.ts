import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DataProtectionPolicyArgs {
  // The ARN of the SNS topic
  arn?: string;

  // The fully-formed AWS policy as JSON. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.
  policy?: string;
}
export class DataProtectionPolicy extends DS_Resource {
  // The ARN of the SNS topic
  public arn?: string;

  // The fully-formed AWS policy as JSON. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "arn",
        "The ARN of the SNS topic",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The fully-formed AWS policy as JSON. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
