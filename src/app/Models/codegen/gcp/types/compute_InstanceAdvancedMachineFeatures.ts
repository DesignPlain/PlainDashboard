import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceAdvancedMachineFeatures {
  // Defines whether the instance should have nested virtualization  enabled. Defaults to false.
  enableNestedVirtualization?: boolean;

  // he number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.
  threadsPerCore?: number;

  // The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).
  visibleCoreCount?: number;
}

export function compute_InstanceAdvancedMachineFeatures_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableNestedVirtualization",
      "Defines whether the instance should have nested virtualization  enabled. Defaults to false.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threadsPerCore",
      "he number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "visibleCoreCount",
      "The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).",
      () => [],
      false,
      false,
    ),
  ];
}
