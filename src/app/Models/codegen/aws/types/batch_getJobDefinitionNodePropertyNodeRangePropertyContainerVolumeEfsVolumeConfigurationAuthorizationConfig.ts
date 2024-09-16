import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig {
  // Whether or not to use the AWS Batch job IAM role defined in a job definition when mounting the Amazon EFS file system.
  iam?: string;

  // The Amazon EFS access point ID to use.
  accessPointId?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'iam',
      'Whether or not to use the AWS Batch job IAM role defined in a job definition when mounting the Amazon EFS file system.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accessPointId',
      'The Amazon EFS access point ID to use.',
      () => [],
      true,
      false,
    ),
  ];
}
