import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssmincidents_ResponsePlanActionSsmAutomationParameter {
  // The name of the response plan.
  name?: string;

  // The values for the associated parameter name.
  values?: Array<string>;
}

export function ssmincidents_ResponsePlanActionSsmAutomationParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the response plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The values for the associated parameter name.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
