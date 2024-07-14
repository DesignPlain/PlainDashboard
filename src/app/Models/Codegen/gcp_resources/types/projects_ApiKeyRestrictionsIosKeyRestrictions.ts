import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface projects_ApiKeyRestrictionsIosKeyRestrictions {
  // A list of bundle IDs that are allowed when making API calls with this key.
  allowedBundleIds?: Array<string>;
}

export function projects_ApiKeyRestrictionsIosKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedBundleIds",
      "A list of bundle IDs that are allowed when making API calls with this key.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
