import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureResourceState {
  /*
(Output)
Whether this Feature has outstanding resources that need to be cleaned up before it can be disabled.
*/
  HasResources?: boolean;

  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  State?: string;
}

export function Gkehub_FeatureResourceState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "HasResources",
      "(Output)\nWhether this Feature has outstanding resources that need to be cleaned up before it can be disabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      '(Output)\nOutput only. The "running state" of the Feature in this Hub.\nStructure is documented below.',
      [],
      false,
      false,
    ),
  ];
}
