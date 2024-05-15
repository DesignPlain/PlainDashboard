import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Filestore_InstanceFileSharesNfsExportOption,
  Filestore_InstanceFileSharesNfsExportOption_GetTypes,
} from "./Filestore_InstanceFileSharesNfsExportOption";

export interface Filestore_InstanceFileShares {
  /*
Nfs Export Options. There is a limit of 10 export options per file share.
Structure is documented below.
*/
  NfsExportOptions?: Array<Filestore_InstanceFileSharesNfsExportOption>;

  /*
The resource name of the backup, in the format
projects/{projectId}/locations/{locationId}/backups/{backupId},
that this file share has been restored from.
*/
  SourceBackup?: string;

  /*
File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.
*/
  CapacityGb?: number;

  // The name of the fileshare (16 characters or less)
  Name?: string;
}

export function Filestore_InstanceFileShares_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NfsExportOptions",
      "Nfs Export Options. There is a limit of 10 export options per file share.\nStructure is documented below.",
      Filestore_InstanceFileSharesNfsExportOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceBackup",
      "The resource name of the backup, in the format\nprojects/{projectId}/locations/{locationId}/backups/{backupId},\nthat this file share has been restored from.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "CapacityGb",
      "File share capacity in GiB. This must be at least 1024 GiB\nfor the standard tier, or 2560 GiB for the premium tier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the fileshare (16 characters or less)",
      [],
      true,
      true,
    ),
  ];
}
