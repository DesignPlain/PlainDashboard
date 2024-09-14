import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchTemplateCpuOptions {
  // Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. Valid values are `enabled` and `disabled`.
  amdSevSnp?: string;

  // The number of CPU cores for the instance.
  coreCount?: number;

  /*
The number of threads per CPU core.
To disable Intel Hyper-Threading Technology for the instance, specify a value of 1.
Otherwise, specify the default value of 2.

Both number of CPU cores and threads per core must be specified. Valid number of CPU cores and threads per core for the instance type can be found in the [CPU Options Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html?shortFooter=true#cpu-options-supported-instances-values)
*/
  threadsPerCore?: number;
}

export function ec2_LaunchTemplateCpuOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "amdSevSnp",
      "Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. Valid values are `enabled` and `disabled`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "coreCount",
      "The number of CPU cores for the instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threadsPerCore",
      "The number of threads per CPU core.\nTo disable Intel Hyper-Threading Technology for the instance, specify a value of 1.\nOtherwise, specify the default value of 2.\n\nBoth number of CPU cores and threads per core must be specified. Valid number of CPU cores and threads per core for the instance type can be found in the [CPU Options Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html?shortFooter=true#cpu-options-supported-instances-values)",
      () => [],
      false,
      false,
    ),
  ];
}
