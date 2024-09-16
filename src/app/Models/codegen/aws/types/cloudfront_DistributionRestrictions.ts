import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_DistributionRestrictionsGeoRestriction,
  cloudfront_DistributionRestrictionsGeoRestriction_GetTypes,
} from './cloudfront_DistributionRestrictionsGeoRestriction';

export interface cloudfront_DistributionRestrictions {
  //
  geoRestriction?: cloudfront_DistributionRestrictionsGeoRestriction;
}

export function cloudfront_DistributionRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'geoRestriction',
      '',
      () => cloudfront_DistributionRestrictionsGeoRestriction_GetTypes(),
      true,
      false,
    ),
  ];
}
