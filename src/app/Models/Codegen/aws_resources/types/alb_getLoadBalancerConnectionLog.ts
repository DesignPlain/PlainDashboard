import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_getLoadBalancerConnectionLog {
  //
  bucket?: string;

  //
  enabled?: boolean;

  //
  prefix?: string;
}

export function alb_getLoadBalancerConnectionLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucket", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
  ];
}
