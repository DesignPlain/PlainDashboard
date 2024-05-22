import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration,
  appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration";
import {
  appmesh_VirtualNodeSpecListenerOutlierDetectionInterval,
  appmesh_VirtualNodeSpecListenerOutlierDetectionInterval_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerOutlierDetectionInterval";

export interface appmesh_VirtualNodeSpecListenerOutlierDetection {
  // Base amount of time for which a host is ejected.
  baseEjectionDuration?: appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;

  // Time interval between ejection sweep analysis.
  interval?: appmesh_VirtualNodeSpecListenerOutlierDetectionInterval;

  /*
Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at least one host regardless of the value.
Minimum value of `0`. Maximum value of `100`.
*/
  maxEjectionPercent?: number;

  // Number of consecutive `5xx` errors required for ejection. Minimum value of `1`.
  maxServerErrors?: number;
}

export function appmesh_VirtualNodeSpecListenerOutlierDetection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "baseEjectionDuration",
      "Base amount of time for which a host is ejected.",
      appmesh_VirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "interval",
      "Time interval between ejection sweep analysis.",
      appmesh_VirtualNodeSpecListenerOutlierDetectionInterval_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxEjectionPercent",
      "Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at least one host regardless of the value.\nMinimum value of `0`. Maximum value of `100`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxServerErrors",
      "Number of consecutive `5xx` errors required for ejection. Minimum value of `1`.",
      [],
      true,
      false,
    ),
  ];
}
