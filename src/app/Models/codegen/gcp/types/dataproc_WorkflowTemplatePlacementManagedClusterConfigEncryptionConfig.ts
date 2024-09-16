import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig {
  // The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  gcePdKmsKeyName?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'gcePdKmsKeyName',
      'The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.',
      () => [],
      false,
      true,
    ),
  ];
}
