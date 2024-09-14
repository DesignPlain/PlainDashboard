import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emrcontainers_getVirtualClusterContainerProviderInfoEksInfo,
  emrcontainers_getVirtualClusterContainerProviderInfoEksInfo_GetTypes,
} from "./emrcontainers_getVirtualClusterContainerProviderInfoEksInfo";

export interface emrcontainers_getVirtualClusterContainerProviderInfo {
  // Nested list containing EKS-specific information about the cluster where the EMR Containers cluster is running
  eksInfos?: Array<emrcontainers_getVirtualClusterContainerProviderInfoEksInfo>;
}

export function emrcontainers_getVirtualClusterContainerProviderInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "eksInfos",
      "Nested list containing EKS-specific information about the cluster where the EMR Containers cluster is running",
      () =>
        emrcontainers_getVirtualClusterContainerProviderInfoEksInfo_GetTypes(),
      true,
      false,
    ),
  ];
}
