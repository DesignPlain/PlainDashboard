import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_MachineImageMachineImageEncryptionKey,
  Compute_MachineImageMachineImageEncryptionKey_GetTypes,
} from "../types/Compute_MachineImageMachineImageEncryptionKey";

export interface MachineImageArgs {
  // A text description of the resource.
  Description?: string;

  /*
Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.
Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).
*/
  GuestFlush?: boolean;

  /*
Encrypts the machine image using a customer-supplied encryption key.
After you encrypt a machine image with a customer-supplied key, you must
provide the same key if you use the machine image later (e.g. to create a
instance from the image)
Structure is documented below.
*/
  MachineImageEncryptionKey?: Compute_MachineImageMachineImageEncryptionKey;

  // Name of the resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.


- - -
*/
  SourceInstance?: string;
}
export class MachineImage extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.


- - -
*/
  public SourceInstance?: string;

  // The regional or multi-regional Cloud Storage bucket location where the machine image is stored.
  public StorageLocations?: Array<string>;

  // A text description of the resource.
  public Description?: string;

  /*
Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.
Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).
*/
  public GuestFlush?: boolean;

  /*
Encrypts the machine image using a customer-supplied encryption key.
After you encrypt a machine image with a customer-supplied key, you must
provide the same key if you use the machine image later (e.g. to create a
instance from the image)
Structure is documented below.
*/
  public MachineImageEncryptionKey?: Compute_MachineImageMachineImageEncryptionKey;

  // Name of the resource.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "MachineImageEncryptionKey",
        "Encrypts the machine image using a customer-supplied encryption key.\nAfter you encrypt a machine image with a customer-supplied key, you must\nprovide the same key if you use the machine image later (e.g. to create a\ninstance from the image)\nStructure is documented below.",
        Compute_MachineImageMachineImageEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceInstance",
        "The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A text description of the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "GuestFlush",
        "Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.\nCurrently only supported on Windows instances using the Volume Shadow Copy Service (VSS).",
        [],
        false,
        true,
      ),
    ];
  }
}
