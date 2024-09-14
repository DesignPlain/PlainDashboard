import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getPublicIpv4PoolPoolAddressRange {
  // Number of addresses in the range.
  addressCount?: number;

  // Number of available addresses in the range.
  availableAddressCount?: number;

  // First address in the range.
  firstAddress?: string;

  // Last address in the range.
  lastAddress?: string;
}

export function ec2_getPublicIpv4PoolPoolAddressRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "addressCount",
      "Number of addresses in the range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "availableAddressCount",
      "Number of available addresses in the range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firstAddress",
      "First address in the range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastAddress",
      "Last address in the range.",
      () => [],
      true,
      false,
    ),
  ];
}
