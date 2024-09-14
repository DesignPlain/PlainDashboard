import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_DistributionConfigurationDistribution,
  imagebuilder_DistributionConfigurationDistribution_GetTypes,
} from "../types/imagebuilder_DistributionConfigurationDistribution";

export interface DistributionConfigurationArgs {
  // Description of the distribution configuration.
  description?: string;

  /*
One or more configuration blocks with distribution settings. Detailed below.

The following arguments are optional:
*/
  distributions?: Array<imagebuilder_DistributionConfigurationDistribution>;

  // Name of the distribution configuration.
  name?: string;

  // Key-value map of resource tags for the distribution configuration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DistributionConfiguration extends DS_Resource {
  /*
One or more configuration blocks with distribution settings. Detailed below.

The following arguments are optional:
*/
  public distributions?: Array<imagebuilder_DistributionConfigurationDistribution>;

  // Name of the distribution configuration.
  public name?: string;

  // Key-value map of resource tags for the distribution configuration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // (Required) Amazon Resource Name (ARN) of the distribution configuration.
  public arn?: string;

  // Date the distribution configuration was created.
  public dateCreated?: string;

  // Date the distribution configuration was updated.
  public dateUpdated?: string;

  // Description of the distribution configuration.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the distribution configuration.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "distributions",
        "One or more configuration blocks with distribution settings. Detailed below.\n\nThe following arguments are optional:",
        () => imagebuilder_DistributionConfigurationDistribution_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the distribution configuration.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the distribution configuration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
