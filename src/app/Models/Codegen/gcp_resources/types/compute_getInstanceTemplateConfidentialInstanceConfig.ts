import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getInstanceTemplateConfidentialInstanceConfig {
  /*
Specifies which confidential computing technology to use.
								This could be one of the following values: SEV, SEV_SNP.
								If SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.
*/
  confidentialInstanceType?: string;

  // Defines whether the instance should have confidential compute enabled. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM.
  enableConfidentialCompute?: boolean;
}

export function compute_getInstanceTemplateConfidentialInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "confidentialInstanceType",
      'Specifies which confidential computing technology to use.\n\t\t\t\t\t\t\t\tThis could be one of the following values: SEV, SEV_SNP.\n\t\t\t\t\t\t\t\tIf SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialCompute",
      "Defines whether the instance should have confidential compute enabled. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM.",
      [],
      true,
      false,
    ),
  ];
}
