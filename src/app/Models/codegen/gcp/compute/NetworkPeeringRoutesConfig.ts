import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface NetworkPeeringRoutesConfigArgs {
  // Whether to export the custom routes to the peer network.
  exportCustomRoutes?: boolean;

  // Whether to import the custom routes to the peer network.
  importCustomRoutes?: boolean;

  /*
The name of the primary network for the peering.


- - -
*/
  network?: string;

  // Name of the peering.
  peering?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class NetworkPeeringRoutesConfig extends DS_Resource {
  // Whether to import the custom routes to the peer network.
  public importCustomRoutes?: boolean;

  /*
The name of the primary network for the peering.


- - -
*/
  public network?: string;

  // Name of the peering.
  public peering?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Whether to export the custom routes to the peer network.
  public exportCustomRoutes?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "exportCustomRoutes",
        "Whether to export the custom routes to the peer network.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "importCustomRoutes",
        "Whether to import the custom routes to the peer network.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The name of the primary network for the peering.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "peering",
        "Name of the peering.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
