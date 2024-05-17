import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureStateState,
  Gkehub_FeatureStateState_GetTypes,
} from "./Gkehub_FeatureStateState";

export interface Gkehub_FeatureState {
  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  States?: Array<Gkehub_FeatureStateState>;
}

export function Gkehub_FeatureState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "States",
      '(Output)\nOutput only. The "running state" of the Feature in this Hub.\nStructure is documented below.',
      Gkehub_FeatureStateState_GetTypes(),
      false,
      false,
    ),
  ];
}
