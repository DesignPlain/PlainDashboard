import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel,
  Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel";

export interface Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter {
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

  /*
The list of label value pairs that must match labels in the provided metadata
based on filterMatchCriteria  This list must not be empty and can have at the
most 64 entries.
Structure is documented below.
*/
  FilterLabels?: Array<Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel>;
}

export function Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FilterLabels",
      "The list of label value pairs that must match labels in the provided metadata\nbased on filterMatchCriteria  This list must not be empty and can have at the\nmost 64 entries.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FilterMatchCriteria",
      "Specifies how individual filterLabel matches within the list of filterLabels\ncontribute towards the overall metadataFilter match. Supported values are:\n- MATCH_ANY: At least one of the filterLabels must have a matching label in the\nprovided metadata.\n- MATCH_ALL: All filterLabels must have matching labels in\nthe provided metadata.\nPossible values are: `MATCH_ALL`, `MATCH_ANY`.",
      [],
      true,
      false,
    ),
  ];
}
