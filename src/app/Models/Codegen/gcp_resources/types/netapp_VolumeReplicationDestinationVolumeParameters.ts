import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface netapp_VolumeReplicationDestinationVolumeParameters {
  // Name for the destination volume to be created. If not specified, the name of the source volume will be used.
  volumeId?: string;

  // Description for the destination volume.
  description?: string;

  // Share name for destination volume. If not specified, name of source volume's share name will be used.
  shareName?: string;

  // Name of an existing storage pool for the destination volume with format: `projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}`
  storagePool?: string;
}

export function netapp_VolumeReplicationDestinationVolumeParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "volumeId",
      "Name for the destination volume to be created. If not specified, the name of the source volume will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description for the destination volume.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "shareName",
      "Share name for destination volume. If not specified, name of source volume's share name will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "storagePool",
      "Name of an existing storage pool for the destination volume with format: `projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}`",
      [],
      true,
      true,
    ),
  ];
}
