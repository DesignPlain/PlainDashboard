import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Projects_ApiKeyRestrictionsBrowserKeyRestrictions {
  // A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
  AllowedReferrers?: Array<string>;
}

export function Projects_ApiKeyRestrictionsBrowserKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedReferrers",
      "A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
