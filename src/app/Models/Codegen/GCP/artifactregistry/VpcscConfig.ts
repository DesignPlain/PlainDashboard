import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcscConfigArgs {
  // The name of the location this config is located in.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The VPC SC policy for project and location.
Possible values are: `DENY`, `ALLOW`.
*/
  VpcscPolicy?: string;
}
export class VpcscConfig extends Resource {
  // The name of the location this config is located in.
  public Location?: string;

  /*
The name of the project's VPC SC Config.
Always of the form: projects/{project}/location/{location}/vpcscConfig
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The VPC SC policy for project and location.
Possible values are: `DENY`, `ALLOW`.
*/
  public VpcscPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this config is located in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcscPolicy",
        "The VPC SC policy for project and location.\nPossible values are: `DENY`, `ALLOW`.",
        [],
        false,
        false,
      ),
    ];
  }
}
