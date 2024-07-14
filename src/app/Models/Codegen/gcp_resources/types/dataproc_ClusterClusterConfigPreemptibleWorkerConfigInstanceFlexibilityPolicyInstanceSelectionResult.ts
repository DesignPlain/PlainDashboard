import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult {
  /*
The name of a Google Compute Engine machine type
to create for the node group. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  machineType?: string;

  // Number of VM provisioned with the machine_type.
  vmCount?: number;
}

export function dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type\nto create for the node group. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "vmCount",
      "Number of VM provisioned with the machine_type.",
      [],
      false,
      false,
    ),
  ];
}
