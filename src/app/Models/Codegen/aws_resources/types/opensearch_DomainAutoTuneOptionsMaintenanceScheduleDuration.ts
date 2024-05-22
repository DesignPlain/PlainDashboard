import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration {
  // Unit of time specifying the duration of an Auto-Tune maintenance window. Valid values: `HOURS`.
  unit?: string;

  // An integer specifying the value of the duration of an Auto-Tune maintenance window.
  value?: number;
}

export function opensearch_DomainAutoTuneOptionsMaintenanceScheduleDuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of time specifying the duration of an Auto-Tune maintenance window. Valid values: `HOURS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "An integer specifying the value of the duration of an Auto-Tune maintenance window.",
      [],
      true,
      false,
    ),
  ];
}
