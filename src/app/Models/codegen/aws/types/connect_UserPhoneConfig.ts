import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_UserPhoneConfig {
  // The phone type. Valid values are `DESK_PHONE` and `SOFT_PHONE`.
  phoneType?: string;

  // The After Call Work (ACW) timeout setting, in seconds. Minimum value of 0.
  afterContactWorkTimeLimit?: number;

  // When Auto-Accept Call is enabled for an available agent, the agent connects to contacts automatically.
  autoAccept?: boolean;

  // The phone number for the user's desk phone. Required if `phone_type` is set as `DESK_PHONE`.
  deskPhoneNumber?: string;
}

export function connect_UserPhoneConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "phoneType",
      "The phone type. Valid values are `DESK_PHONE` and `SOFT_PHONE`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "afterContactWorkTimeLimit",
      "The After Call Work (ACW) timeout setting, in seconds. Minimum value of 0.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoAccept",
      "When Auto-Accept Call is enabled for an available agent, the agent connects to contacts automatically.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deskPhoneNumber",
      "The phone number for the user's desk phone. Required if `phone_type` is set as `DESK_PHONE`.",
      () => [],
      false,
      false,
    ),
  ];
}
