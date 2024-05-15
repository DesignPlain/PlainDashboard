import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingVersionConfigRedirect,
  Firebase_HostingVersionConfigRedirect_GetTypes,
} from "./Firebase_HostingVersionConfigRedirect";
import {
  Firebase_HostingVersionConfigRewrite,
  Firebase_HostingVersionConfigRewrite_GetTypes,
} from "./Firebase_HostingVersionConfigRewrite";

export interface Firebase_HostingVersionConfig {
  /*
An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path,
triggers Hosting to respond with a redirect to the specified destination path.
Structure is documented below.
*/
  Redirects?: Array<Firebase_HostingVersionConfigRedirect>;

  /*
An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the
request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
Structure is documented below.
*/
  Rewrites?: Array<Firebase_HostingVersionConfigRewrite>;
}

export function Firebase_HostingVersionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Redirects",
      "An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path,\ntriggers Hosting to respond with a redirect to the specified destination path.\nStructure is documented below.",
      Firebase_HostingVersionConfigRedirect_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rewrites",
      "An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the\nrequest URL path, triggers Hosting to respond as if the service were given the specified destination URL.\nStructure is documented below.",
      Firebase_HostingVersionConfigRewrite_GetTypes(),
      false,
      true,
    ),
  ];
}
