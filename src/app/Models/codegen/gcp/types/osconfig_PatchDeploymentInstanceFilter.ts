import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_PatchDeploymentInstanceFilterGroupLabel,
  osconfig_PatchDeploymentInstanceFilterGroupLabel_GetTypes,
} from "./osconfig_PatchDeploymentInstanceFilterGroupLabel";

export interface osconfig_PatchDeploymentInstanceFilter {
  /*
Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.
Structure is documented below.
*/
  groupLabels?: Array<osconfig_PatchDeploymentInstanceFilterGroupLabel>;

  /*
Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".
*/
  instanceNamePrefixes?: Array<string>;

  /*
Targets any of the VM instances specified. Instances are specified by their URI in the `form zones/{{zone}}/instances/{{instance_name}}`,
`projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`, or
`https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`
*/
  instances?: Array<string>;

  // Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
  zones?: Array<string>;

  // Target all VM instances in the project. If true, no other criteria is permitted.
  all?: boolean;
}

export function osconfig_PatchDeploymentInstanceFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "zones",
      "Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "all",
      "Target all VM instances in the project. If true, no other criteria is permitted.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "groupLabels",
      "Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.\nStructure is documented below.",
      () => osconfig_PatchDeploymentInstanceFilterGroupLabel_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceNamePrefixes",
      'Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group\nVMs when targeting configs, for example prefix="prod-".',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instances",
      "Targets any of the VM instances specified. Instances are specified by their URI in the `form zones/{{zone}}/instances/{{instance_name}}`,\n`projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`, or\n`https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
