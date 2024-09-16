import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AttachedDiskArgs {
  /*
The project that the referenced compute instance is a part of. If `instance` is referenced by its
`self_link` the project defined in the link will take precedence.
*/
  project?: string;

  /*
The zone that the referenced compute instance is located within. If `instance` is referenced by its
`self_link` the zone defined in the link will take precedence.
*/
  zone?: string;

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
  deviceName?: string;

  /*
`name` or `self_link` of the disk that will be attached.


- - -
*/
  disk?: string;

  /*
`name` or `self_link` of the compute instance that the disk will be attached to.
If the `self_link` is provided then `zone` and `project` are extracted from the
self link. If only the name is used then `zone` and `project` must be defined
as properties on the resource or provider.
*/
  instance?: string;

  /*
The mode in which to attach this disk, either READ_WRITE or
READ_ONLY. If not specified, the default is to attach the disk in
READ_WRITE mode.

Possible values:
"READ_ONLY"
"READ_WRITE"
*/
  mode?: string;
}
export class AttachedDisk extends DS_Resource {
  /*
`name` or `self_link` of the disk that will be attached.


- - -
*/
  public disk?: string;

  /*
`name` or `self_link` of the compute instance that the disk will be attached to.
If the `self_link` is provided then `zone` and `project` are extracted from the
self link. If only the name is used then `zone` and `project` must be defined
as properties on the resource or provider.
*/
  public instance?: string;

  /*
The mode in which to attach this disk, either READ_WRITE or
READ_ONLY. If not specified, the default is to attach the disk in
READ_WRITE mode.

Possible values:
"READ_ONLY"
"READ_WRITE"
*/
  public mode?: string;

  /*
The project that the referenced compute instance is a part of. If `instance` is referenced by its
`self_link` the project defined in the link will take precedence.
*/
  public project?: string;

  /*
The zone that the referenced compute instance is located within. If `instance` is referenced by its
`self_link` the zone defined in the link will take precedence.
*/
  public zone?: string;

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
  public deviceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project that the referenced compute instance is a part of. If `instance` is referenced by its\n`self_link` the project defined in the link will take precedence.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'zone',
        'The zone that the referenced compute instance is located within. If `instance` is referenced by its\n`self_link` the zone defined in the link will take precedence.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deviceName',
        'Specifies a unique device name of your choice that is\nreflected into the /dev/disk/by-id/google-* tree of a Linux operating\nsystem running within the instance. This name can be used to\nreference the device for mounting, resizing, and so on, from within\nthe instance.\n\nIf not specified, the server chooses a default device name to apply\nto this disk, in the form persistent-disks-x, where x is a number\nassigned by Google Compute Engine.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'disk',
        '`name` or `self_link` of the disk that will be attached.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instance',
        '`name` or `self_link` of the compute instance that the disk will be attached to.\nIf the `self_link` is provided then `zone` and `project` are extracted from the\nself link. If only the name is used then `zone` and `project` must be defined\nas properties on the resource or provider.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'mode',
        'The mode in which to attach this disk, either READ_WRITE or\nREAD_ONLY. If not specified, the default is to attach the disk in\nREAD_WRITE mode.\n\nPossible values:\n"READ_ONLY"\n"READ_WRITE"',
        () => [],
        false,
        true,
      ),
    ];
  }
}
