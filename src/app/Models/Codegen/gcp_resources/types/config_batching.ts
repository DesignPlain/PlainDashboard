import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface config_batching {
  //
  enableBatching?: boolean;

  //
  sendAfter?: string;
}

export function config_batching_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "sendAfter", "", [], false, false),
    new DynamicUIProps(InputType.Bool, "enableBatching", "", [], false, false),
  ];
}
