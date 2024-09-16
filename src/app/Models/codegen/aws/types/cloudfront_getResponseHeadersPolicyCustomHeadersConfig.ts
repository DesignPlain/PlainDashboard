import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem,
  cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem_GetTypes,
} from './cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem';

export interface cloudfront_getResponseHeadersPolicyCustomHeadersConfig {
  //
  items?: Array<cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem>;
}

export function cloudfront_getResponseHeadersPolicyCustomHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'items',
      '',
      () =>
        cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem_GetTypes(),
      true,
      false,
    ),
  ];
}
