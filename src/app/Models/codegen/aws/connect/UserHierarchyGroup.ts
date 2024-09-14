import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  connect_UserHierarchyGroupHierarchyPath,
  connect_UserHierarchyGroupHierarchyPath_GetTypes,
} from "../types/connect_UserHierarchyGroupHierarchyPath";

export interface UserHierarchyGroupArgs {
  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // The name of the user hierarchy group. Must not be more than 100 characters.
  name?: string;

  // The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.
  parentGroupId?: string;

  /*
Tags to apply to the hierarchy group. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;
}
export class UserHierarchyGroup extends DS_Resource {
  // The Amazon Resource Name (ARN) of the hierarchy group.
  public arn?: string;

  // The identifier for the hierarchy group.
  public hierarchyGroupId?: string;

  // A block that contains information about the levels in the hierarchy group. The `hierarchy_path` block is documented below.
  public hierarchyPaths?: Array<connect_UserHierarchyGroupHierarchyPath>;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.
  public parentGroupId?: string;

  /*
Tags to apply to the hierarchy group. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The identifier of the level in the hierarchy group.
  public levelId?: string;

  // The name of the user hierarchy group. Must not be more than 100 characters.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the user hierarchy group. Must not be more than 100 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentGroupId",
        "The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the hierarchy group. If configured with a provider\n`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
