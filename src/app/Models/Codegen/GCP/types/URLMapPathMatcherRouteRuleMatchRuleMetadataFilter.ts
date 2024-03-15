import { URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel } from "./URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel";

export interface URLMapPathMatcherRouteRuleMatchRuleMetadataFilter {
  /*
The list of label value pairs that must match labels in the provided metadata
based on filterMatchCriteria  This list must not be empty and can have at the
most 64 entries.
Structure is documented below.
*/
  FilterLabels?: Array<URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel>;

  /*
Specifies how individual filterLabel matches within the list of filterLabels
contribute towards the overall metadataFilter match. Supported values are:
- MATCH_ANY: At least one of the filterLabels must have a matching label in the
provided metadata.
- MATCH_ALL: All filterLabels must have matching labels in
the provided metadata.
Possible values are: `MATCH_ALL`, `MATCH_ANY`.
*/
  FilterMatchCriteria?: string;
}
