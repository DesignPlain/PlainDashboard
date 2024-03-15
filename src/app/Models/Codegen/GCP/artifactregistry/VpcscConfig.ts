import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcscConfigArgs {
  /*
The VPC SC policy for project and location.
Possible values are: `DENY`, `ALLOW`.
*/
  VpcscPolicy?: string;

  // The name of the location this config is located in.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class VpcscConfig extends Resource {
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

  // The name of the location this config is located in.
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "VpcscPolicy",
        "The VPC SC policy for project and location.\nPossible values are: `DENY`, `ALLOW`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this config is located in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
