import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vpclattice_getListenerDefaultActionFixedResponse,
  vpclattice_getListenerDefaultActionFixedResponse_GetTypes,
} from "./vpclattice_getListenerDefaultActionFixedResponse";
import {
  vpclattice_getListenerDefaultActionForward,
  vpclattice_getListenerDefaultActionForward_GetTypes,
} from "./vpclattice_getListenerDefaultActionForward";

export interface vpclattice_getListenerDefaultAction {
  //
  fixedResponses?: Array<vpclattice_getListenerDefaultActionFixedResponse>;

  //
  forwards?: Array<vpclattice_getListenerDefaultActionForward>;
}

export function vpclattice_getListenerDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "forwards",
      "",
      () => vpclattice_getListenerDefaultActionForward_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fixedResponses",
      "",
      () => vpclattice_getListenerDefaultActionFixedResponse_GetTypes(),
      true,
      false,
    ),
  ];
}
