import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone {
  // Name of the Availability Zone.
  name?: string;
}

export function mq_getInstanceTypeOfferingsBrokerInstanceOptionAvailabilityZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the Availability Zone.",
      [],
      true,
      false,
    ),
  ];
}
