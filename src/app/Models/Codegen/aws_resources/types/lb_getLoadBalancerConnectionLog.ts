import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_getLoadBalancerConnectionLog {
  //
  bucket?: string;

  //
  enabled?: boolean;

  //
  prefix?: string;
}

export function lb_getLoadBalancerConnectionLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucket", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
  ];
}
