import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appstream_FleetComputeCapacity {
  // Number of currently available instances that can be used to stream sessions.
  available?: number;

  // Desired number of streaming instances.
  desiredInstances?: number;

  // Desired number of user sessions for a multi-session fleet. This is not allowed for single-session fleets.
  desiredSessions?: number;

  // Number of instances in use for streaming.
  inUse?: number;

  // Total number of simultaneous streaming instances that are running.
  running?: number;
}

export function appstream_FleetComputeCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "desiredSessions",
      "Desired number of user sessions for a multi-session fleet. This is not allowed for single-session fleets.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "inUse",
      "Number of instances in use for streaming.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "running",
      "Total number of simultaneous streaming instances that are running.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "available",
      "Number of currently available instances that can be used to stream sessions.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "desiredInstances",
      "Desired number of streaming instances.",
      () => [],
      false,
      false,
    ),
  ];
}
