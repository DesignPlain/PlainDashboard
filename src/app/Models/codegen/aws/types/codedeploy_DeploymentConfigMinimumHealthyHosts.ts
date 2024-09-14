import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codedeploy_DeploymentConfigMinimumHealthyHosts {
  // The type can either be `FLEET_PERCENT` or `HOST_COUNT`.
  type?: string;

  /*
The value when the type is `FLEET_PERCENT` represents the minimum number of healthy instances as
a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the
deployment, AWS CodeDeploy converts the percentage to the equivalent number of instance and rounds up fractional instances.
When the type is `HOST_COUNT`, the value represents the minimum number of healthy instances as an absolute value.
*/
  value?: number;
}

export function codedeploy_DeploymentConfigMinimumHealthyHosts_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type can either be `FLEET_PERCENT` or `HOST_COUNT`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "The value when the type is `FLEET_PERCENT` represents the minimum number of healthy instances as\na percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the\ndeployment, AWS CodeDeploy converts the percentage to the equivalent number of instance and rounds up fractional instances.\nWhen the type is `HOST_COUNT`, the value represents the minimum number of healthy instances as an absolute value.",
      () => [],
      false,
      true,
    ),
  ];
}
