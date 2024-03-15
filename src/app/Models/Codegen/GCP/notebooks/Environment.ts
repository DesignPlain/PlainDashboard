import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EnvironmentVmImage } from "../types/EnvironmentVmImage";
import { EnvironmentContainerImage } from "../types/EnvironmentContainerImage";

export interface EnvironmentArgs {
  /*
A reference to the zone where the machine resides.


- - -
*/
  Location?: string;

  /*
The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId}
*/
  Name?: string;

  /*
Path to a Bash script that automatically runs after a notebook instance fully boots up.
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"
*/
  PostStartupScript?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  VmImage?: EnvironmentVmImage;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  ContainerImage?: EnvironmentContainerImage;

  // A brief description of this environment.
  Description?: string;

  // Display name of this environment for the UI.
  DisplayName?: string;
}
export class Environment extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  public VmImage?: EnvironmentVmImage;

  // Instance creation time
  public CreateTime?: string;

  /*
The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId}
*/
  public Name?: string;

  // Display name of this environment for the UI.
  public DisplayName?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public Location?: string;

  /*
Path to a Bash script that automatically runs after a notebook instance fully boots up.
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"
*/
  public PostStartupScript?: string;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  public ContainerImage?: EnvironmentContainerImage;

  // A brief description of this environment.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VmImage",
        "Use a Compute Engine VM image to start the notebook instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContainerImage",
        "Use a container image to start the notebook instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of this environment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name of this environment for the UI.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name specified for the Environment instance.\nFormat: projects/{project_id}/locations/{location}/environments/{environmentId}",
      ),
      new DynamicUIProps(
        InputType.String,
        "PostStartupScript",
        'Path to a Bash script that automatically runs after a notebook instance fully boots up.\nThe path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"',
      ),
    ];
  }
}
