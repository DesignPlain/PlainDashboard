import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getGlobalForwardingRuleMetadataFilterFilterLabel,
  Compute_getGlobalForwardingRuleMetadataFilterFilterLabel_GetTypes,
} from "./Compute_getGlobalForwardingRuleMetadataFilterFilterLabel";

export interface Compute_getGlobalForwardingRuleMetadataFilter {
  /*
The list of label value pairs that must match labels in the
provided metadata based on filterMatchCriteria

This list must not be empty and can have at the most 64 entries.
*/
  FilterLabels?: Array<Compute_getGlobalForwardingRuleMetadataFilterFilterLabel>;

  /*
Specifies how individual filterLabel matches within the list of
filterLabels contribute towards the overall metadataFilter match.

MATCH_ANY - At least one of the filterLabels must have a matching
label in the provided metadata.
MATCH_ALL - All filterLabels must have matching labels in the
provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]
*/
  FilterMatchCriteria?: string;
}

export function Compute_getGlobalForwardingRuleMetadataFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FilterLabels",
      "The list of label value pairs that must match labels in the\nprovided metadata based on filterMatchCriteria\n\nThis list must not be empty and can have at the most 64 entries.",
      Compute_getGlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FilterMatchCriteria",
      'Specifies how individual filterLabel matches within the list of\nfilterLabels contribute towards the overall metadataFilter match.\n\nMATCH_ANY - At least one of the filterLabels must have a matching\nlabel in the provided metadata.\nMATCH_ALL - All filterLabels must have matching labels in the\nprovided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]',
      [],
      true,
      false,
    ),
  ];
}
