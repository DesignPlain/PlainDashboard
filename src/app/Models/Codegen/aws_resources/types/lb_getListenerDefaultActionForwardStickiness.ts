import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_getListenerDefaultActionForwardStickiness {
  //
  duration?: number;

  //
  enabled?: boolean;
}

export function lb_getListenerDefaultActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "duration", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
  ];
}
