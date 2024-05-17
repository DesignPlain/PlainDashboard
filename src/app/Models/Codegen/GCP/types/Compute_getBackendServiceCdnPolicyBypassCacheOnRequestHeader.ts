import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader {
  // The header field name to match on when bypassing cache. Values are case-insensitive.
  HeaderName?: string;
}

export function Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The header field name to match on when bypassing cache. Values are case-insensitive.",
      [],
      true,
      false,
    ),
  ];
}
