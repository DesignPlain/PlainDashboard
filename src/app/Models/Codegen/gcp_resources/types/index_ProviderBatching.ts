import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface index_ProviderBatching {
  //
  sendAfter?: string;

  //
  enableBatching?: boolean;
}

export function index_ProviderBatching_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "sendAfter", "", [], false, false),
    new DynamicUIProps(InputType.Bool, "enableBatching", "", [], false, false),
  ];
}
