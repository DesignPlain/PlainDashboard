import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getGlobalForwardingRuleMetadataFilterFilterLabel,
  compute_getGlobalForwardingRuleMetadataFilterFilterLabel_GetTypes,
} from "./compute_getGlobalForwardingRuleMetadataFilterFilterLabel";

export interface compute_getGlobalForwardingRuleMetadataFilter {
  /*
The list of label value pairs that must match labels in the
provided metadata based on filterMatchCriteria

This list must not be empty and can have at the most 64 entries.
*/
  filterLabels?: Array<compute_getGlobalForwardingRuleMetadataFilterFilterLabel>;

  /*
Specifies how individual filterLabel matches within the list of
filterLabels contribute towards the overall metadataFilter match.

MATCH_ANY - At least one of the filterLabels must have a matching
label in the provided metadata.
MATCH_ALL - All filterLabels must have matching labels in the
provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]
*/
  filterMatchCriteria?: string;
}

export function compute_getGlobalForwardingRuleMetadataFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filterLabels",
      "The list of label value pairs that must match labels in the\nprovided metadata based on filterMatchCriteria\n\nThis list must not be empty and can have at the most 64 entries.",
      compute_getGlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterMatchCriteria",
      'Specifies how individual filterLabel matches within the list of\nfilterLabels contribute towards the overall metadataFilter match.\n\nMATCH_ANY - At least one of the filterLabels must have a matching\nlabel in the provided metadata.\nMATCH_ALL - All filterLabels must have matching labels in the\nprovided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]',
      [],
      true,
      false,
    ),
  ];
}
