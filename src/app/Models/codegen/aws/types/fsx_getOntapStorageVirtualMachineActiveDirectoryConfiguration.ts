import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration,
  fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes,
} from './fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration';

export interface fsx_getOntapStorageVirtualMachineActiveDirectoryConfiguration {
  //
  selfManagedActiveDirectoryConfigurations?: Array<fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration>;

  // The NetBIOS name of the AD computer object to which the SVM is joined.
  netbiosName?: string;
}

export function fsx_getOntapStorageVirtualMachineActiveDirectoryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'selfManagedActiveDirectoryConfigurations',
      '',
      () =>
        fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'netbiosName',
      'The NetBIOS name of the AD computer object to which the SVM is joined.',
      () => [],
      true,
      false,
    ),
  ];
}
