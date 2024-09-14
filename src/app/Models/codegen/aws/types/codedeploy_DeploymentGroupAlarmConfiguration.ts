import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codedeploy_DeploymentGroupAlarmConfiguration {
  // A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_.
  alarms?: Array<string>;

  // Indicates whether the alarm configuration is enabled. This option is useful when you want to temporarily deactivate alarm monitoring for a deployment group without having to add the same alarms again later.
  enabled?: boolean;

  // Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`.
  ignorePollAlarmFailure?: boolean;
}

export function codedeploy_DeploymentGroupAlarmConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "alarms",
      "A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether the alarm configuration is enabled. This option is useful when you want to temporarily deactivate alarm monitoring for a deployment group without having to add the same alarms again later.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ignorePollAlarmFailure",
      "Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
