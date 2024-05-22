import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceFromMachineImageReservationAffinitySpecificReservation,
  compute_InstanceFromMachineImageReservationAffinitySpecificReservation_GetTypes,
} from "./compute_InstanceFromMachineImageReservationAffinitySpecificReservation";

export interface compute_InstanceFromMachineImageReservationAffinity {
  // Specifies the label selector for the reservation to use.
  specificReservation?: compute_InstanceFromMachineImageReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  type?: string;
}

export function compute_InstanceFromMachineImageReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "specificReservation",
      "Specifies the label selector for the reservation to use.",
      compute_InstanceFromMachineImageReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of reservation from which this instance can consume resources.",
      [],
      true,
      true,
    ),
  ];
}
