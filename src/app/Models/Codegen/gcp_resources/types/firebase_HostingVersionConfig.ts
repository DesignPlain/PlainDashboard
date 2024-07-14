import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  firebase_HostingVersionConfigRedirect,
  firebase_HostingVersionConfigRedirect_GetTypes,
} from "./firebase_HostingVersionConfigRedirect";
import {
  firebase_HostingVersionConfigRewrite,
  firebase_HostingVersionConfigRewrite_GetTypes,
} from "./firebase_HostingVersionConfigRewrite";

export interface firebase_HostingVersionConfig {
  /*
An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path,
triggers Hosting to respond with a redirect to the specified destination path.
Structure is documented below.
*/
  redirects?: Array<firebase_HostingVersionConfigRedirect>;

  /*
An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the
request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
Structure is documented below.
*/
  rewrites?: Array<firebase_HostingVersionConfigRewrite>;
}

export function firebase_HostingVersionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "redirects",
      "An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path,\ntriggers Hosting to respond with a redirect to the specified destination path.\nStructure is documented below.",
      firebase_HostingVersionConfigRedirect_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rewrites",
      "An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the\nrequest URL path, triggers Hosting to respond as if the service were given the specified destination URL.\nStructure is documented below.",
      firebase_HostingVersionConfigRewrite_GetTypes(),
      false,
      true,
    ),
  ];
}
