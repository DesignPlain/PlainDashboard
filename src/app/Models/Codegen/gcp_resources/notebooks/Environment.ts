import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  notebooks_EnvironmentVmImage,
  notebooks_EnvironmentVmImage_GetTypes,
} from "../types/notebooks_EnvironmentVmImage";
import {
  notebooks_EnvironmentContainerImage,
  notebooks_EnvironmentContainerImage_GetTypes,
} from "../types/notebooks_EnvironmentContainerImage";

export interface EnvironmentArgs {
  /*
A reference to the zone where the machine resides.


- - -
*/
  location?: string;

  /*
The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId}
*/
  name?: string;

  /*
Path to a Bash script that automatically runs after a notebook instance fully boots up.
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"
*/
  postStartupScript?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  vmImage?: notebooks_EnvironmentVmImage;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  containerImage?: notebooks_EnvironmentContainerImage;

  // A brief description of this environment.
  description?: string;

  // Display name of this environment for the UI.
  displayName?: string;
}
export class Environment extends Resource {
  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  public containerImage?: notebooks_EnvironmentContainerImage;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public location?: string;

  /*
Path to a Bash script that automatically runs after a notebook instance fully boots up.
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"
*/
  public postStartupScript?: string;

  /*
The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId}
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  public vmImage?: notebooks_EnvironmentVmImage;

  // Instance creation time
  public createTime?: string;

  // A brief description of this environment.
  public description?: string;

  // Display name of this environment for the UI.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name specified for the Environment instance.\nFormat: projects/{project_id}/locations/{location}/environments/{environmentId}",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "postStartupScript",
        'Path to a Bash script that automatically runs after a notebook instance fully boots up.\nThe path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"',
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
        InputType.Object,
        "vmImage",
        "Use a Compute Engine VM image to start the notebook instance.\nStructure is documented below.",
        notebooks_EnvironmentVmImage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "containerImage",
        "Use a container image to start the notebook instance.\nStructure is documented below.",
        notebooks_EnvironmentContainerImage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of this environment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Display name of this environment for the UI.",
        [],
        false,
        false,
      ),
    ];
  }
}
