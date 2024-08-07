import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_getTargetGroupStickiness {
  //
  cookieDuration?: number;

  //
  cookieName?: string;

  //
  enabled?: boolean;

  //
  type?: string;
}

export function alb_getTargetGroupStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "cookieDuration", "", [], true, false),
    new DynamicUIProps(InputType.String, "cookieName", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
