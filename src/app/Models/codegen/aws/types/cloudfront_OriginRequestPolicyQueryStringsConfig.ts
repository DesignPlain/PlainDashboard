import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings,
  cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings_GetTypes,
} from './cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings';

export interface cloudfront_OriginRequestPolicyQueryStringsConfig {
  //
  queryStringBehavior?: string;

  //
  queryStrings?: cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings;
}

export function cloudfront_OriginRequestPolicyQueryStringsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'queryStringBehavior',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'queryStrings',
      '',
      () =>
        cloudfront_OriginRequestPolicyQueryStringsConfigQueryStrings_GetTypes(),
      false,
      false,
    ),
  ];
}
