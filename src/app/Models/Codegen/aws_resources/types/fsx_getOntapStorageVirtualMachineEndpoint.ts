import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  fsx_getOntapStorageVirtualMachineEndpointIscsi,
  fsx_getOntapStorageVirtualMachineEndpointIscsi_GetTypes,
} from "./fsx_getOntapStorageVirtualMachineEndpointIscsi";
import {
  fsx_getOntapStorageVirtualMachineEndpointManagement,
  fsx_getOntapStorageVirtualMachineEndpointManagement_GetTypes,
} from "./fsx_getOntapStorageVirtualMachineEndpointManagement";
import {
  fsx_getOntapStorageVirtualMachineEndpointNf,
  fsx_getOntapStorageVirtualMachineEndpointNf_GetTypes,
} from "./fsx_getOntapStorageVirtualMachineEndpointNf";
import {
  fsx_getOntapStorageVirtualMachineEndpointSmb,
  fsx_getOntapStorageVirtualMachineEndpointSmb_GetTypes,
} from "./fsx_getOntapStorageVirtualMachineEndpointSmb";

export interface fsx_getOntapStorageVirtualMachineEndpoint {
  //
  iscsis?: Array<fsx_getOntapStorageVirtualMachineEndpointIscsi>;

  // An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager. See SVM Endpoint below.
  managements?: Array<fsx_getOntapStorageVirtualMachineEndpointManagement>;

  // An endpoint for connecting using the Network File System (NFS) protocol. See SVM Endpoint below.
  nfs?: Array<fsx_getOntapStorageVirtualMachineEndpointNf>;

  // An endpoint for connecting using the Server Message Block (SMB) protocol. See SVM Endpoint below.
  smbs?: Array<fsx_getOntapStorageVirtualMachineEndpointSmb>;
}

export function fsx_getOntapStorageVirtualMachineEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "iscsis",
      "",
      fsx_getOntapStorageVirtualMachineEndpointIscsi_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managements",
      "An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager. See SVM Endpoint below.",
      fsx_getOntapStorageVirtualMachineEndpointManagement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nfs",
      "An endpoint for connecting using the Network File System (NFS) protocol. See SVM Endpoint below.",
      fsx_getOntapStorageVirtualMachineEndpointNf_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "smbs",
      "An endpoint for connecting using the Server Message Block (SMB) protocol. See SVM Endpoint below.",
      fsx_getOntapStorageVirtualMachineEndpointSmb_GetTypes(),
      true,
      false,
    ),
  ];
}
