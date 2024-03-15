import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MachineImageMachineImageEncryptionKey } from "../types/MachineImageMachineImageEncryptionKey";

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
  MachineImageEncryptionKey?: MachineImageMachineImageEncryptionKey;

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
Encrypts the machine image using a customer-supplied encryption key.
After you encrypt a machine image with a customer-supplied key, you must
provide the same key if you use the machine image later (e.g. to create a
instance from the image)
Structure is documented below.
*/
  public MachineImageEncryptionKey?: MachineImageMachineImageEncryptionKey;

  // Name of the resource.
  public Name?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A text description of the resource.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "GuestFlush",
        "Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.\nCurrently only supported on Windows instances using the Volume Shadow Copy Service (VSS).",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineImageEncryptionKey",
        "Encrypts the machine image using a customer-supplied encryption key.\nAfter you encrypt a machine image with a customer-supplied key, you must\nprovide the same key if you use the machine image later (e.g. to create a\ninstance from the image)\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the resource."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceInstance",
        "The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.\n\n\n- - -",
      ),
    ];
  }
}
