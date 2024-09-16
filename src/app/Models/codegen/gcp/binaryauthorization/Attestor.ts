import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  binaryauthorization_AttestorAttestationAuthorityNote,
  binaryauthorization_AttestorAttestationAuthorityNote_GetTypes,
} from '../types/binaryauthorization_AttestorAttestationAuthorityNote';

export interface AttestorArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.
Structure is documented below.
*/
  attestationAuthorityNote?: binaryauthorization_AttestorAttestationAuthorityNote;

  /*
A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
*/
  description?: string;

  // The resource name.
  name?: string;
}
export class Attestor extends DS_Resource {
  // The resource name.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.
Structure is documented below.
*/
  public attestationAuthorityNote?: binaryauthorization_AttestorAttestationAuthorityNote;

  /*
A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
*/
  public description?: string;

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
        InputType.Object,
        'attestationAuthorityNote',
        'A Container Analysis ATTESTATION_AUTHORITY Note, created by the user.\nStructure is documented below.',
        () => binaryauthorization_AttestorAttestationAuthorityNote_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A descriptive comment. This field may be updated. The field may be\ndisplayed in chooser dialogs.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The resource name.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
