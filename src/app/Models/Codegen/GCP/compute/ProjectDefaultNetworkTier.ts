import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectDefaultNetworkTierArgs {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The default network tier to be configured for the project.
This field can take the following values: `PREMIUM` or `STANDARD`.

- - -
*/
  NetworkTier?: string;
}
export class ProjectDefaultNetworkTier extends Resource {
  /*
The default network tier to be configured for the project.
This field can take the following values: `PREMIUM` or `STANDARD`.

- - -
*/
  public NetworkTier?: string;

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
        "NetworkTier",
        "The default network tier to be configured for the project.\nThis field can take the following values: `PREMIUM` or `STANDARD`.\n\n- - -",
      ),
    ];
  }
}
