import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceFromMachineImageConfidentialInstanceConfig {
  // Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release
  enableConfidentialCompute?: boolean;

  /*
Specifies which confidential computing technology to use.
								This could be one of the following values: SEV, SEV_SNP.
								If SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.
*/
  confidentialInstanceType?: string;
}

export function compute_InstanceFromMachineImageConfidentialInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "confidentialInstanceType",
      'Specifies which confidential computing technology to use.\n\t\t\t\t\t\t\t\tThis could be one of the following values: SEV, SEV_SNP.\n\t\t\t\t\t\t\t\tIf SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialCompute",
      "Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release",
      () => [],
      false,
      false,
    ),
  ];
}