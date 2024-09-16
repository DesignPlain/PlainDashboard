import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EventThreatDetectionCustomModuleArgs {
  // Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.
  type?: string;

  /*
Config for the module. For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.
*/
  config?: string;

  // The human readable name to be displayed for the module.
  displayName?: string;

  /*
The state of enablement for the module at the given level of the hierarchy.
Possible values are: `ENABLED`, `DISABLED`.
*/
  enablementState?: string;

  /*
Numerical ID of the parent organization.


- - -
*/
  organization?: string;
}
export class EventThreatDetectionCustomModule extends DS_Resource {
  /*
The resource name of the Event Threat Detection custom module.
Its format is "organizations/{organization}/eventThreatDetectionSettings/customModules/{module}".
*/
  public name?: string;

  /*
Numerical ID of the parent organization.


- - -
*/
  public organization?: string;

  // Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.
  public type?: string;

  /*
The time at which the custom module was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
Config for the module. For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.
*/
  public config?: string;

  // The human readable name to be displayed for the module.
  public displayName?: string;

  /*
The state of enablement for the module at the given level of the hierarchy.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public enablementState?: string;

  // The editor that last updated the custom module
  public lastEditor?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'enablementState',
        'The state of enablement for the module at the given level of the hierarchy.\nPossible values are: `ENABLED`, `DISABLED`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'organization',
        'Numerical ID of the parent organization.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'config',
        'Config for the module. For the resident module, its config value is defined at this level.\nFor the inherited module, its config value is inherited from the ancestor module.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The human readable name to be displayed for the module.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
