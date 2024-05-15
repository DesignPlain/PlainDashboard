import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheOriginOriginRedirect {
  /*
The set of redirect response codes that the CDN
follows. Values of
[RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions)
are accepted.
*/
  RedirectConditions?: Array<string>;
}

export function Networkservices_EdgeCacheOriginOriginRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RedirectConditions",
      "The set of redirect response codes that the CDN\nfollows. Values of\n[RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions)\nare accepted.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
