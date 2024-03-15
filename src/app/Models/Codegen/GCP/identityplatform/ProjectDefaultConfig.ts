import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ProjectDefaultConfigSignIn } from "../types/ProjectDefaultConfigSignIn";

export interface ProjectDefaultConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  SignIn?: ProjectDefaultConfigSignIn;
}
export class ProjectDefaultConfig extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public SignIn?: ProjectDefaultConfigSignIn;

  // The name of the Config resource. Example: "projects/my-awesome-project/config"
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SignIn",
        "Configuration related to local sign in methods.\nStructure is documented below.",
      ),
    ];
  }
}
