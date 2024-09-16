import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite {
  /*
Prior to forwarding the request to the selected
origin, the request's host header is replaced with
contents of the hostRewrite.
This value must be between 1 and 255 characters.
*/
  hostRewrite?: string;
}

export function networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hostRewrite',
      "Prior to forwarding the request to the selected\norigin, the request's host header is replaced with\ncontents of the hostRewrite.\nThis value must be between 1 and 255 characters.",
      () => [],
      false,
      false,
    ),
  ];
}
