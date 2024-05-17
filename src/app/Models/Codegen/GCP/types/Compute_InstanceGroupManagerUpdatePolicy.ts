import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceGroupManagerUpdatePolicy {
  // , The maximum number of instances that can be unavailable during the update process. Conflicts with `max_unavailable_percent`. If neither is set, defaults to 1
  MaxUnavailableFixed?: number;

  // , The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with `max_surge_percent`. If neither is set, defaults to 1
  MaxSurgeFixed?: number;

  // , The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with `max_surge_fixed`.
  MaxSurgePercent?: number;

  // Minimal action to be taken on an instance. You can specify either `REFRESH` to update without stopping instances, `RESTART` to restart existing instances or `REPLACE` to delete and create new instances from the target template. If you specify a `REFRESH`, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.
  MinimalAction?: string;

  // Most disruptive action that is allowed to be taken on an instance. You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.
  MostDisruptiveAllowedAction?: string;

  /*
, The instance replacement method for managed instance groups. Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.
- - -
*/
  ReplacementMethod?: string;

  // The type of update process. You can specify either `PROACTIVE` so that the instance group manager proactively executes actions in order to bring instances to their target versions or `OPPORTUNISTIC` so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).
  Type?: string;

  // , The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with `max_unavailable_fixed`.
  MaxUnavailablePercent?: number;

  // , Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600]
  MinReadySec?: number;
}

export function Compute_InstanceGroupManagerUpdatePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ReplacementMethod",
      ', The instance replacement method for managed instance groups. Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.\n- - -',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinReadySec",
      ", Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600]",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailableFixed",
      ", The maximum number of instances that can be unavailable during the update process. Conflicts with `max_unavailable_percent`. If neither is set, defaults to 1",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSurgeFixed",
      ", The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with `max_surge_percent`. If neither is set, defaults to 1",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MostDisruptiveAllowedAction",
      "Most disruptive action that is allowed to be taken on an instance. You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of update process. You can specify either `PROACTIVE` so that the instance group manager proactively executes actions in order to bring instances to their target versions or `OPPORTUNISTIC` so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailablePercent",
      ", The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with `max_unavailable_fixed`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSurgePercent",
      ", The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with `max_surge_fixed`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinimalAction",
      "Minimal action to be taken on an instance. You can specify either `REFRESH` to update without stopping instances, `RESTART` to restart existing instances or `REPLACE` to delete and create new instances from the target template. If you specify a `REFRESH`, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.",
      [],
      true,
      false,
    ),
  ];
}
