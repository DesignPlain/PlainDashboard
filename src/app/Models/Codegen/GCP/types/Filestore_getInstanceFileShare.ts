import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Filestore_getInstanceFileShareNfsExportOption,
  Filestore_getInstanceFileShareNfsExportOption_GetTypes,
} from "./Filestore_getInstanceFileShareNfsExportOption";

export interface Filestore_getInstanceFileShare {
  /*
File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.
*/
  CapacityGb?: number;

  /*
The name of a Filestore instance.

- - -
*/
  Name?: string;

  // Nfs Export Options. There is a limit of 10 export options per file share.
  NfsExportOptions?: Array<Filestore_getInstanceFileShareNfsExportOption>;

  /*
The resource name of the backup, in the format
projects/{projectId}/locations/{locationId}/backups/{backupId},
that this file share has been restored from.
*/
  SourceBackup?: string;
}

export function Filestore_getInstanceFileShare_GetTypes(): DynamicUIProps[] {
  return [
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
      "The name of a Filestore instance.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NfsExportOptions",
      "Nfs Export Options. There is a limit of 10 export options per file share.",
      Filestore_getInstanceFileShareNfsExportOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceBackup",
      "The resource name of the backup, in the format\nprojects/{projectId}/locations/{locationId}/backups/{backupId},\nthat this file share has been restored from.",
      [],
      true,
      false,
    ),
  ];
}
