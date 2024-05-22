import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vpclattice_getListenerDefaultActionFixedResponse {
  //
  statusCode?: number;
}

export function vpclattice_getListenerDefaultActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "statusCode", "", [], true, false),
  ];
}
