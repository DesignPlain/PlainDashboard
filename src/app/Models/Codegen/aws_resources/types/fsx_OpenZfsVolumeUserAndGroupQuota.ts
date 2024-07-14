import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_OpenZfsVolumeUserAndGroupQuota {
  // The ID of the user or group. Valid values between `0` and `2147483647`
  id?: number;

  // The amount of storage that the user or group can use in gibibytes (GiB). Valid values between `0` and `2147483647`
  storageCapacityQuotaGib?: number;

  //
  type?: string;
}

export function fsx_OpenZfsVolumeUserAndGroupQuota_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "id",
      "The ID of the user or group. Valid values between `0` and `2147483647`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageCapacityQuotaGib",
      "The amount of storage that the user or group can use in gibibytes (GiB). Valid values between `0` and `2147483647`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
