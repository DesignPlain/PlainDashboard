import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  route53_RecordGeoproximityRoutingPolicyCoordinate,
  route53_RecordGeoproximityRoutingPolicyCoordinate_GetTypes,
} from './route53_RecordGeoproximityRoutingPolicyCoordinate';

export interface route53_RecordGeoproximityRoutingPolicy {
  // A AWS region where the resource is present.
  awsRegion?: string;

  // Route more traffic or less traffic to the resource by specifying a value ranges between -90 to 90. See https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html for bias details.
  bias?: number;

  // Specify `latitude` and `longitude` for routing traffic to non-AWS resources.
  coordinates?: Array<route53_RecordGeoproximityRoutingPolicyCoordinate>;

  // A AWS local zone group where the resource is present. See https://docs.aws.amazon.com/local-zones/latest/ug/available-local-zones.html for local zone group list.
  localZoneGroup?: string;
}

export function route53_RecordGeoproximityRoutingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'coordinates',
      'Specify `latitude` and `longitude` for routing traffic to non-AWS resources.',
      () => route53_RecordGeoproximityRoutingPolicyCoordinate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'localZoneGroup',
      'A AWS local zone group where the resource is present. See https://docs.aws.amazon.com/local-zones/latest/ug/available-local-zones.html for local zone group list.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'awsRegion',
      'A AWS region where the resource is present.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bias',
      'Route more traffic or less traffic to the resource by specifying a value ranges between -90 to 90. See https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html for bias details.',
      () => [],
      false,
      false,
    ),
  ];
}
