import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterBinaryAuthorization {
  /*
Mode of operation for binauthz policy evaluation. If unspecified,
defaults to DISABLED.
Possible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  EvaluationMode?: string;
}

export function Gkeonprem_BareMetalClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EvaluationMode",
      "Mode of operation for binauthz policy evaluation. If unspecified,\ndefaults to DISABLED.\nPossible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.",
      [],
      false,
      false,
    ),
  ];
}
