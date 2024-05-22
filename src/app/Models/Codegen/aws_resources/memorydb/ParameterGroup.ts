import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  memorydb_ParameterGroupParameter,
  memorydb_ParameterGroupParameter_GetTypes,
} from "../types/memorydb_ParameterGroupParameter";

export interface ParameterGroupArgs {
  // Description for the parameter group.
  description?: string;

  /*
The engine version that the parameter group can be used with.

The following arguments are optional:
*/
  family?: string;

  // Name of the parameter group. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // Set of MemoryDB parameters to apply. Any parameters not specified will fall back to their family defaults. Detailed below.
  parameters?: Array<memorydb_ParameterGroupParameter>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ParameterGroup extends Resource {
  // Name of the parameter group. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Set of MemoryDB parameters to apply. Any parameters not specified will fall back to their family defaults. Detailed below.
  public parameters?: Array<memorydb_ParameterGroupParameter>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the parameter group.
  public arn?: string;

  // Description for the parameter group.
  public description?: string;

  /*
The engine version that the parameter group can be used with.

The following arguments are optional:
*/
  public family?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the parameter group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "family",
        "The engine version that the parameter group can be used with.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the parameter group. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "Set of MemoryDB parameters to apply. Any parameters not specified will fall back to their family defaults. Detailed below.",
        memorydb_ParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
