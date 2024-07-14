import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmincidents_getResponsePlanActionSsmAutomationParameter {
  // The name of the PagerDuty configuration.
  name?: string;

  // The values for the associated parameter name.
  values?: Array<string>;
}

export function ssmincidents_getResponsePlanActionSsmAutomationParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the PagerDuty configuration.",
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
