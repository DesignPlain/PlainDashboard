import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rds_ReservedInstanceRecurringCharge {
  //
  recurringChargeAmount?: number;

  //
  recurringChargeFrequency?: string;
}

export function rds_ReservedInstanceRecurringCharge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "recurringChargeAmount",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recurringChargeFrequency",
      "",
      [],
      false,
      false,
    ),
  ];
}
