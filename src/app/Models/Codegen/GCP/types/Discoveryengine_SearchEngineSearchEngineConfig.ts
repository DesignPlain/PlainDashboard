import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Discoveryengine_SearchEngineSearchEngineConfig {
  /*
The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
Default value is `SEARCH_TIER_STANDARD`.
Possible values are: `SEARCH_TIER_STANDARD`, `SEARCH_TIER_ENTERPRISE`.
*/
  SearchTier?: string;

  /*
The add-on that this search engine enables.
Each value may be one of: `SEARCH_ADD_ON_LLM`.

- - -
*/
  SearchAddOns?: Array<string>;
}

export function Discoveryengine_SearchEngineSearchEngineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SearchTier",
      "The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.\nDefault value is `SEARCH_TIER_STANDARD`.\nPossible values are: `SEARCH_TIER_STANDARD`, `SEARCH_TIER_ENTERPRISE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SearchAddOns",
      "The add-on that this search engine enables.\nEach value may be one of: `SEARCH_ADD_ON_LLM`.\n\n- - -",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
