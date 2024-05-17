import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig,
  Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig";
import {
  Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig,
  Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig";

export interface Gkeonprem_VMwareClusterControlPlaneNode {
  /*
AutoResizeConfig provides auto resizing configurations.
Structure is documented below.
*/
  AutoResizeConfig?: Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig;

  /*
The number of CPUs for each admin cluster node that serve as control planes
for this VMware User Cluster. (default: 4 CPUs)
*/
  Cpus?: number;

  /*
The megabytes of memory for each admin cluster node that serves as a
control plane for this VMware User Cluster (default: 8192 MB memory).
*/
  Memory?: number;

  /*
The number of control plane nodes for this VMware User Cluster.
(default: 1 replica).
*/
  Replicas?: number;

  /*
(Output)
Vsphere-specific config.
Structure is documented below.
*/
  VsphereConfigs?: Array<Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig>;
}

export function Gkeonprem_VMwareClusterControlPlaneNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AutoResizeConfig",
      "AutoResizeConfig provides auto resizing configurations.\nStructure is documented below.",
      Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpus",
      "The number of CPUs for each admin cluster node that serve as control planes\nfor this VMware User Cluster. (default: 4 CPUs)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Memory",
      "The megabytes of memory for each admin cluster node that serves as a\ncontrol plane for this VMware User Cluster (default: 8192 MB memory).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Replicas",
      "The number of control plane nodes for this VMware User Cluster.\n(default: 1 replica).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VsphereConfigs",
      "(Output)\nVsphere-specific config.\nStructure is documented below.",
      Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
