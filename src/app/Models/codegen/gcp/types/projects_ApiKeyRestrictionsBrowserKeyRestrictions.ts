import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface projects_ApiKeyRestrictionsBrowserKeyRestrictions {
  // A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
  allowedReferrers?: Array<string>;
}

export function projects_ApiKeyRestrictionsBrowserKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedReferrers",
      "A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
