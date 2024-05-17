import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceFromTemplateConfidentialInstanceConfig {
  /*
Specifies which confidential computing technology to use.
								This could be one of the following values: SEV, SEV_SNP.
								If SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.
*/
  ConfidentialInstanceType?: string;

  // Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release
  EnableConfidentialCompute?: boolean;
}

export function Compute_InstanceFromTemplateConfidentialInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ConfidentialInstanceType",
      'Specifies which confidential computing technology to use.\n\t\t\t\t\t\t\t\tThis could be one of the following values: SEV, SEV_SNP.\n\t\t\t\t\t\t\t\tIf SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialCompute",
      "Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release",
      [],
      false,
      false,
    ),
  ];
}
