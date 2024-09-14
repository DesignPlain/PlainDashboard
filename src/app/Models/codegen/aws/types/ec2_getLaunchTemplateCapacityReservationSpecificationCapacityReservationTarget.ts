import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityReservationResourceGroupArn",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
