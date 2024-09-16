import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionOriginS3OriginConfig {
  // The CloudFront origin access identity to associate with the origin.
  originAccessIdentity?: string;
}

export function cloudfront_DistributionOriginS3OriginConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'originAccessIdentity',
      'The CloudFront origin access identity to associate with the origin.',
      () => [],
      true,
      false,
    ),
  ];
}
