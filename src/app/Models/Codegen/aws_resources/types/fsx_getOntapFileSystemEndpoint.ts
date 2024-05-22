import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  fsx_getOntapFileSystemEndpointIntercluster,
  fsx_getOntapFileSystemEndpointIntercluster_GetTypes,
} from "./fsx_getOntapFileSystemEndpointIntercluster";
import {
  fsx_getOntapFileSystemEndpointManagement,
  fsx_getOntapFileSystemEndpointManagement_GetTypes,
} from "./fsx_getOntapFileSystemEndpointManagement";

export interface fsx_getOntapFileSystemEndpoint {
  // A FileSystemEndpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems. See FileSystemEndpoint below.
  interclusters?: Array<fsx_getOntapFileSystemEndpointIntercluster>;

  // A FileSystemEndpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API. See FileSystemEndpoint below.
  managements?: Array<fsx_getOntapFileSystemEndpointManagement>;
}

export function fsx_getOntapFileSystemEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "interclusters",
      "A FileSystemEndpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems. See FileSystemEndpoint below.",
      fsx_getOntapFileSystemEndpointIntercluster_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managements",
      "A FileSystemEndpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API. See FileSystemEndpoint below.",
      fsx_getOntapFileSystemEndpointManagement_GetTypes(),
      true,
      false,
    ),
  ];
}
