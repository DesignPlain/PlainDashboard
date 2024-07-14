import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_getListenerDefaultActionForwardStickiness {
  //
  enabled?: boolean;

  //
  duration?: number;
}

export function alb_getListenerDefaultActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(InputType.Number, "duration", "", [], true, false),
  ];
}
