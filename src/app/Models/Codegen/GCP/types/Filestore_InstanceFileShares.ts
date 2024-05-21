import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  filestore_InstanceFileSharesNfsExportOption,
  filestore_InstanceFileSharesNfsExportOption_GetTypes,
} from "./filestore_InstanceFileSharesNfsExportOption";

export interface filestore_InstanceFileShares {
  /*
File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.
*/
  capacityGb?: number;

  // The name of the fileshare (16 characters or less)
  name?: string;

  /*
Nfs Export Options. There is a limit of 10 export options per file share.
Structure is documented below.
*/
  nfsExportOptions?: Array<filestore_InstanceFileSharesNfsExportOption>;

  /*
The resource name of the backup, in the format
projects/{projectId}/locations/{locationId}/backups/{backupId},
that this file share has been restored from.
*/
  sourceBackup?: string;
}

export function filestore_InstanceFileShares_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "capacityGb",
      "File share capacity in GiB. This must be at least 1024 GiB\nfor the standard tier, or 2560 GiB for the premium tier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the fileshare (16 characters or less)",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nfsExportOptions",
      "Nfs Export Options. There is a limit of 10 export options per file share.\nStructure is documented below.",
      filestore_InstanceFileSharesNfsExportOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceBackup",
      "The resource name of the backup, in the format\nprojects/{projectId}/locations/{locationId}/backups/{backupId},\nthat this file share has been restored from.",
      [],
      false,
      true,
    ),
  ];
}
