import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  route53recoveryreadiness_ResourceSetResource,
  route53recoveryreadiness_ResourceSetResource_GetTypes,
} from "../types/route53recoveryreadiness_ResourceSetResource";

export interface ResourceSetArgs {
  /*
List of resources to add to this resource set. See below.

The following arguments are optional:
*/
  resources?: Array<route53recoveryreadiness_ResourceSetResource>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // Unique name describing the resource set.
  resourceSetName?: string;

  // Type of the resources in the resource set.
  resourceSetType?: string;
}
export class ResourceSet extends DS_Resource {
  /*
List of resources to add to this resource set. See below.

The following arguments are optional:
*/
  public resources?: Array<route53recoveryreadiness_ResourceSetResource>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
ARN of the resource set
- `resources.#.component_id` - Unique identified for DNS Target Resources, use for readiness checks.
*/
  public arn?: string;

  // Unique name describing the resource set.
  public resourceSetName?: string;

  // Type of the resources in the resource set.
  public resourceSetType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "resources",
        "List of resources to add to this resource set. See below.\n\nThe following arguments are optional:",
        () => route53recoveryreadiness_ResourceSetResource_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceSetName",
        "Unique name describing the resource set.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceSetType",
        "Type of the resources in the resource set.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
