import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig {
  // The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  GcePdKmsKeyName?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GcePdKmsKeyName",
      "The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.",
      [],
      false,
      true,
    ),
  ];
}
