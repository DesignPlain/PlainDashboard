import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionInstanceGroupManagerStatusStatefulPerInstanceConfig,
  compute_RegionInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes,
} from "./compute_RegionInstanceGroupManagerStatusStatefulPerInstanceConfig";

export interface compute_RegionInstanceGroupManagerStatusStateful {
  // A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.
  hasStatefulConfig?: boolean;

  // Status of per-instance configs on the instance.
  perInstanceConfigs?: Array<compute_RegionInstanceGroupManagerStatusStatefulPerInstanceConfig>;
}

export function compute_RegionInstanceGroupManagerStatusStateful_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "hasStatefulConfig",
      "A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perInstanceConfigs",
      "Status of per-instance configs on the instance.",
      compute_RegionInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
