import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cfg_RuleScope {
  // The IDs of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for `compliance_resource_types`.
  complianceResourceId?: string;

  // A list of resource types of only those AWS resources that you want to trigger an evaluation for the ruleE.g., `AWS::EC2::Instance`. You can only specify one type if you also specify a resource ID for `compliance_resource_id`. See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types.
  complianceResourceTypes?: Array<string>;

  // The tag key that is applied to only those AWS resources that you want you want to trigger an evaluation for the rule.
  tagKey?: string;

  // The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.
  tagValue?: string;
}

export function cfg_RuleScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "complianceResourceId",
      "The IDs of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for `compliance_resource_types`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "complianceResourceTypes",
      "A list of resource types of only those AWS resources that you want to trigger an evaluation for the ruleE.g., `AWS::EC2::Instance`. You can only specify one type if you also specify a resource ID for `compliance_resource_id`. See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagKey",
      "The tag key that is applied to only those AWS resources that you want you want to trigger an evaluation for the rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagValue",
      "The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.",
      [],
      false,
      false,
    ),
  ];
}
