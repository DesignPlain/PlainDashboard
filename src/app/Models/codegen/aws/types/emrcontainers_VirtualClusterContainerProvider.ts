import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emrcontainers_VirtualClusterContainerProviderInfo,
  emrcontainers_VirtualClusterContainerProviderInfo_GetTypes,
} from './emrcontainers_VirtualClusterContainerProviderInfo';

export interface emrcontainers_VirtualClusterContainerProvider {
  // The type of the container provider
  type?: string;

  // The name of the container provider that is running your EMR Containers cluster
  id?: string;

  // Nested list containing information about the configuration of the container provider
  info?: emrcontainers_VirtualClusterContainerProviderInfo;
}

export function emrcontainers_VirtualClusterContainerProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of the container provider',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'The name of the container provider that is running your EMR Containers cluster',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'info',
      'Nested list containing information about the configuration of the container provider',
      () => emrcontainers_VirtualClusterContainerProviderInfo_GetTypes(),
      true,
      true,
    ),
  ];
}
