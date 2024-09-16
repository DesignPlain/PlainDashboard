import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_MachineImageMachineImageEncryptionKey,
  compute_MachineImageMachineImageEncryptionKey_GetTypes,
} from '../types/compute_MachineImageMachineImageEncryptionKey';

export interface MachineImageArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.


- - -
*/
  sourceInstance?: string;

  // A text description of the resource.
  description?: string;

  /*
Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.
Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).
*/
  guestFlush?: boolean;

  /*
Encrypts the machine image using a customer-supplied encryption key.
After you encrypt a machine image with a customer-supplied key, you must
provide the same key if you use the machine image later (e.g. to create a
instance from the image)
Structure is documented below.
*/
  machineImageEncryptionKey?: compute_MachineImageMachineImageEncryptionKey;

  // Name of the resource.
  name?: string;
}
export class MachineImage extends DS_Resource {
  /*
The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.


- - -
*/
  public sourceInstance?: string;

  // The regional or multi-regional Cloud Storage bucket location where the machine image is stored.
  public storageLocations?: Array<string>;

  // A text description of the resource.
  public description?: string;

  /*
Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.
Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).
*/
  public guestFlush?: boolean;

  /*
Encrypts the machine image using a customer-supplied encryption key.
After you encrypt a machine image with a customer-supplied key, you must
provide the same key if you use the machine image later (e.g. to create a
instance from the image)
Structure is documented below.
*/
  public machineImageEncryptionKey?: compute_MachineImageMachineImageEncryptionKey;

  // Name of the resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourceInstance',
        'The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A text description of the resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'guestFlush',
        'Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.\nCurrently only supported on Windows instances using the Volume Shadow Copy Service (VSS).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'machineImageEncryptionKey',
        'Encrypts the machine image using a customer-supplied encryption key.\nAfter you encrypt a machine image with a customer-supplied key, you must\nprovide the same key if you use the machine image later (e.g. to create a\ninstance from the image)\nStructure is documented below.',
        () => compute_MachineImageMachineImageEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
