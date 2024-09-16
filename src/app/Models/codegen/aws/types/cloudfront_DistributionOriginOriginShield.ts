import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionOriginOriginShield {
  // `true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs
  enabled?: boolean;

  // AWS Region for Origin Shield. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as `us-east-2`.
  originShieldRegion?: string;
}

export function cloudfront_DistributionOriginOriginShield_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      '`true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'originShieldRegion',
      'AWS Region for Origin Shield. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as `us-east-2`.',
      () => [],
      false,
      false,
    ),
  ];
}
