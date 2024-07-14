import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration,
  fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes,
} from "./fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration";

export interface fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration {
  // The NetBIOS name of the Active Directory computer object that will be created for your SVM. This is often the same as the SVM name but can be different. AWS limits to 15 characters because of standard NetBIOS naming limits.
  netbiosName?: string;

  //
  selfManagedActiveDirectoryConfiguration?: fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}

export function fsx_OntapStorageVirtualMachineActiveDirectoryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "netbiosName",
      "The NetBIOS name of the Active Directory computer object that will be created for your SVM. This is often the same as the SVM name but can be different. AWS limits to 15 characters because of standard NetBIOS naming limits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "selfManagedActiveDirectoryConfiguration",
      "",
      fsx_OntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
