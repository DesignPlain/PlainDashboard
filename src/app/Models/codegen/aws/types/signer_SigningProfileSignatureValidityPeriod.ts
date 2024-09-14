import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface signer_SigningProfileSignatureValidityPeriod {
  // The time unit for signature validity. Valid values: `DAYS`, `MONTHS`, `YEARS`.
  type?: string;

  // The numerical value of the time unit for signature validity.
  value?: number;
}

export function signer_SigningProfileSignatureValidityPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The time unit for signature validity. Valid values: `DAYS`, `MONTHS`, `YEARS`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "The numerical value of the time unit for signature validity.",
      () => [],
      true,
      true,
    ),
  ];
}
