import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig,
  Compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes,
} from "./Compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig";

export interface Compute_getInstanceGroupManagerStatusStateful {
  // A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.
  HasStatefulConfig?: boolean;

  // Status of per-instance configs on the instance.
  PerInstanceConfigs?: Array<Compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig>;
}

export function Compute_getInstanceGroupManagerStatusStateful_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "HasStatefulConfig",
      "A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PerInstanceConfigs",
      "Status of per-instance configs on the instance.",
      Compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
