import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter {
  // The value for the size (in MiB) of the `/dev/shm` volume.
  sharedMemorySize?: number;

  // You can use this parameter to tune a container's memory swappiness behavior.
  swappiness?: number;

  // The container path, mount options, and size (in MiB) of the tmpfs mount.
  tmpfs?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf>;

  // Any of the host devices to expose to the container.
  devices?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice>;

  // If true, run an init process inside the container that forwards signals and reaps processes.
  initProcessEnabled?: boolean;

  // The total amount of swap memory (in MiB) a container can use.
  maxSwap?: number;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sharedMemorySize",
      "The value for the size (in MiB) of the `/dev/shm` volume.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "swappiness",
      "You can use this parameter to tune a container's memory swappiness behavior.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tmpfs",
      "The container path, mount options, and size (in MiB) of the tmpfs mount.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "devices",
      "Any of the host devices to expose to the container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "initProcessEnabled",
      "If true, run an init process inside the container that forwards signals and reaps processes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxSwap",
      "The total amount of swap memory (in MiB) a container can use.",
      () => [],
      true,
      false,
    ),
  ];
}
