import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ReleaseArgs {
  // Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will --always-- have the name 'cloud.firestore'
  Name?: string;

  // The project for the resource
  Project?: string;

  /*
Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.



- - -
*/
  RulesetName?: string;
}
export class Release extends Resource {
  // Output only. Time the release was updated.
  public UpdateTime?: string;

  // Output only. Time the release was created.
  public CreateTime?: string;

  // Disable the release to keep it from being served. The response code of NOT_FOUND will be given for executables generated from this Release.
  public Disabled?: boolean;

  // Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will --always-- have the name 'cloud.firestore'
  public Name?: string;

  // The project for the resource
  public Project?: string;

  /*
Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.



- - -
*/
  public RulesetName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RulesetName",
        "Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.\n\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Format: `projects/{project_id}/releases/{release_id}`\\Firestore Rules Releases will **always** have the name 'cloud.firestore'",
        [],
        false,
        true,
      ),
    ];
  }
}
