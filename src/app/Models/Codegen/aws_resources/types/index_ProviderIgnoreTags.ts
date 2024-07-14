import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface index_ProviderIgnoreTags {
  // Resource tag keys to ignore across all resources.
  keys?: Array<string>;

  // Resource tag key prefixes to ignore across all resources.
  keyPrefixes?: Array<string>;
}

export function index_ProviderIgnoreTags_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "keys",
      "Resource tag keys to ignore across all resources.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "keyPrefixes",
      "Resource tag key prefixes to ignore across all resources.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
