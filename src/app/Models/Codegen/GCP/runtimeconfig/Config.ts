import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ConfigArgs {
  /*
The name of the runtime config.

- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The description to associate with the runtime
config.
*/
  Description?: string;
}
export class Config extends Resource {
  /*
The name of the runtime config.

- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The description to associate with the runtime
config.
*/
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the runtime config.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description to associate with the runtime\nconfig.",
      ),
    ];
  }
}
