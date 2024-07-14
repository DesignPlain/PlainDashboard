import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResourcePolicyArgs {
  // JSON formatted policy document that controls access to the Network Firewall resource. The policy must be provided --without whitespaces--.  We recommend using jsonencode for formatting as seen in the examples above. For more details, including available policy statement Actions, see the [Policy](https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html#API_PutResourcePolicy_RequestSyntax) parameter in the AWS API documentation.
  policy?: string;

  // The Amazon Resource Name (ARN) of the rule group or firewall policy.
  resourceArn?: string;
}
export class ResourcePolicy extends Resource {
  // JSON formatted policy document that controls access to the Network Firewall resource. The policy must be provided --without whitespaces--.  We recommend using jsonencode for formatting as seen in the examples above. For more details, including available policy statement Actions, see the [Policy](https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html#API_PutResourcePolicy_RequestSyntax) parameter in the AWS API documentation.
  public policy?: string;

  // The Amazon Resource Name (ARN) of the rule group or firewall policy.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON formatted policy document that controls access to the Network Firewall resource. The policy must be provided **without whitespaces**.  We recommend using jsonencode for formatting as seen in the examples above. For more details, including available policy statement Actions, see the [Policy](https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html#API_PutResourcePolicy_RequestSyntax) parameter in the AWS API documentation.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "The Amazon Resource Name (ARN) of the rule group or firewall policy.",
        [],
        true,
        true,
      ),
    ];
  }
}
