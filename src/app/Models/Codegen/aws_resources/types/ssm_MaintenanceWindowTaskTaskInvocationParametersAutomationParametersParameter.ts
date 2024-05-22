import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
  // The parameter name.
  name?: string;

  // The array of strings.
  values?: Array<string>;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The parameter name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The array of strings.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
