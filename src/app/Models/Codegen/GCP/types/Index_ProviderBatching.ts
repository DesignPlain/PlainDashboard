import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Index_ProviderBatching {
  //
  EnableBatching?: boolean;

  //
  SendAfter?: string;
}

export function Index_ProviderBatching_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "EnableBatching", "", [], false, false),
    new DynamicUIProps(InputType.String, "SendAfter", "", [], false, false),
  ];
}
