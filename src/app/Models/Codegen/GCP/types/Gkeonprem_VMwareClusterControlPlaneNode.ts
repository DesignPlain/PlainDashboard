import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig,
  gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig_GetTypes,
} from "./gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig";
import {
  gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig,
  gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig_GetTypes,
} from "./gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig";

export interface gkeonprem_VMwareClusterControlPlaneNode {
  /*
AutoResizeConfig provides auto resizing configurations.
Structure is documented below.
*/
  autoResizeConfig?: gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig;

  /*
The number of CPUs for each admin cluster node that serve as control planes
for this VMware User Cluster. (default: 4 CPUs)
*/
  cpus?: number;

  /*
The megabytes of memory for each admin cluster node that serves as a
control plane for this VMware User Cluster (default: 8192 MB memory).
*/
  memory?: number;

  /*
The number of control plane nodes for this VMware User Cluster.
(default: 1 replica).
*/
  replicas?: number;

  /*
(Output)
Vsphere-specific config.
Structure is documented below.
*/
  vsphereConfigs?: Array<gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig>;
}

export function gkeonprem_VMwareClusterControlPlaneNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "memory",
      "The megabytes of memory for each admin cluster node that serves as a\ncontrol plane for this VMware User Cluster (default: 8192 MB memory).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "replicas",
      "The number of control plane nodes for this VMware User Cluster.\n(default: 1 replica).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vsphereConfigs",
      "(Output)\nVsphere-specific config.\nStructure is documented below.",
      gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoResizeConfig",
      "AutoResizeConfig provides auto resizing configurations.\nStructure is documented below.",
      gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpus",
      "The number of CPUs for each admin cluster node that serve as control planes\nfor this VMware User Cluster. (default: 4 CPUs)",
      [],
      false,
      false,
    ),
  ];
}
