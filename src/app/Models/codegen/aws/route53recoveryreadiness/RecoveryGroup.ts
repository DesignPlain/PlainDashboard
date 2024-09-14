import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RecoveryGroupArgs {
  // List of cell arns to add as nested fault domains within this recovery group
  cells?: Array<string>;

  /*
A unique name describing the recovery group.

The following argument are optional:
*/
  recoveryGroupName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;
}
export class RecoveryGroup extends DS_Resource {
  // ARN of the recovery group
  public arn?: string;

  // List of cell arns to add as nested fault domains within this recovery group
  public cells?: Array<string>;

  /*
A unique name describing the recovery group.

The following argument are optional:
*/
  public recoveryGroupName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cells",
        "List of cell arns to add as nested fault domains within this recovery group",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "recoveryGroupName",
        "A unique name describing the recovery group.\n\nThe following argument are optional:",
        () => [],
        true,
        true,
      ),
    ];
  }
}
