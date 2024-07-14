import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProjectDefaultNetworkTierArgs {
  /*
The default network tier to be configured for the project.
This field can take the following values: `PREMIUM` or `STANDARD`.

- - -
*/
  networkTier?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class ProjectDefaultNetworkTier extends Resource {
  /*
The default network tier to be configured for the project.
This field can take the following values: `PREMIUM` or `STANDARD`.

- - -
*/
  public networkTier?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "networkTier",
        "The default network tier to be configured for the project.\nThis field can take the following values: `PREMIUM` or `STANDARD`.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
