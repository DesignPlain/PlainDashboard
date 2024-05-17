import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentInstanceFilterGroupLabel,
  Osconfig_PatchDeploymentInstanceFilterGroupLabel_GetTypes,
} from "./Osconfig_PatchDeploymentInstanceFilterGroupLabel";

export interface Osconfig_PatchDeploymentInstanceFilter {
  // Target all VM instances in the project. If true, no other criteria is permitted.
  All?: boolean;

  /*
Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.
Structure is documented below.
*/
  GroupLabels?: Array<Osconfig_PatchDeploymentInstanceFilterGroupLabel>;

  /*
Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".
*/
  InstanceNamePrefixes?: Array<string>;

  /*
Targets any of the VM instances specified. Instances are specified by their URI in the `form zones/{{zone}}/instances/{{instance_name}}`,
`projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`, or
`https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`
*/
  Instances?: Array<string>;

  // Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
  Zones?: Array<string>;
}

export function Osconfig_PatchDeploymentInstanceFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "All",
      "Target all VM instances in the project. If true, no other criteria is permitted.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GroupLabels",
      "Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.\nStructure is documented below.",
      Osconfig_PatchDeploymentInstanceFilterGroupLabel_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceNamePrefixes",
      'Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group\nVMs when targeting configs, for example prefix="prod-".',
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Instances",
      "Targets any of the VM instances specified. Instances are specified by their URI in the `form zones/{{zone}}/instances/{{instance_name}}`,\n`projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`, or\n`https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}`",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Zones",
      "Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
