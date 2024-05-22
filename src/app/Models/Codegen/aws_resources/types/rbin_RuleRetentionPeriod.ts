import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rbin_RuleRetentionPeriod {
  // The unit of time in which the retention period is measured. Currently, only DAYS is supported.
  retentionPeriodUnit?: string;

  // The period value for which the retention rule is to retain resources. The period is measured using the unit specified for RetentionPeriodUnit.
  retentionPeriodValue?: number;
}

export function rbin_RuleRetentionPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "retentionPeriodUnit",
      "The unit of time in which the retention period is measured. Currently, only DAYS is supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retentionPeriodValue",
      "The period value for which the retention rule is to retain resources. The period is measured using the unit specified for RetentionPeriodUnit.",
      [],
      true,
      false,
    ),
  ];
}
