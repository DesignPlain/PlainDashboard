import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration,
  fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes,
} from "./fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration";

export interface fsx_getOntapStorageVirtualMachineActiveDirectoryConfiguration {
  // The NetBIOS name of the AD computer object to which the SVM is joined.
  netbiosName?: string;

  //
  selfManagedActiveDirectoryConfigurations?: Array<fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration>;
}

export function fsx_getOntapStorageVirtualMachineActiveDirectoryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "netbiosName",
      "The NetBIOS name of the AD computer object to which the SVM is joined.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "selfManagedActiveDirectoryConfigurations",
      "",
      fsx_getOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
