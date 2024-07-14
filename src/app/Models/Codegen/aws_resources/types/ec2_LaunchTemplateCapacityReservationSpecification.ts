import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget,
  ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget_GetTypes,
} from "./ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget";

export interface ec2_LaunchTemplateCapacityReservationSpecification {
  // Indicates the instance's Capacity Reservation preferences. Can be `open` or `none`. (Default `none`).
  capacityReservationPreference?: string;

  // Used to target a specific Capacity Reservation:
  capacityReservationTarget?: ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
}

export function ec2_LaunchTemplateCapacityReservationSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "capacityReservationPreference",
      "Indicates the instance's Capacity Reservation preferences. Can be `open` or `none`. (Default `none`).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "capacityReservationTarget",
      "Used to target a specific Capacity Reservation:",
      ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
