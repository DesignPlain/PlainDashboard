import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Notebooks_EnvironmentVmImage,
  Notebooks_EnvironmentVmImage_GetTypes,
} from "../types/Notebooks_EnvironmentVmImage";
import {
  Notebooks_EnvironmentContainerImage,
  Notebooks_EnvironmentContainerImage_GetTypes,
} from "../types/Notebooks_EnvironmentContainerImage";

export interface EnvironmentArgs {
  // Display name of this environment for the UI.
  DisplayName?: string;

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
  VmImage?: Notebooks_EnvironmentVmImage;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  ContainerImage?: Notebooks_EnvironmentContainerImage;

  // A brief description of this environment.
  Description?: string;
}
export class Environment extends Resource {
  // A brief description of this environment.
  public Description?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Use a Compute Engine VM image to start the notebook instance.
Structure is documented below.
*/
  public VmImage?: Notebooks_EnvironmentVmImage;

  /*
Use a container image to start the notebook instance.
Structure is documented below.
*/
  public ContainerImage?: Notebooks_EnvironmentContainerImage;

  // Instance creation time
  public CreateTime?: string;

  // Display name of this environment for the UI.
  public DisplayName?: string;

  /*
The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId}
*/
  public Name?: string;

  /*
Path to a Bash script that automatically runs after a notebook instance fully boots up.
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"
*/
  public PostStartupScript?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "VmImage",
        "Use a Compute Engine VM image to start the notebook instance.\nStructure is documented below.",
        Notebooks_EnvironmentVmImage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ContainerImage",
        "Use a container image to start the notebook instance.\nStructure is documented below.",
        Notebooks_EnvironmentContainerImage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A brief description of this environment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name of this environment for the UI.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name specified for the Environment instance.\nFormat: projects/{project_id}/locations/{location}/environments/{environmentId}",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PostStartupScript",
        'Path to a Bash script that automatically runs after a notebook instance fully boots up.\nThe path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
