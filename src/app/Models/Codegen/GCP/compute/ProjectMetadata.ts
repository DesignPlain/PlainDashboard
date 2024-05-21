import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectMetadataArgs {
  /*
A series of key value pairs.

- - -
*/
  metadata?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class ProjectMetadata extends Resource {
  /*
A series of key value pairs.

- - -
*/
  public metadata?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "A series of key value pairs.\n\n- - -",
        InputType_Map_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
