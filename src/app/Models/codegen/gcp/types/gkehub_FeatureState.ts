import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkehub_FeatureStateState,
  gkehub_FeatureStateState_GetTypes,
} from "./gkehub_FeatureStateState";

export interface gkehub_FeatureState {
  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  states?: Array<gkehub_FeatureStateState>;
}

export function gkehub_FeatureState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "states",
      '(Output)\nOutput only. The "running state" of the Feature in this Hub.\nStructure is documented below.',
      () => gkehub_FeatureStateState_GetTypes(),
      false,
      false,
    ),
  ];
}
