import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  // The action to take on instances in the original environment after a successful blue/green deployment.
  action?: string;

  // The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
  terminationWaitTimeInMinutes?: number;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "terminationWaitTimeInMinutes",
      "The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "The action to take on instances in the original environment after a successful blue/green deployment.",
      [],
      false,
      false,
    ),
  ];
}
