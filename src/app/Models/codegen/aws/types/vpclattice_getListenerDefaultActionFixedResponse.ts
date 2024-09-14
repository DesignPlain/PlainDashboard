import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vpclattice_getListenerDefaultActionFixedResponse {
  //
  statusCode?: number;
}

export function vpclattice_getListenerDefaultActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "statusCode",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
