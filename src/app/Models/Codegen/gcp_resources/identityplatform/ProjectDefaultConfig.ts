import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_ProjectDefaultConfigSignIn,
  identityplatform_ProjectDefaultConfigSignIn_GetTypes,
} from "../types/identityplatform_ProjectDefaultConfigSignIn";

export interface ProjectDefaultConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  signIn?: identityplatform_ProjectDefaultConfigSignIn;
}
export class ProjectDefaultConfig extends Resource {
  // The name of the Config resource. Example: "projects/my-awesome-project/config"
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public signIn?: identityplatform_ProjectDefaultConfigSignIn;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "signIn",
        "Configuration related to local sign in methods.\nStructure is documented below.",
        identityplatform_ProjectDefaultConfigSignIn_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
