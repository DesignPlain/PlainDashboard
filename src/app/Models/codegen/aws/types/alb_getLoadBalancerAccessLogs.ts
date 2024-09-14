import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_getLoadBalancerAccessLogs {
  //
  bucket?: string;

  //
  enabled?: boolean;

  //
  prefix?: string;
}

export function alb_getLoadBalancerAccessLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucket", "", () => [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", () => [], true, false),
  ];
}
