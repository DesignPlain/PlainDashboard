import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ReleaseArgs {
  // Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will --always-- have the name 'cloud.firestore'
  name?: string;

  // The project for the resource
  project?: string;

  /*
Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.



- - -
*/
  rulesetName?: string;
}
export class Release extends DS_Resource {
  // Output only. Time the release was created.
  public createTime?: string;

  // Disable the release to keep it from being served. The response code of NOT_FOUND will be given for executables generated from this Release.
  public disabled?: boolean;

  // Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will --always-- have the name 'cloud.firestore'
  public name?: string;

  // The project for the resource
  public project?: string;

  /*
Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.



- - -
*/
  public rulesetName?: string;

  // Output only. Time the release was updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Format: `projects/{project_id}/releases/{release_id}`\\Firestore Rules Releases will **always** have the name 'cloud.firestore'",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "rulesetName",
        "Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.\n\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
