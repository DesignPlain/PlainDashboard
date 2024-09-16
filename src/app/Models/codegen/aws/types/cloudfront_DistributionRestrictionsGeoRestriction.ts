import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionRestrictionsGeoRestriction {
  // [ISO 3166-1-alpha-2 codes][4] for which you want CloudFront either to distribute your content (`whitelist`) or not distribute your content (`blacklist`). If the type is specified as `none` an empty array can be used.
  locations?: Array<string>;

  // Method that you want to use to restrict distribution of your content by country: `none`, `whitelist`, or `blacklist`.
  restrictionType?: string;
}

export function cloudfront_DistributionRestrictionsGeoRestriction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'locations',
      '[ISO 3166-1-alpha-2 codes][4] for which you want CloudFront either to distribute your content (`whitelist`) or not distribute your content (`blacklist`). If the type is specified as `none` an empty array can be used.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'restrictionType',
      'Method that you want to use to restrict distribution of your content by country: `none`, `whitelist`, or `blacklist`.',
      () => [],
      true,
      false,
    ),
  ];
}
