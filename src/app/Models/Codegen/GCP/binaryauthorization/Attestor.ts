import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Binaryauthorization_AttestorAttestationAuthorityNote,
  Binaryauthorization_AttestorAttestationAuthorityNote_GetTypes,
} from "../types/Binaryauthorization_AttestorAttestationAuthorityNote";

export interface AttestorArgs {
  /*
A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.
Structure is documented below.
*/
  AttestationAuthorityNote?: Binaryauthorization_AttestorAttestationAuthorityNote;

  /*
A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
*/
  Description?: string;

  // The resource name.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Attestor extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.
Structure is documented below.
*/
  public AttestationAuthorityNote?: Binaryauthorization_AttestorAttestationAuthorityNote;

  /*
A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
*/
  public Description?: string;

  // The resource name.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "AttestationAuthorityNote",
        "A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.\nStructure is documented below.",
        Binaryauthorization_AttestorAttestationAuthorityNote_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A descriptive comment. This field may be updated. The field may be\ndisplayed in chooser dialogs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name.",
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
    ];
  }
}
