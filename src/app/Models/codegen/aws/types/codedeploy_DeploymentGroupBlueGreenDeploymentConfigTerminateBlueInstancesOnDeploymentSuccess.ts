import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  /*
The action to take on instances in the original environment after a successful blue/green deployment.
- `TERMINATE`: Instances are terminated after a specified wait time.
- `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
*/
  action?: string;

  // The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
  terminationWaitTimeInMinutes?: number;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'action',
      'The action to take on instances in the original environment after a successful blue/green deployment.\n* `TERMINATE`: Instances are terminated after a specified wait time.\n* `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'terminationWaitTimeInMinutes',
      'The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.',
      () => [],
      false,
      false,
    ),
  ];
}
