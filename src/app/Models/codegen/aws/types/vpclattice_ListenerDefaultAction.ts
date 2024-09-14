import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vpclattice_ListenerDefaultActionFixedResponse,
  vpclattice_ListenerDefaultActionFixedResponse_GetTypes,
} from "./vpclattice_ListenerDefaultActionFixedResponse";
import {
  vpclattice_ListenerDefaultActionForward,
  vpclattice_ListenerDefaultActionForward_GetTypes,
} from "./vpclattice_ListenerDefaultActionForward";

export interface vpclattice_ListenerDefaultAction {
  //
  fixedResponse?: vpclattice_ListenerDefaultActionFixedResponse;

  /*
Route requests to one or more target groups. See Forward blocks below.

> --NOTE:-- You must specify exactly one of the following argument blocks: `fixed_response` or `forward`.
*/
  forwards?: Array<vpclattice_ListenerDefaultActionForward>;
}

export function vpclattice_ListenerDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fixedResponse",
      "",
      () => vpclattice_ListenerDefaultActionFixedResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "forwards",
      "Route requests to one or more target groups. See Forward blocks below.\n\n> **NOTE:** You must specify exactly one of the following argument blocks: `fixed_response` or `forward`.",
      () => vpclattice_ListenerDefaultActionForward_GetTypes(),
      false,
      false,
    ),
  ];
}
