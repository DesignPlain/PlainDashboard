import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AppregistryApplicationArgs {
  // Description of the application.
  description?: string;

  /*
Name of the application. The name must be unique within an AWS region.

The following arguments are optional:
*/
  name?: string;
}
export class AppregistryApplication extends DS_Resource {
  // ARN (Amazon Resource Name) of the application.
  public arn?: string;

  // Description of the application.
  public description?: string;

  /*
Name of the application. The name must be unique within an AWS region.

The following arguments are optional:
*/
  public name?: string;

  // A map with a single tag key-value pair used to associate resources with the application. This attribute can be passed directly into the `tags` argument of another resource, or merged into a map of existing tags.
  public applicationTag?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the application.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the application. The name must be unique within an AWS region.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
    ];
  }
}
