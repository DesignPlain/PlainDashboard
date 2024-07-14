import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cfg_ConfigurationAggregatorOrganizationAggregationSource,
  cfg_ConfigurationAggregatorOrganizationAggregationSource_GetTypes,
} from "../types/cfg_ConfigurationAggregatorOrganizationAggregationSource";
import {
  cfg_ConfigurationAggregatorAccountAggregationSource,
  cfg_ConfigurationAggregatorAccountAggregationSource_GetTypes,
} from "../types/cfg_ConfigurationAggregatorAccountAggregationSource";

export interface ConfigurationAggregatorArgs {
  // The name of the configuration aggregator.
  name?: string;

  // The organization to aggregate config data from as documented below.
  organizationAggregationSource?: cfg_ConfigurationAggregatorOrganizationAggregationSource;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

Either `account_aggregation_source` or `organization_aggregation_source` must be specified.
*/
  tags?: Map<string, string>;

  // The account(s) to aggregate config data from as documented below.
  accountAggregationSource?: cfg_ConfigurationAggregatorAccountAggregationSource;
}
export class ConfigurationAggregator extends Resource {
  // The account(s) to aggregate config data from as documented below.
  public accountAggregationSource?: cfg_ConfigurationAggregatorAccountAggregationSource;

  // The ARN of the aggregator
  public arn?: string;

  // The name of the configuration aggregator.
  public name?: string;

  // The organization to aggregate config data from as documented below.
  public organizationAggregationSource?: cfg_ConfigurationAggregatorOrganizationAggregationSource;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

Either `account_aggregation_source` or `organization_aggregation_source` must be specified.
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "accountAggregationSource",
        "The account(s) to aggregate config data from as documented below.",
        cfg_ConfigurationAggregatorAccountAggregationSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the configuration aggregator.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "organizationAggregationSource",
        "The organization to aggregate config data from as documented below.",
        cfg_ConfigurationAggregatorOrganizationAggregationSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nEither `account_aggregation_source` or `organization_aggregation_source` must be specified.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
