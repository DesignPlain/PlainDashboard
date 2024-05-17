import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectDefaultNetworkTierArgs {
  /*
The default network tier to be configured for the project.
This field can take the following values: `PREMIUM` or `STANDARD`.

- - -
*/
  NetworkTier?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;
}
export class ProjectDefaultNetworkTier extends Resource {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The default network tier to be configured for the project.
This field can take the following values: `PREMIUM` or `STANDARD`.

- - -
*/
  public NetworkTier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NetworkTier",
        "The default network tier to be configured for the project.\nThis field can take the following values: `PREMIUM` or `STANDARD`.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
