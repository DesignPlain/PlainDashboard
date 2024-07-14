import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GroupArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A user-assigned name for this group, used only for display
purposes.
*/
  displayName?: string;

  /*
The filter used to determine which monitored resources
belong to this group.


- - -
*/
  filter?: string;

  /*
If true, the members of this group are considered to be a
cluster. The system can perform additional analysis on
groups that are clusters.
*/
  isCluster?: boolean;

  /*
The name of the group's parent, if it has one. The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "".
*/
  parentName?: string;
}
export class Group extends Resource {
  /*
A user-assigned name for this group, used only for display
purposes.
*/
  public displayName?: string;

  /*
The filter used to determine which monitored resources
belong to this group.


- - -
*/
  public filter?: string;

  /*
If true, the members of this group are considered to be a
cluster. The system can perform additional analysis on
groups that are clusters.
*/
  public isCluster?: boolean;

  /*
A unique identifier for this group. The format is
"projects/{project_id_or_number}/groups/{group_id}".
*/
  public name?: string;

  /*
The name of the group's parent, if it has one. The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "".
*/
  public parentName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parentName",
        'The name of the group\'s parent, if it has one. The format is\n"projects/{project_id_or_number}/groups/{group_id}". For\ngroups with no parent, parentName is the empty string, "".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A user-assigned name for this group, used only for display\npurposes.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filter",
        "The filter used to determine which monitored resources\nbelong to this group.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isCluster",
        "If true, the members of this group are considered to be a\ncluster. The system can perform additional analysis on\ngroups that are clusters.",
        [],
        false,
        false,
      ),
    ];
  }
}
