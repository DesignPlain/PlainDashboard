import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_getUserPhoneConfig {
  // The After Call Work (ACW) timeout setting, in seconds.
  afterContactWorkTimeLimit?: number;

  // When Auto-Accept Call is enabled for an available agent, the agent connects to contacts automatically.
  autoAccept?: boolean;

  // The phone number for the user's desk phone.
  deskPhoneNumber?: string;

  // The phone type. Valid values are `DESK_PHONE` and `SOFT_PHONE`.
  phoneType?: string;
}

export function connect_getUserPhoneConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "afterContactWorkTimeLimit",
      "The After Call Work (ACW) timeout setting, in seconds.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoAccept",
      "When Auto-Accept Call is enabled for an available agent, the agent connects to contacts automatically.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deskPhoneNumber",
      "The phone number for the user's desk phone.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "phoneType",
      "The phone type. Valid values are `DESK_PHONE` and `SOFT_PHONE`.",
      () => [],
      true,
      false,
    ),
  ];
}
