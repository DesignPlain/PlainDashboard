import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elb_getLoadBalancerAccessLogs {
  //
  bucket?: string;

  //
  bucketPrefix?: string;

  //
  enabled?: boolean;

  //
  interval?: number;
}

export function elb_getLoadBalancerAccessLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "interval", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "bucket", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
