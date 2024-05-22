import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cfg_RuleEvaluationMode {
  // The mode of an evaluation.
  mode?: string;
}

export function cfg_RuleEvaluationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode of an evaluation.",
      [],
      false,
      false,
    ),
  ];
}
