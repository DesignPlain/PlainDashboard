import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AttachedDiskArgs {
  /*
Specifies a unique device name of your choice that is
reflected into the /dev/disk/by-id/google-- tree of a Linux operating
system running within the instance. This name can be used to
reference the device for mounting, resizing, and so on, from within
the instance.

If not specified, the server chooses a default device name to apply
to this disk, in the form persistent-disks-x, where x is a number
assigned by Google Compute Engine.
*/
  DeviceName?: string;

  /*
`name` or `self_link` of the disk that will be attached.


- - -
*/
  Disk?: string;

  /*
`name` or `self_link` of the compute instance that the disk will be attached to.
If the `self_link` is provided then `zone` and `project` are extracted from the
self link. If only the name is used then `zone` and `project` must be defined
as properties on the resource or provider.
*/
  Instance?: string;

  /*
The mode in which to attach this disk, either READ_WRITE or
READ_ONLY. If not specified, the default is to attach the disk in
READ_WRITE mode.

Possible values:
"READ_ONLY"
"READ_WRITE"
*/
  Mode?: string;

  /*
The project that the referenced compute instance is a part of. If `instance` is referenced by its
`self_link` the project defined in the link will take precedence.
*/
  Project?: string;

  /*
The zone that the referenced compute instance is located within. If `instance` is referenced by its
`self_link` the zone defined in the link will take precedence.
*/
  Zone?: string;
}
export class AttachedDisk extends Resource {
  /*
`name` or `self_link` of the compute instance that the disk will be attached to.
If the `self_link` is provided then `zone` and `project` are extracted from the
self link. If only the name is used then `zone` and `project` must be defined
as properties on the resource or provider.
*/
  public Instance?: string;

  /*
The mode in which to attach this disk, either READ_WRITE or
READ_ONLY. If not specified, the default is to attach the disk in
READ_WRITE mode.

Possible values:
"READ_ONLY"
"READ_WRITE"
*/
  public Mode?: string;

  /*
The project that the referenced compute instance is a part of. If `instance` is referenced by its
`self_link` the project defined in the link will take precedence.
*/
  public Project?: string;

  /*
The zone that the referenced compute instance is located within. If `instance` is referenced by its
`self_link` the zone defined in the link will take precedence.
*/
  public Zone?: string;

  /*
Specifies a unique device name of your choice that is
reflected into the /dev/disk/by-id/google-- tree of a Linux operating
system running within the instance. This name can be used to
reference the device for mounting, resizing, and so on, from within
the instance.

If not specified, the server chooses a default device name to apply
to this disk, in the form persistent-disks-x, where x is a number
assigned by Google Compute Engine.
*/
  public DeviceName?: string;

  /*
`name` or `self_link` of the disk that will be attached.


- - -
*/
  public Disk?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Disk",
        "`name` or `self_link` of the disk that will be attached.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "`name` or `self_link` of the compute instance that the disk will be attached to.\nIf the `self_link` is provided then `zone` and `project` are extracted from the\nself link. If only the name is used then `zone` and `project` must be defined\nas properties on the resource or provider.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Mode",
        'The mode in which to attach this disk, either READ_WRITE or\nREAD_ONLY. If not specified, the default is to attach the disk in\nREAD_WRITE mode.\n\nPossible values:\n"READ_ONLY"\n"READ_WRITE"',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project that the referenced compute instance is a part of. If `instance` is referenced by its\n`self_link` the project defined in the link will take precedence.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that the referenced compute instance is located within. If `instance` is referenced by its\n`self_link` the zone defined in the link will take precedence.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeviceName",
        "Specifies a unique device name of your choice that is\nreflected into the /dev/disk/by-id/google-* tree of a Linux operating\nsystem running within the instance. This name can be used to\nreference the device for mounting, resizing, and so on, from within\nthe instance.\n\nIf not specified, the server chooses a default device name to apply\nto this disk, in the form persistent-disks-x, where x is a number\nassigned by Google Compute Engine.",
      ),
    ];
  }
}
