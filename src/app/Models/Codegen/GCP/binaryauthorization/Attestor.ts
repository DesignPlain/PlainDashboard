import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AttestorAttestationAuthorityNote } from "../types/AttestorAttestationAuthorityNote";

export interface AttestorArgs {
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

  /*
A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.
Structure is documented below.
*/
  AttestationAuthorityNote?: AttestorAttestationAuthorityNote;
}
export class Attestor extends Resource {
  /*
A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.
Structure is documented below.
*/
  public AttestationAuthorityNote?: AttestorAttestationAuthorityNote;

  /*
A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
*/
  public Description?: string;

  // The resource name.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AttestationAuthorityNote",
        "A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A descriptive comment. This field may be updated. The field may be\ndisplayed in chooser dialogs.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The resource name."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
