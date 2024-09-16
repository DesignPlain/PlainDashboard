import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codedeploy_DeploymentGroupEcsService {
  // The name of the ECS cluster.
  clusterName?: string;

  // The name of the ECS service.
  serviceName?: string;
}

export function codedeploy_DeploymentGroupEcsService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clusterName',
      'The name of the ECS cluster.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceName',
      'The name of the ECS service.',
      () => [],
      true,
      false,
    ),
  ];
}
