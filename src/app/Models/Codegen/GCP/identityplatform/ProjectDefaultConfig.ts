import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ProjectDefaultConfigSignIn,
  Identityplatform_ProjectDefaultConfigSignIn_GetTypes,
} from "../types/Identityplatform_ProjectDefaultConfigSignIn";

export interface ProjectDefaultConfigArgs {
  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  SignIn?: Identityplatform_ProjectDefaultConfigSignIn;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ProjectDefaultConfig extends Resource {
  // The name of the Config resource. Example: "projects/my-awesome-project/config"
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public SignIn?: Identityplatform_ProjectDefaultConfigSignIn;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "SignIn",
        "Configuration related to local sign in methods.\nStructure is documented below.",
        Identityplatform_ProjectDefaultConfigSignIn_GetTypes(),
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
