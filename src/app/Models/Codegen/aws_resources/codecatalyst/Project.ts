import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProjectArgs {
  // The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
  description?: string;

  /*
The friendly name of the project that will be displayed to users.

The following arguments are optional:
*/
  displayName?: string;

  // The name of the space.
  spaceName?: string;
}
export class Project extends Resource {
  // The name of the space.
  public spaceName?: string;

  // The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
  public description?: string;

  /*
The friendly name of the project that will be displayed to users.

The following arguments are optional:
*/
  public displayName?: string;

  // The name of the project in the space.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The friendly name of the project that will be displayed to users.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "spaceName",
        "The name of the space.",
        [],
        true,
        false,
      ),
    ];
  }
}
