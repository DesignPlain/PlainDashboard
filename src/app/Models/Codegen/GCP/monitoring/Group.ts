import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GroupArgs {
  /*
The name of the group's parent, if it has one. The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "".
*/
  ParentName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A user-assigned name for this group, used only for display
purposes.
*/
  DisplayName?: string;

  /*
The filter used to determine which monitored resources
belong to this group.


- - -
*/
  Filter?: string;

  /*
If true, the members of this group are considered to be a
cluster. The system can perform additional analysis on
groups that are clusters.
*/
  IsCluster?: boolean;
}
export class Group extends Resource {
  /*
A unique identifier for this group. The format is
"projects/{project_id_or_number}/groups/{group_id}".
*/
  public Name?: string;

  /*
The name of the group's parent, if it has one. The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "".
*/
  public ParentName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A user-assigned name for this group, used only for display
purposes.
*/
  public DisplayName?: string;

  /*
The filter used to determine which monitored resources
belong to this group.


- - -
*/
  public Filter?: string;

  /*
If true, the members of this group are considered to be a
cluster. The system can perform additional analysis on
groups that are clusters.
*/
  public IsCluster?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ParentName",
        'The name of the group\'s parent, if it has one. The format is\n"projects/{project_id_or_number}/groups/{group_id}". For\ngroups with no parent, parentName is the empty string, "".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-assigned name for this group, used only for display\npurposes.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "The filter used to determine which monitored resources\nbelong to this group.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IsCluster",
        "If true, the members of this group are considered to be a\ncluster. The system can perform additional analysis on\ngroups that are clusters.",
      ),
    ];
  }
}
