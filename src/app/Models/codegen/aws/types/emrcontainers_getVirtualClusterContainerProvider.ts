import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emrcontainers_getVirtualClusterContainerProviderInfo,
  emrcontainers_getVirtualClusterContainerProviderInfo_GetTypes,
} from "./emrcontainers_getVirtualClusterContainerProviderInfo";

export interface emrcontainers_getVirtualClusterContainerProvider {
  // The type of the container provider
  type?: string;

  // The name of the container provider that is running your EMR Containers cluster
  id?: string;

  // Nested list containing information about the configuration of the container provider
  infos?: Array<emrcontainers_getVirtualClusterContainerProviderInfo>;
}

export function emrcontainers_getVirtualClusterContainerProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "infos",
      "Nested list containing information about the configuration of the container provider",
      () => emrcontainers_getVirtualClusterContainerProviderInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the container provider",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The name of the container provider that is running your EMR Containers cluster",
      () => [],
      true,
      false,
    ),
  ];
}
