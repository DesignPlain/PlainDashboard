import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterAddonsConfigHorizontalPodAutoscaling {
  //
  disabled?: boolean;
}

export function container_getClusterAddonsConfigHorizontalPodAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "disabled", "", () => [], true, false),
  ];
}
