import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sesv2_getDedicatedIpPoolDedicatedIp {
  // The warm-up status of a dedicated IP address. Valid values: `IN_PROGRESS`, `DONE`.
  warmupStatus?: string;

  // IPv4 address.
  ip?: string;

  // Indicates how complete the dedicated IP warm-up process is. When this value equals `1`, the address has completed the warm-up process and is ready for use.
  warmupPercentage?: number;
}

export function sesv2_getDedicatedIpPoolDedicatedIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "warmupStatus",
      "The warm-up status of a dedicated IP address. Valid values: `IN_PROGRESS`, `DONE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ip",
      "IPv4 address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "warmupPercentage",
      "Indicates how complete the dedicated IP warm-up process is. When this value equals `1`, the address has completed the warm-up process and is ready for use.",
      [],
      true,
      false,
    ),
  ];
}
