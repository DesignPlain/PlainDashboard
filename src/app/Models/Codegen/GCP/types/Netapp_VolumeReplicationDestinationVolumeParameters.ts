import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Netapp_VolumeReplicationDestinationVolumeParameters {
  // Name of an existing storage pool for the destination volume with format: `projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}`
  StoragePool?: string;

  // Name for the destination volume to be created. If not specified, the name of the source volume will be used.
  VolumeId?: string;

  // Description for the destination volume.
  Description?: string;

  // Share name for destination volume. If not specified, name of source volume's share name will be used.
  ShareName?: string;
}

export function Netapp_VolumeReplicationDestinationVolumeParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ShareName",
      "Share name for destination volume. If not specified, name of source volume's share name will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StoragePool",
      "Name of an existing storage pool for the destination volume with format: `projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}`",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "VolumeId",
      "Name for the destination volume to be created. If not specified, the name of the source volume will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description for the destination volume.",
      [],
      false,
      true,
    ),
  ];
}
