import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceAdvancedMachineFeatures {
  // Defines whether the instance should have nested virtualization  enabled. Defaults to false.
  EnableNestedVirtualization?: boolean;

  // he number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.
  ThreadsPerCore?: number;

  // The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).
  VisibleCoreCount?: number;
}

export function Compute_InstanceAdvancedMachineFeatures_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableNestedVirtualization",
      "Defines whether the instance should have nested virtualization  enabled. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ThreadsPerCore",
      "he number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "VisibleCoreCount",
      "The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).",
      [],
      false,
      false,
    ),
  ];
}
