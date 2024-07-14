import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration {
  // Indicates whether early check-ins are allowed.
  allowEarlyCheckIn?: boolean;

  // Maximum time for the provisional configuration, in minutes.
  maxTimeToLiveInMinutes?: number;
}

export function licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowEarlyCheckIn",
      "Indicates whether early check-ins are allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxTimeToLiveInMinutes",
      "Maximum time for the provisional configuration, in minutes.",
      [],
      true,
      false,
    ),
  ];
}
