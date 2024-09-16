import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration,
  licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration_GetTypes,
} from './licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration';
import {
  licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration,
  licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration_GetTypes,
} from './licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration';

export interface licensemanager_getReceivedLicenseConsumptionConfiguration {
  //
  renewType?: string;

  // Details about a borrow configuration. Detailed below
  borrowConfigurations?: Array<licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration>;

  // Details about a provisional configuration. Detailed below
  provisionalConfigurations?: Array<licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration>;
}

export function licensemanager_getReceivedLicenseConsumptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'renewType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'borrowConfigurations',
      'Details about a borrow configuration. Detailed below',
      () =>
        licensemanager_getReceivedLicenseConsumptionConfigurationBorrowConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'provisionalConfigurations',
      'Details about a provisional configuration. Detailed below',
      () =>
        licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
