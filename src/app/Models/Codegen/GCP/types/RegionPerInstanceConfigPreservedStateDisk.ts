export interface RegionPerInstanceConfigPreservedStateDisk {
  /*
A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`.
`NEVER` - detach the disk when the VM is deleted, but do not delete the disk.
`ON_PERMANENT_INSTANCE_DELETION` will delete the stateful disk when the VM is permanently
deleted from the instance group.
Default value is `NEVER`.
Possible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.
*/
  DeleteRule?: string;

  // A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
  DeviceName?: string;

  /*
The mode of the disk.
Default value is `READ_WRITE`.
Possible values are: `READ_ONLY`, `READ_WRITE`.
*/
  Mode?: string;

  /*
The URI of an existing persistent disk to attach under the specified device-name in the format
`projects/project-id/zones/zone/disks/disk-name`.
*/
  Source?: string;
}
