import { getInstanceFileShareNfsExportOption } from "./getInstanceFileShareNfsExportOption";

export interface getInstanceFileShare {
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
  NfsExportOptions?: Array<getInstanceFileShareNfsExportOption>;

  /*
The resource name of the backup, in the format
projects/{projectId}/locations/{locationId}/backups/{backupId},
that this file share has been restored from.
*/
  SourceBackup?: string;
}
