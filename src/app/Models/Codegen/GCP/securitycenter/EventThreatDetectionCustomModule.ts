import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EventThreatDetectionCustomModuleArgs {
  // The human readable name to be displayed for the module.
  DisplayName?: string;

  /*
The state of enablement for the module at the given level of the hierarchy.
Possible values are: `ENABLED`, `DISABLED`.
*/
  EnablementState?: string;

  /*
Numerical ID of the parent organization.


- - -
*/
  Organization?: string;

  // Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.
  Type?: string;

  /*
Config for the module. For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.
*/
  Config?: string;
}
export class EventThreatDetectionCustomModule extends Resource {
  /*
Numerical ID of the parent organization.


- - -
*/
  public Organization?: string;

  // Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.
  public Type?: string;

  /*
The time at which the custom module was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Config for the module. For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.
*/
  public Config?: string;

  // The human readable name to be displayed for the module.
  public DisplayName?: string;

  /*
The state of enablement for the module at the given level of the hierarchy.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public EnablementState?: string;

  // The editor that last updated the custom module
  public LastEditor?: string;

  /*
The resource name of the Event Threat Detection custom module.
Its format is "organizations/{organization}/eventThreatDetectionSettings/customModules/{module}".
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human readable name to be displayed for the module.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "EnablementState",
        "The state of enablement for the module at the given level of the hierarchy.\nPossible values are: `ENABLED`, `DISABLED`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "Numerical ID of the parent organization.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Config",
        "Config for the module. For the resident module, its config value is defined at this level.\nFor the inherited module, its config value is inherited from the ancestor module.",
        [],
        true,
        false,
      ),
    ];
  }
}
