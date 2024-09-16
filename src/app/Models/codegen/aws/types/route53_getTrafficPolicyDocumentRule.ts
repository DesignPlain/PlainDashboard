import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  route53_getTrafficPolicyDocumentRuleItem,
  route53_getTrafficPolicyDocumentRuleItem_GetTypes,
} from './route53_getTrafficPolicyDocumentRuleItem';
import {
  route53_getTrafficPolicyDocumentRuleLocation,
  route53_getTrafficPolicyDocumentRuleLocation_GetTypes,
} from './route53_getTrafficPolicyDocumentRuleLocation';
import {
  route53_getTrafficPolicyDocumentRulePrimary,
  route53_getTrafficPolicyDocumentRulePrimary_GetTypes,
} from './route53_getTrafficPolicyDocumentRulePrimary';
import {
  route53_getTrafficPolicyDocumentRuleRegion,
  route53_getTrafficPolicyDocumentRuleRegion_GetTypes,
} from './route53_getTrafficPolicyDocumentRuleRegion';
import {
  route53_getTrafficPolicyDocumentRuleSecondary,
  route53_getTrafficPolicyDocumentRuleSecondary_GetTypes,
} from './route53_getTrafficPolicyDocumentRuleSecondary';
import {
  route53_getTrafficPolicyDocumentRuleGeoProximityLocation,
  route53_getTrafficPolicyDocumentRuleGeoProximityLocation_GetTypes,
} from './route53_getTrafficPolicyDocumentRuleGeoProximityLocation';

export interface route53_getTrafficPolicyDocumentRule {
  // Configuration block for when you add a multivalue answer rule, you configure your traffic policy to route traffic approximately randomly to your healthy resources.  Only valid for `multivalue` type. See below
  items?: Array<route53_getTrafficPolicyDocumentRuleItem>;

  // Configuration block for when you add a geolocation rule, you configure your traffic policy to route your traffic based on the geographic location of your users.  Only valid for `geo` type. See below
  locations?: Array<route53_getTrafficPolicyDocumentRuleLocation>;

  // Configuration block for the settings for the rule or endpoint that you want to route traffic to whenever the corresponding resources are available. Only valid for `failover` type. See below
  primary?: route53_getTrafficPolicyDocumentRulePrimary;

  //
  regions?: Array<route53_getTrafficPolicyDocumentRuleRegion>;

  // Configuration block for the rule or endpoint that you want to route traffic to whenever the primary resources are not available. Only valid for `failover` type. See below
  secondary?: route53_getTrafficPolicyDocumentRuleSecondary;

  // Type of the rule.
  type?: string;

  // Configuration block for when you add a geoproximity rule, you configure Amazon Route 53 to route traffic to your resources based on the geographic location of your resources. Only valid for `geoproximity` type. See below
  geoProximityLocations?: Array<route53_getTrafficPolicyDocumentRuleGeoProximityLocation>;

  // ID of a rule you want to assign.
  id?: string;
}

export function route53_getTrafficPolicyDocumentRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'ID of a rule you want to assign.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'items',
      'Configuration block for when you add a multivalue answer rule, you configure your traffic policy to route traffic approximately randomly to your healthy resources.  Only valid for `multivalue` type. See below',
      () => route53_getTrafficPolicyDocumentRuleItem_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'locations',
      'Configuration block for when you add a geolocation rule, you configure your traffic policy to route your traffic based on the geographic location of your users.  Only valid for `geo` type. See below',
      () => route53_getTrafficPolicyDocumentRuleLocation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'primary',
      'Configuration block for the settings for the rule or endpoint that you want to route traffic to whenever the corresponding resources are available. Only valid for `failover` type. See below',
      () => route53_getTrafficPolicyDocumentRulePrimary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'regions',
      '',
      () => route53_getTrafficPolicyDocumentRuleRegion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'secondary',
      'Configuration block for the rule or endpoint that you want to route traffic to whenever the primary resources are not available. Only valid for `failover` type. See below',
      () => route53_getTrafficPolicyDocumentRuleSecondary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of the rule.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'geoProximityLocations',
      'Configuration block for when you add a geoproximity rule, you configure Amazon Route 53 to route traffic to your resources based on the geographic location of your resources. Only valid for `geoproximity` type. See below',
      () => route53_getTrafficPolicyDocumentRuleGeoProximityLocation_GetTypes(),
      false,
      false,
    ),
  ];
}
