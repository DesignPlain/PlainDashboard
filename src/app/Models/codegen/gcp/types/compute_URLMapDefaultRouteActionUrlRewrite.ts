import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_URLMapDefaultRouteActionUrlRewrite {
  /*
Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.
The value must be between 1 and 255 characters.
*/
  hostRewrite?: string;

  /*
Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.
The value must be between 1 and 1024 characters.
*/
  pathPrefixRewrite?: string;
}

export function compute_URLMapDefaultRouteActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hostRewrite',
      "Prior to forwarding the request to the selected service, the request's host header is replaced\nwith contents of hostRewrite.\nThe value must be between 1 and 255 characters.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pathPrefixRewrite',
      "Prior to forwarding the request to the selected backend service, the matching portion of the\nrequest's path is replaced by pathPrefixRewrite.\nThe value must be between 1 and 1024 characters.",
      () => [],
      false,
      false,
    ),
  ];
}
