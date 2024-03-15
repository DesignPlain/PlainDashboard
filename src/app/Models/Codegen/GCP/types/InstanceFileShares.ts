import { InstanceFileSharesNfsExportOption } from "./InstanceFileSharesNfsExportOption";

export interface InstanceFileShares {
  /*
Nfs Export Options. There is a limit of 10 export options per file share.
Structure is documented below.
*/
  NfsExportOptions?: Array<InstanceFileSharesNfsExportOption>;

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
