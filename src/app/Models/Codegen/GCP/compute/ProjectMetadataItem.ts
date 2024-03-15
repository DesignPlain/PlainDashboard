import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectMetadataItemArgs {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The value to set for the given metadata key.

- - -
*/
  Value?: string;

  // The metadata key to set.
  Key?: string;
}
export class ProjectMetadataItem extends Resource {
  /*
The value to set for the given metadata key.

- - -
*/
  public Value?: string;

  // The metadata key to set.
  public Key?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Value",
        "The value to set for the given metadata key.\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Key", "The metadata key to set."),
    ];
  }
}
