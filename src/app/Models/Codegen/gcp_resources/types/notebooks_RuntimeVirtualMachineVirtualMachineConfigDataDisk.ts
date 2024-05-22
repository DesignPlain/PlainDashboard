import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams,
  notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams";

export interface notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk {
  /*
"Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: - NVME - SCSI".
*/
  interface?: string;

  /*
The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If not specified, the default is to attach
the disk in READ_WRITE mode.
*/
  mode?: string;

  /*
Specifies a valid partial or full URL to an existing
Persistent Disk resource.
*/
  source?: string;

  /*
Specifies the type of the disk, either SCRATCH or PERSISTENT.
If not specified, the default is PERSISTENT.
*/
  type?: string;

  /*
(Output)
Optional. Specifies whether the disk will be auto-deleted
when the instance is deleted (but not when the disk is
detached from the instance).
*/
  autoDelete?: boolean;

  /*
(Output)
Optional. Indicates that this is a boot disk. The virtual
machine will use the first partition of the disk for its
root filesystem.
*/
  boot?: boolean;

  /*
(Output)
Output only. A zero-based index to this disk, where 0 is
reserved for the boot disk. If you have many disks attached
to an instance, each disk would have a unique index number.
*/
  index?: number;

  /*
Input only. Specifies the parameters for a new disk that will
be created alongside the new instance. Use initialization
parameters to create boot disks or local SSDs attached to the
new instance. This property is mutually exclusive with the
source property; you can only define one or the other, but not
both.
Structure is documented below.
*/
  initializeParams?: notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams;

  /*
(Output)
Type of the resource. Always compute#attachedDisk for attached
disks.
*/
  kind?: string;

  /*
(Output)
Output only. Any valid publicly visible licenses.
*/
  licenses?: Array<string>;

  /*
(Output)
Optional. Specifies a unique device name of your choice
that is reflected into the /dev/disk/by-id/google-- tree
of a Linux operating system running within the instance.
This name can be used to reference the device for mounting,
resizing, and so on, from within the instance.
If not specified, the server chooses a default device name
to apply to this disk, in the form persistent-disk-x, where
x is a number assigned by Google Compute Engine. This field
is only applicable for persistent disks.
*/
  deviceName?: string;

  /*
(Output)
Indicates a list of features to enable on the guest operating
system. Applicable only for bootable images. To see a list of
available features, read `https://cloud.google.com/compute/docs/
images/create-delete-deprecate-private-images#guest-os-features`
options. ``
*/
  guestOsFeatures?: Array<string>;
}

export function notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "initializeParams",
      "Input only. Specifies the parameters for a new disk that will\nbe created alongside the new instance. Use initialization\nparameters to create boot disks or local SSDs attached to the\nnew instance. This property is mutually exclusive with the\nsource property; you can only define one or the other, but not\nboth.\nStructure is documented below.",
      notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kind",
      "(Output)\nType of the resource. Always compute#attachedDisk for attached\ndisks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "licenses",
      "(Output)\nOutput only. Any valid publicly visible licenses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "(Output)\nOptional. Specifies a unique device name of your choice\nthat is reflected into the /dev/disk/by-id/google-* tree\nof a Linux operating system running within the instance.\nThis name can be used to reference the device for mounting,\nresizing, and so on, from within the instance.\nIf not specified, the server chooses a default device name\nto apply to this disk, in the form persistent-disk-x, where\nx is a number assigned by Google Compute Engine. This field\nis only applicable for persistent disks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interface",
      '"Specifies the disk interface to use for attaching this disk,\nwhich is either SCSI or NVME. The default is SCSI. Persistent\ndisks must always use SCSI and the request will fail if you attempt\nto attach a persistent disk in any other format than SCSI. Local SSDs\ncan use either NVME or SCSI. For performance characteristics of SCSI\nover NVMe, see Local SSD performance. Valid values: * NVME * SCSI".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "Specifies a valid partial or full URL to an existing\nPersistent Disk resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDelete",
      "(Output)\nOptional. Specifies whether the disk will be auto-deleted\nwhen the instance is deleted (but not when the disk is\ndetached from the instance).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "index",
      "(Output)\nOutput only. A zero-based index to this disk, where 0 is\nreserved for the boot disk. If you have many disks attached\nto an instance, each disk would have a unique index number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guestOsFeatures",
      "(Output)\nIndicates a list of features to enable on the guest operating\nsystem. Applicable only for bootable images. To see a list of\navailable features, read `https://cloud.google.com/compute/docs/\nimages/create-delete-deprecate-private-images#guest-os-features`\noptions. ``",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode in which to attach this disk, either READ_WRITE\nor READ_ONLY. If not specified, the default is to attach\nthe disk in READ_WRITE mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Specifies the type of the disk, either SCRATCH or PERSISTENT.\nIf not specified, the default is PERSISTENT.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "boot",
      "(Output)\nOptional. Indicates that this is a boot disk. The virtual\nmachine will use the first partition of the disk for its\nroot filesystem.",
      [],
      false,
      false,
    ),
  ];
}
