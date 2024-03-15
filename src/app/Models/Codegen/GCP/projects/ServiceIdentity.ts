import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServiceIdentityArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The service to generate identity for.

- - -
*/
  Service?: string;
}
export class ServiceIdentity extends Resource {
  /*
The service to generate identity for.

- - -
*/
  public Service?: string;

  // The email address of the Google managed service account.
  public Email?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The service to generate identity for.\n\n- - -",
      ),
    ];
  }
}
