import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore {
  /*
The sensitivity score applied to the resource.
Possible values are: `SENSITIVITY_LOW`, `SENSITIVITY_MODERATE`, `SENSITIVITY_HIGH`.
*/
  Score?: string;
}

export function Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Score",
      "The sensitivity score applied to the resource.\nPossible values are: `SENSITIVITY_LOW`, `SENSITIVITY_MODERATE`, `SENSITIVITY_HIGH`.",
      [],
      true,
      false,
    ),
  ];
}
