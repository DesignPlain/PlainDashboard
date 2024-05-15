import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite {
  /*
Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.
The value must be between 1 and 255 characters.
*/
  HostRewrite?: string;

  /*
Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.
The value must be between 1 and 1024 characters.
*/
  PathPrefixRewrite?: string;
}

export function Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HostRewrite",
      "Prior to forwarding the request to the selected service, the request's host header is replaced\nwith contents of hostRewrite.\nThe value must be between 1 and 255 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PathPrefixRewrite",
      "Prior to forwarding the request to the selected backend service, the matching portion of the\nrequest's path is replaced by pathPrefixRewrite.\nThe value must be between 1 and 1024 characters.",
      [],
      false,
      false,
    ),
  ];
}
