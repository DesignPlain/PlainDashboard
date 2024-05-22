import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget {
  // ID of the Capacity Reservation in which to run the instance.
  capacityReservationId?: string;

  // ARN of the Capacity Reservation resource group in which to run the instance.
  capacityReservationResourceGroupArn?: string;
}

export function ec2_InstanceCapacityReservationSpecificationCapacityReservationTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "capacityReservationId",
      "ID of the Capacity Reservation in which to run the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityReservationResourceGroupArn",
      "ARN of the Capacity Reservation resource group in which to run the instance.",
      [],
      false,
      false,
    ),
  ];
}
