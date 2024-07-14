import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketWebsiteConfigurationV2RoutingRuleCondition,
  s3_BucketWebsiteConfigurationV2RoutingRuleCondition_GetTypes,
} from "./s3_BucketWebsiteConfigurationV2RoutingRuleCondition";
import {
  s3_BucketWebsiteConfigurationV2RoutingRuleRedirect,
  s3_BucketWebsiteConfigurationV2RoutingRuleRedirect_GetTypes,
} from "./s3_BucketWebsiteConfigurationV2RoutingRuleRedirect";

export interface s3_BucketWebsiteConfigurationV2RoutingRule {
  // Configuration block for describing a condition that must be met for the specified redirect to apply. See below.
  condition?: s3_BucketWebsiteConfigurationV2RoutingRuleCondition;

  // Configuration block for redirect information. See below.
  redirect?: s3_BucketWebsiteConfigurationV2RoutingRuleRedirect;
}

export function s3_BucketWebsiteConfigurationV2RoutingRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "redirect",
      "Configuration block for redirect information. See below.",
      s3_BucketWebsiteConfigurationV2RoutingRuleRedirect_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Configuration block for describing a condition that must be met for the specified redirect to apply. See below.",
      s3_BucketWebsiteConfigurationV2RoutingRuleCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
