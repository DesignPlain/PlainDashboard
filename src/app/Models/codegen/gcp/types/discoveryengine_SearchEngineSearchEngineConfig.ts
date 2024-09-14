import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface discoveryengine_SearchEngineSearchEngineConfig {
  /*
The add-on that this search engine enables.
Each value may be one of: `SEARCH_ADD_ON_LLM`.

- - -
*/
  searchAddOns?: Array<string>;

  /*
The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
Default value is `SEARCH_TIER_STANDARD`.
Possible values are: `SEARCH_TIER_STANDARD`, `SEARCH_TIER_ENTERPRISE`.
*/
  searchTier?: string;
}

export function discoveryengine_SearchEngineSearchEngineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "searchAddOns",
      "The add-on that this search engine enables.\nEach value may be one of: `SEARCH_ADD_ON_LLM`.\n\n- - -",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "searchTier",
      "The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.\nDefault value is `SEARCH_TIER_STANDARD`.\nPossible values are: `SEARCH_TIER_STANDARD`, `SEARCH_TIER_ENTERPRISE`.",
      () => [],
      false,
      false,
    ),
  ];
}
