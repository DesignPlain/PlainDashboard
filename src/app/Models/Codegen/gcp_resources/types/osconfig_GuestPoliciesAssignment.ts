import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_GuestPoliciesAssignmentOsType,
  osconfig_GuestPoliciesAssignmentOsType_GetTypes,
} from "./osconfig_GuestPoliciesAssignmentOsType";
import {
  osconfig_GuestPoliciesAssignmentGroupLabel,
  osconfig_GuestPoliciesAssignmentGroupLabel_GetTypes,
} from "./osconfig_GuestPoliciesAssignmentGroupLabel";

export interface osconfig_GuestPoliciesAssignment {
  /*
Targets VM instances matching at least one of the following OS types.
VM instances must match all supplied criteria for a given OsType to be included.
Structure is documented below.
*/
  osTypes?: Array<osconfig_GuestPoliciesAssignmentOsType>;

  /*
Targets instances in any of these zones. Leave empty to target instances in any zone.
Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
*/
  zones?: Array<string>;

  /*
Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups,
for example "env=prod or env=staging".
Structure is documented below.
*/
  groupLabels?: Array<osconfig_GuestPoliciesAssignmentGroupLabel>;

  /*
Targets VM instances whose name starts with one of these prefixes.
Like labels, this is another way to group VM instances when targeting configs,
for example prefix="prod-".
Only supported for project-level policies.
*/
  instanceNamePrefixes?: Array<string>;

  /*
Targets any of the instances specified. Instances are specified by their URI in the form
zones/[ZONE]/instances/[INSTANCE_NAME].
Instance targeting is uncommon and is supported to facilitate the management of changes
by the instance or to target specific VM instances for development and testing.
Only supported for project-level policies and must reference instances within this project.
*/
  instances?: Array<string>;
}

export function osconfig_GuestPoliciesAssignment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "instanceNamePrefixes",
      'Targets VM instances whose name starts with one of these prefixes.\nLike labels, this is another way to group VM instances when targeting configs,\nfor example prefix="prod-".\nOnly supported for project-level policies.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instances",
      "Targets any of the instances specified. Instances are specified by their URI in the form\nzones/[ZONE]/instances/[INSTANCE_NAME].\nInstance targeting is uncommon and is supported to facilitate the management of changes\nby the instance or to target specific VM instances for development and testing.\nOnly supported for project-level policies and must reference instances within this project.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "osTypes",
      "Targets VM instances matching at least one of the following OS types.\nVM instances must match all supplied criteria for a given OsType to be included.\nStructure is documented below.",
      osconfig_GuestPoliciesAssignmentOsType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "zones",
      "Targets instances in any of these zones. Leave empty to target instances in any zone.\nZonal targeting is uncommon and is supported to facilitate the management of changes by zone.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "groupLabels",
      'Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups,\nfor example "env=prod or env=staging".\nStructure is documented below.',
      osconfig_GuestPoliciesAssignmentGroupLabel_GetTypes(),
      false,
      false,
    ),
  ];
}
