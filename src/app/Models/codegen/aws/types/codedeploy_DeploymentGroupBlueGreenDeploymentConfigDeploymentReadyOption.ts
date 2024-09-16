import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
  /*
When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
- `CONTINUE_DEPLOYMENT`: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
- `STOP_DEPLOYMENT`: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.
*/
  actionOnTimeout?: string;

  // The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.
  waitTimeInMinutes?: number;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'actionOnTimeout',
      'When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.\n* `CONTINUE_DEPLOYMENT`: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.\n* `STOP_DEPLOYMENT`: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'waitTimeInMinutes',
      'The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.',
      () => [],
      false,
      false,
    ),
  ];
}
