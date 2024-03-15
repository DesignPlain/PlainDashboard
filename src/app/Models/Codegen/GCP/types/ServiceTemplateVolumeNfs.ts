export interface ServiceTemplateVolumeNfs {
  // Path that is exported by the NFS server.
  Path?: string;

  /*
If true, mount the NFS volume as read only

- - -
*/
  ReadOnly?: boolean;

  // Hostname or IP address of the NFS server
  Server?: string;
}
