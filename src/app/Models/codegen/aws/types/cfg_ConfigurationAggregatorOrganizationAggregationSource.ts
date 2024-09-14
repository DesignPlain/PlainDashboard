import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cfg_ConfigurationAggregatorOrganizationAggregationSource {
  // If true, aggregate existing AWS Config regions and future regions.
  allRegions?: boolean;

  // List of source regions being aggregated.
  regions?: Array<string>;

  /*
ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account.

Either `regions` or `all_regions` (as true) must be specified.
*/
  roleArn?: string;
}

export function cfg_ConfigurationAggregatorOrganizationAggregationSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "List of source regions being aggregated.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account.\n\nEither `regions` or `all_regions` (as true) must be specified.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allRegions",
      "If true, aggregate existing AWS Config regions and future regions.",
      () => [],
      false,
      false,
    ),
  ];
}
