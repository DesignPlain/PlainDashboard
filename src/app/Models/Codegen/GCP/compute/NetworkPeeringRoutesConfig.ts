import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringRoutesConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

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
}
export class NetworkPeeringRoutesConfig extends Resource {
  // Whether to export the custom routes to the peer network.
  public ExportCustomRoutes?: boolean;

  // Whether to import the custom routes to the peer network.
  public ImportCustomRoutes?: boolean;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ExportCustomRoutes",
        "Whether to export the custom routes to the peer network.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ImportCustomRoutes",
        "Whether to import the custom routes to the peer network.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The name of the primary network for the peering.\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Peering", "Name of the peering."),
    ];
  }
}
