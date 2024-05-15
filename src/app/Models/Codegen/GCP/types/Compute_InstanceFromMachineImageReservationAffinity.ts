import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromMachineImageReservationAffinitySpecificReservation,
  Compute_InstanceFromMachineImageReservationAffinitySpecificReservation_GetTypes,
} from "./Compute_InstanceFromMachineImageReservationAffinitySpecificReservation";

export interface Compute_InstanceFromMachineImageReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservation?: Compute_InstanceFromMachineImageReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}

export function Compute_InstanceFromMachineImageReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SpecificReservation",
      "Specifies the label selector for the reservation to use.",
      Compute_InstanceFromMachineImageReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of reservation from which this instance can consume resources.",
      [],
      true,
      true,
    ),
  ];
}
