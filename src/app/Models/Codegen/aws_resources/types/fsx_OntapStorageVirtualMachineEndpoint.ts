import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_OntapStorageVirtualMachineEndpointIscsi,
  fsx_OntapStorageVirtualMachineEndpointIscsi_GetTypes,
} from "./fsx_OntapStorageVirtualMachineEndpointIscsi";
import {
  fsx_OntapStorageVirtualMachineEndpointManagement,
  fsx_OntapStorageVirtualMachineEndpointManagement_GetTypes,
} from "./fsx_OntapStorageVirtualMachineEndpointManagement";
import {
  fsx_OntapStorageVirtualMachineEndpointNf,
  fsx_OntapStorageVirtualMachineEndpointNf_GetTypes,
} from "./fsx_OntapStorageVirtualMachineEndpointNf";
import {
  fsx_OntapStorageVirtualMachineEndpointSmb,
  fsx_OntapStorageVirtualMachineEndpointSmb_GetTypes,
} from "./fsx_OntapStorageVirtualMachineEndpointSmb";

export interface fsx_OntapStorageVirtualMachineEndpoint {
  // An endpoint for accessing data on your storage virtual machine via iSCSI protocol. See Endpoint.
  iscsis?: Array<fsx_OntapStorageVirtualMachineEndpointIscsi>;

  // An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API. See Endpoint.
  managements?: Array<fsx_OntapStorageVirtualMachineEndpointManagement>;

  // An endpoint for accessing data on your storage virtual machine via NFS protocol. See Endpoint.
  nfs?: Array<fsx_OntapStorageVirtualMachineEndpointNf>;

  // An endpoint for accessing data on your storage virtual machine via SMB protocol. This is only set if an active_directory_configuration has been set. See Endpoint.
  smbs?: Array<fsx_OntapStorageVirtualMachineEndpointSmb>;
}

export function fsx_OntapStorageVirtualMachineEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "smbs",
      "An endpoint for accessing data on your storage virtual machine via SMB protocol. This is only set if an active_directory_configuration has been set. See Endpoint.",
      fsx_OntapStorageVirtualMachineEndpointSmb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "iscsis",
      "An endpoint for accessing data on your storage virtual machine via iSCSI protocol. See Endpoint.",
      fsx_OntapStorageVirtualMachineEndpointIscsi_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managements",
      "An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API. See Endpoint.",
      fsx_OntapStorageVirtualMachineEndpointManagement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nfs",
      "An endpoint for accessing data on your storage virtual machine via NFS protocol. See Endpoint.",
      fsx_OntapStorageVirtualMachineEndpointNf_GetTypes(),
      false,
      false,
    ),
  ];
}
