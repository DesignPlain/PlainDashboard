import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketWebsiteConfigurationV2RoutingRuleRedirect,
  s3_BucketWebsiteConfigurationV2RoutingRuleRedirect_GetTypes,
} from './s3_BucketWebsiteConfigurationV2RoutingRuleRedirect';
import {
  s3_BucketWebsiteConfigurationV2RoutingRuleCondition,
  s3_BucketWebsiteConfigurationV2RoutingRuleCondition_GetTypes,
} from './s3_BucketWebsiteConfigurationV2RoutingRuleCondition';

export interface s3_BucketWebsiteConfigurationV2RoutingRule {
  // Configuration block for redirect information. See below.
  redirect?: s3_BucketWebsiteConfigurationV2RoutingRuleRedirect;

  // Configuration block for describing a condition that must be met for the specified redirect to apply. See below.
  condition?: s3_BucketWebsiteConfigurationV2RoutingRuleCondition;
}

export function s3_BucketWebsiteConfigurationV2RoutingRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'redirect',
      'Configuration block for redirect information. See below.',
      () => s3_BucketWebsiteConfigurationV2RoutingRuleRedirect_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'condition',
      'Configuration block for describing a condition that must be met for the specified redirect to apply. See below.',
      () => s3_BucketWebsiteConfigurationV2RoutingRuleCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
