import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel,
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel";

export interface compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter {
  /*
The list of label value pairs that must match labels in the provided metadata
based on filterMatchCriteria  This list must not be empty and can have at the
most 64 entries.
Structure is documented below.
*/
  filterLabels?: Array<compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel>;

  /*
Specifies how individual filterLabel matches within the list of filterLabels
contribute towards the overall metadataFilter match. Supported values are:
- MATCH_ANY: At least one of the filterLabels must have a matching label in the
provided metadata.
- MATCH_ALL: All filterLabels must have matching labels in
the provided metadata.
Possible values are: `MATCH_ALL`, `MATCH_ANY`.
*/
  filterMatchCriteria?: string;
}

export function compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filterLabels",
      "The list of label value pairs that must match labels in the provided metadata\nbased on filterMatchCriteria  This list must not be empty and can have at the\nmost 64 entries.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterMatchCriteria",
      "Specifies how individual filterLabel matches within the list of filterLabels\ncontribute towards the overall metadataFilter match. Supported values are:\n* MATCH_ANY: At least one of the filterLabels must have a matching label in the\nprovided metadata.\n* MATCH_ALL: All filterLabels must have matching labels in\nthe provided metadata.\nPossible values are: `MATCH_ALL`, `MATCH_ANY`.",
      [],
      true,
      false,
    ),
  ];
}
