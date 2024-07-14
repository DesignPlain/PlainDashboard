import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cfg_RuleSourceCustomPolicyDetails,
  cfg_RuleSourceCustomPolicyDetails_GetTypes,
} from "./cfg_RuleSourceCustomPolicyDetails";
import {
  cfg_RuleSourceSourceDetail,
  cfg_RuleSourceSourceDetail_GetTypes,
} from "./cfg_RuleSourceSourceDetail";

export interface cfg_RuleSource {
  // For AWS Config managed rules, a predefined identifier, e.g `IAM_PASSWORD_POLICY`. For custom Lambda rules, the identifier is the ARN of the Lambda Function, such as `arn:aws:lambda:us-east-1:123456789012:function:custom_rule_name` or the `arn` attribute of the `aws.lambda.Function` resource.
  sourceIdentifier?: string;

  // Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to `CUSTOM_POLICY`. See Custom Policy Details Below.
  customPolicyDetails?: cfg_RuleSourceCustomPolicyDetails;

  // Indicates whether AWS or the customer owns and manages the AWS Config rule. Valid values are `AWS`, `CUSTOM_LAMBDA` or `CUSTOM_POLICY`. For more information about managed rules, see the [AWS Config Managed Rules documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html). For more information about custom rules, see the [AWS Config Custom Rules documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html). Custom Lambda Functions require permissions to allow the AWS Config service to invoke them, e.g., via the `aws.lambda.Permission` resource.
  owner?: string;

  // Provides the source and type of the event that causes AWS Config to evaluate your AWS resources. Only valid if `owner` is `CUSTOM_LAMBDA` or `CUSTOM_POLICY`. See Source Detail Below.
  sourceDetails?: Array<cfg_RuleSourceSourceDetail>;
}

export function cfg_RuleSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customPolicyDetails",
      "Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to `CUSTOM_POLICY`. See Custom Policy Details Below.",
      cfg_RuleSourceCustomPolicyDetails_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "owner",
      "Indicates whether AWS or the customer owns and manages the AWS Config rule. Valid values are `AWS`, `CUSTOM_LAMBDA` or `CUSTOM_POLICY`. For more information about managed rules, see the [AWS Config Managed Rules documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html). For more information about custom rules, see the [AWS Config Custom Rules documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html). Custom Lambda Functions require permissions to allow the AWS Config service to invoke them, e.g., via the `aws.lambda.Permission` resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceDetails",
      "Provides the source and type of the event that causes AWS Config to evaluate your AWS resources. Only valid if `owner` is `CUSTOM_LAMBDA` or `CUSTOM_POLICY`. See Source Detail Below.",
      cfg_RuleSourceSourceDetail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceIdentifier",
      "For AWS Config managed rules, a predefined identifier, e.g `IAM_PASSWORD_POLICY`. For custom Lambda rules, the identifier is the ARN of the Lambda Function, such as `arn:aws:lambda:us-east-1:123456789012:function:custom_rule_name` or the `arn` attribute of the `aws.lambda.Function` resource.",
      [],
      false,
      false,
    ),
  ];
}
