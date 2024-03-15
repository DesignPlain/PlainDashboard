export interface SearchEngineSearchEngineConfig {
  /*
The add-on that this search engine enables.
Each value may be one of: `SEARCH_ADD_ON_LLM`.

- - -
*/
  SearchAddOns?: Array<string>;

  /*
The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
Default value is `SEARCH_TIER_STANDARD`.
Possible values are: `SEARCH_TIER_STANDARD`, `SEARCH_TIER_ENTERPRISE`.
*/
  SearchTier?: string;
}
