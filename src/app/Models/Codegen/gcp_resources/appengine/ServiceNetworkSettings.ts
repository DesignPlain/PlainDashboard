import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_ServiceNetworkSettingsNetworkSettings,
  appengine_ServiceNetworkSettingsNetworkSettings_GetTypes,
} from "../types/appengine_ServiceNetworkSettingsNetworkSettings";

export interface ServiceNetworkSettingsArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The name of the service these settings apply to.
  service?: string;

  /*
Ingress settings for this service. Will apply to all versions.
Structure is documented below.
*/
  networkSettings?: appengine_ServiceNetworkSettingsNetworkSettings;
}
export class ServiceNetworkSettings extends Resource {
  /*
Ingress settings for this service. Will apply to all versions.
Structure is documented below.
*/
  public networkSettings?: appengine_ServiceNetworkSettingsNetworkSettings;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The name of the service these settings apply to.
  public service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "The name of the service these settings apply to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkSettings",
        "Ingress settings for this service. Will apply to all versions.\nStructure is documented below.",
        appengine_ServiceNetworkSettingsNetworkSettings_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
