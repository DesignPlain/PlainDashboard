import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceTemplateAdvancedMachineFeature {
  // The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
  VisibleCoreCount?: number;

  // Whether to enable nested virtualization or not.
  EnableNestedVirtualization?: boolean;

  // The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  ThreadsPerCore?: number;
}

export function Compute_getInstanceTemplateAdvancedMachineFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "VisibleCoreCount",
      "The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\\'s nominal CPU count and the underlying platform\\'s SMT width.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableNestedVirtualization",
      "Whether to enable nested virtualization or not.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ThreadsPerCore",
      "The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.",
      [],
      true,
      false,
    ),
  ];
}
