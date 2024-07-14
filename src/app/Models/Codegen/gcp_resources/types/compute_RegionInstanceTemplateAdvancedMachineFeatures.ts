import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_RegionInstanceTemplateAdvancedMachineFeatures {
  // The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).
  visibleCoreCount?: number;

  // Defines whether the instance should have nested virtualization enabled. Defaults to false.
  enableNestedVirtualization?: boolean;

  // The number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.
  threadsPerCore?: number;
}

export function compute_RegionInstanceTemplateAdvancedMachineFeatures_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "visibleCoreCount",
      "The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableNestedVirtualization",
      "Defines whether the instance should have nested virtualization enabled. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threadsPerCore",
      "The number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.",
      [],
      false,
      true,
    ),
  ];
}
