import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringRoutesConfigArgs {
  // Whether to export the custom routes to the peer network.
  ExportCustomRoutes?: boolean;

  // Whether to import the custom routes to the peer network.
  ImportCustomRoutes?: boolean;

  /*
The name of the primary network for the peering.


- - -
*/
  Network?: string;

  // Name of the peering.
  Peering?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class NetworkPeeringRoutesConfig extends Resource {
  /*
The name of the primary network for the peering.


- - -
*/
  public Network?: string;

  // Name of the peering.
  public Peering?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Whether to export the custom routes to the peer network.
  public ExportCustomRoutes?: boolean;

  // Whether to import the custom routes to the peer network.
  public ImportCustomRoutes?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "ExportCustomRoutes",
        "Whether to export the custom routes to the peer network.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ImportCustomRoutes",
        "Whether to import the custom routes to the peer network.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The name of the primary network for the peering.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Peering",
        "Name of the peering.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
