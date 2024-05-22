import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cfg_ConfigurationAggregatorAccountAggregationSource {
  // List of 12-digit account IDs of the account(s) being aggregated.
  accountIds?: Array<string>;

  // If true, aggregate existing AWS Config regions and future regions.
  allRegions?: boolean;

  /*
List of source regions being aggregated.

Either `regions` or `all_regions` (as true) must be specified.
*/
  regions?: Array<string>;
}

export function cfg_ConfigurationAggregatorAccountAggregationSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allRegions",
      "If true, aggregate existing AWS Config regions and future regions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "List of source regions being aggregated.\n\nEither `regions` or `all_regions` (as true) must be specified.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accountIds",
      "List of 12-digit account IDs of the account(s) being aggregated.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
