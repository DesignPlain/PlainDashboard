export interface RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
  // Provide this property when creating the disk.
  Description?: string;

  /*
Specifies the disk name. If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.
*/
  DiskName?: string;

  /*
Specifies the size of the disk in base-2 GB. If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.
*/
  DiskSizeGb?: number;

  /*
The type of the boot disk attached to this runtime,
defaults to standard persistent disk. For valid values,
see `https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#disktype`
*/
  DiskType?: string;

  /*
Labels to apply to this disk. These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.
*/
  Labels?: Map<string, string>;
}
