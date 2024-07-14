import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emrcontainers_VirtualClusterContainerProviderInfoEksInfo,
  emrcontainers_VirtualClusterContainerProviderInfoEksInfo_GetTypes,
} from "./emrcontainers_VirtualClusterContainerProviderInfoEksInfo";

export interface emrcontainers_VirtualClusterContainerProviderInfo {
  // Nested list containing EKS-specific information about the cluster where the EMR Containers cluster is running
  eksInfo?: emrcontainers_VirtualClusterContainerProviderInfoEksInfo;
}

export function emrcontainers_VirtualClusterContainerProviderInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "eksInfo",
      "Nested list containing EKS-specific information about the cluster where the EMR Containers cluster is running",
      emrcontainers_VirtualClusterContainerProviderInfoEksInfo_GetTypes(),
      true,
      true,
    ),
  ];
}
