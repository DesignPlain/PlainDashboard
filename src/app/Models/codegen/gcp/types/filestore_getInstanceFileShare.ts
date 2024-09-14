import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  filestore_getInstanceFileShareNfsExportOption,
  filestore_getInstanceFileShareNfsExportOption_GetTypes,
} from "./filestore_getInstanceFileShareNfsExportOption";

export interface filestore_getInstanceFileShare {
  /*
File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.
*/
  capacityGb?: number;

  /*
The name of a Filestore instance.

- - -
*/
  name?: string;

  // Nfs Export Options. There is a limit of 10 export options per file share.
  nfsExportOptions?: Array<filestore_getInstanceFileShareNfsExportOption>;

  /*
The resource name of the backup, in the format
projects/{projectId}/locations/{locationId}/backups/{backupId},
that this file share has been restored from.
*/
  sourceBackup?: string;
}

export function filestore_getInstanceFileShare_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "capacityGb",
      "File share capacity in GiB. This must be at least 1024 GiB\nfor the standard tier, or 2560 GiB for the premium tier.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a Filestore instance.\n\n- - -",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nfsExportOptions",
      "Nfs Export Options. There is a limit of 10 export options per file share.",
      () => filestore_getInstanceFileShareNfsExportOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceBackup",
      "The resource name of the backup, in the format\nprojects/{projectId}/locations/{locationId}/backups/{backupId},\nthat this file share has been restored from.",
      () => [],
      true,
      false,
    ),
  ];
}
