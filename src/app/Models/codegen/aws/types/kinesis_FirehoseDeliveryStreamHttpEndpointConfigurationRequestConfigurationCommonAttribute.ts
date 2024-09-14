import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute {
  // The name of the HTTP endpoint common attribute.
  name?: string;

  // The value of the HTTP endpoint common attribute.
  value?: string;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the HTTP endpoint common attribute.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the HTTP endpoint common attribute.",
      () => [],
      true,
      false,
    ),
  ];
}
