import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServiceNetworkSettingsNetworkSettings } from "../types/ServiceNetworkSettingsNetworkSettings";

export interface ServiceNetworkSettingsArgs {
  /*
Ingress settings for this service. Will apply to all versions.
Structure is documented below.
*/
  NetworkSettings?: ServiceNetworkSettingsNetworkSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of the service these settings apply to.
  Service?: string;
}
export class ServiceNetworkSettings extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The name of the service these settings apply to.
  public Service?: string;

  /*
Ingress settings for this service. Will apply to all versions.
Structure is documented below.
*/
  public NetworkSettings?: ServiceNetworkSettingsNetworkSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The name of the service these settings apply to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkSettings",
        "Ingress settings for this service. Will apply to all versions.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
