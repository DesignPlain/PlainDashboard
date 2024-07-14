import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticache_getUserAuthenticationMode {
  //
  passwordCount?: number;

  //
  type?: string;
}

export function elasticache_getUserAuthenticationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", [], false, false),
    new DynamicUIProps(InputType.Number, "passwordCount", "", [], false, false),
  ];
}
