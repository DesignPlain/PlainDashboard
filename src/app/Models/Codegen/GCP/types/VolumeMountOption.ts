export interface VolumeMountOption {
  /*
(Output)
Export path of the volume.
*/
  Export?: string;

  /*
(Output)
Full export path of the volume.
Format for NFS volumes: `<export_ip>:/<shareName>`
Format for SMB volumes: `\\\\netbios_prefix-four_random_hex_letters.domain_name\\shareName`
*/
  ExportFull?: string;

  /*
(Output)
Human-readable mount instructions.
*/
  Instructions?: string;

  /*
(Output)
Protocol to mount with.
*/
  Protocol?: string;
}
