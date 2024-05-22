import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
  //
  capacityReservationId?: string;

  //
  capacityReservationResourceGroupArn?: string;
}

export function ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "capacityReservationId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityReservationResourceGroupArn",
      "",
      [],
      true,
      false,
    ),
  ];
}
