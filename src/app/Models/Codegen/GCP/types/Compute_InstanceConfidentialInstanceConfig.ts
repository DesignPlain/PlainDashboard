import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceConfidentialInstanceConfig {
  // Defines the confidential computing technology the instance uses. SEV is an AMD feature. One of the following values: `SEV`, `SEV_SNP`. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM. If `SEV_SNP`, currently `min_cpu_platform` has to be set to `"AMD Milan"` or this will fail to create the VM.
  ConfidentialInstanceType?: string;

  // Defines whether the instance should have confidential compute enabled with AMD SEV. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM.
  EnableConfidentialCompute?: boolean;
}

export function Compute_InstanceConfidentialInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ConfidentialInstanceType",
      'Defines the confidential computing technology the instance uses. SEV is an AMD feature. One of the following values: `SEV`, `SEV_SNP`. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM. If `SEV_SNP`, currently `min_cpu_platform` has to be set to `"AMD Milan"` or this will fail to create the VM.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialCompute",
      "Defines whether the instance should have confidential compute enabled with AMD SEV. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM.",
      [],
      false,
      false,
    ),
  ];
}
