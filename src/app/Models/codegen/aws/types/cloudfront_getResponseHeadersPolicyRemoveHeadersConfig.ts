import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem,
  cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem_GetTypes,
} from './cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem';

export interface cloudfront_getResponseHeadersPolicyRemoveHeadersConfig {
  //
  items?: Array<cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem>;
}

export function cloudfront_getResponseHeadersPolicyRemoveHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'items',
      '',
      () =>
        cloudfront_getResponseHeadersPolicyRemoveHeadersConfigItem_GetTypes(),
      true,
      false,
    ),
  ];
}
