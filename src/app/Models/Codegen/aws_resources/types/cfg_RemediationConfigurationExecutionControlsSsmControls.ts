import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cfg_RemediationConfigurationExecutionControlsSsmControls {
  // Maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. The default value is 10%!.(MISSING)
  concurrentExecutionRatePercentage?: number;

  // Percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule. The default is 50%!.(MISSING)
  errorPercentage?: number;
}

export function cfg_RemediationConfigurationExecutionControlsSsmControls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "concurrentExecutionRatePercentage",
      "Maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. The default value is 10%.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "errorPercentage",
      "Percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule. The default is 50%.",
      [],
      false,
      false,
    ),
  ];
}
