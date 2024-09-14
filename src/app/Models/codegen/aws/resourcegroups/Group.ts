import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  resourcegroups_GroupConfiguration,
  resourcegroups_GroupConfiguration_GetTypes,
} from "../types/resourcegroups_GroupConfiguration";
import {
  resourcegroups_GroupResourceQuery,
  resourcegroups_GroupResourceQuery_GetTypes,
} from "../types/resourcegroups_GroupResourceQuery";

export interface GroupArgs {
  // A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. See below for details.
  configurations?: Array<resourcegroups_GroupConfiguration>;

  // A description of the resource group.
  description?: string;

  // The resource group's name. A resource group name can have a maximum of 127 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with `AWS` or `aws`.
  name?: string;

  // A `resource_query` block. Resource queries are documented below.
  resourceQuery?: resourcegroups_GroupResourceQuery;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Group extends DS_Resource {
  // The ARN assigned by AWS for this resource group.
  public arn?: string;

  // A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. See below for details.
  public configurations?: Array<resourcegroups_GroupConfiguration>;

  // A description of the resource group.
  public description?: string;

  // The resource group's name. A resource group name can have a maximum of 127 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with `AWS` or `aws`.
  public name?: string;

  // A `resource_query` block. Resource queries are documented below.
  public resourceQuery?: resourcegroups_GroupResourceQuery;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "configurations",
        "A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. See below for details.",
        () => resourcegroups_GroupConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the resource group.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource group's name. A resource group name can have a maximum of 127 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with `AWS` or `aws`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "resourceQuery",
        "A `resource_query` block. Resource queries are documented below.",
        () => resourcegroups_GroupResourceQuery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
