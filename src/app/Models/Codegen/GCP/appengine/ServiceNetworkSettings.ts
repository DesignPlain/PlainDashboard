import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_ServiceNetworkSettingsNetworkSettings,
  Appengine_ServiceNetworkSettingsNetworkSettings_GetTypes,
} from "../types/Appengine_ServiceNetworkSettingsNetworkSettings";

export interface ServiceNetworkSettingsArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of the service these settings apply to.
  Service?: string;

  /*
Ingress settings for this service. Will apply to all versions.
Structure is documented below.
*/
  NetworkSettings?: Appengine_ServiceNetworkSettingsNetworkSettings;
}
export class ServiceNetworkSettings extends Resource {
  /*
Ingress settings for this service. Will apply to all versions.
Structure is documented below.
*/
  public NetworkSettings?: Appengine_ServiceNetworkSettingsNetworkSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The name of the service these settings apply to.
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The name of the service these settings apply to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkSettings",
        "Ingress settings for this service. Will apply to all versions.\nStructure is documented below.",
        Appengine_ServiceNetworkSettingsNetworkSettings_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
