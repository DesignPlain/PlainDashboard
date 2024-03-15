import { getInstanceGroupManagerStatusStatefulPerInstanceConfig } from "./getInstanceGroupManagerStatusStatefulPerInstanceConfig";

export interface getInstanceGroupManagerStatusStateful {
  // A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.
  HasStatefulConfig?: boolean;

  // Status of per-instance configs on the instance.
  PerInstanceConfigs?: Array<getInstanceGroupManagerStatusStatefulPerInstanceConfig>;
}
