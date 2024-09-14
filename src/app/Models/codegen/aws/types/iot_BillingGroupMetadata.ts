import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_BillingGroupMetadata {
  //
  creationDate?: string;
}

export function iot_BillingGroupMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "creationDate",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
