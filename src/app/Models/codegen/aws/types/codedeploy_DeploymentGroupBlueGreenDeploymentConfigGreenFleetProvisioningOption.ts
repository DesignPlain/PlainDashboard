import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  /*
The method used to add instances to a replacement environment.
- `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.
- `COPY_AUTO_SCALING_GROUP`: Use settings from a specified --Auto Scaling-- group to define and create instances in a new Auto Scaling group. _Exactly one Auto Scaling group must be specified_ when selecting `COPY_AUTO_SCALING_GROUP`. Use `autoscaling_groups` to specify the Auto Scaling group.
*/
  action?: string;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "The method used to add instances to a replacement environment.\n* `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.\n* `COPY_AUTO_SCALING_GROUP`: Use settings from a specified **Auto Scaling** group to define and create instances in a new Auto Scaling group. _Exactly one Auto Scaling group must be specified_ when selecting `COPY_AUTO_SCALING_GROUP`. Use `autoscaling_groups` to specify the Auto Scaling group.",
      () => [],
      false,
      false,
    ),
  ];
}
