import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  containeranalysis_NoteAttestationAuthority,
  containeranalysis_NoteAttestationAuthority_GetTypes,
} from '../types/containeranalysis_NoteAttestationAuthority';
import {
  containeranalysis_NoteRelatedUrl,
  containeranalysis_NoteRelatedUrl_GetTypes,
} from '../types/containeranalysis_NoteRelatedUrl';

export interface NoteArgs {
  // A one sentence description of the note.
  shortDescription?: string;

  /*
Note kind that represents a logical attestation "role" or "authority".
For example, an organization might have one AttestationAuthority for
"QA" and one for "build". This Note is intended to act strictly as a
grouping mechanism for the attached Occurrences (Attestations). This
grouping mechanism also provides a security boundary, since IAM ACLs
gate the ability for a principle to attach an Occurrence to a given
Note. It also provides a single point of lookup to find all attached
Attestation Occurrences, even if they don't all live in the same
project.
Structure is documented below.
*/
  attestationAuthority?: containeranalysis_NoteAttestationAuthority;

  // Time of expiration for this note. Leave empty if note does not expire.
  expirationTime?: string;

  // A detailed description of the note
  longDescription?: string;

  // The name of the note.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Names of other notes related to this note.
  relatedNoteNames?: Array<string>;

  /*
URLs associated with this note and related metadata.
Structure is documented below.
*/
  relatedUrls?: Array<containeranalysis_NoteRelatedUrl>;
}
export class Note extends DS_Resource {
  /*
Note kind that represents a logical attestation "role" or "authority".
For example, an organization might have one AttestationAuthority for
"QA" and one for "build". This Note is intended to act strictly as a
grouping mechanism for the attached Occurrences (Attestations). This
grouping mechanism also provides a security boundary, since IAM ACLs
gate the ability for a principle to attach an Occurrence to a given
Note. It also provides a single point of lookup to find all attached
Attestation Occurrences, even if they don't all live in the same
project.
Structure is documented below.
*/
  public attestationAuthority?: containeranalysis_NoteAttestationAuthority;

  // Time of expiration for this note. Leave empty if note does not expire.
  public expirationTime?: string;

  // A detailed description of the note
  public longDescription?: string;

  // The name of the note.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Names of other notes related to this note.
  public relatedNoteNames?: Array<string>;

  // The time this note was created.
  public createTime?: string;

  // The type of analysis this note describes
  public kind?: string;

  /*
URLs associated with this note and related metadata.
Structure is documented below.
*/
  public relatedUrls?: Array<containeranalysis_NoteRelatedUrl>;

  // A one sentence description of the note.
  public shortDescription?: string;

  // The time this note was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'attestationAuthority',
        'Note kind that represents a logical attestation "role" or "authority".\nFor example, an organization might have one AttestationAuthority for\n"QA" and one for "build". This Note is intended to act strictly as a\ngrouping mechanism for the attached Occurrences (Attestations). This\ngrouping mechanism also provides a security boundary, since IAM ACLs\ngate the ability for a principle to attach an Occurrence to a given\nNote. It also provides a single point of lookup to find all attached\nAttestation Occurrences, even if they don\'t all live in the same\nproject.\nStructure is documented below.',
        () => containeranalysis_NoteAttestationAuthority_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'expirationTime',
        'Time of expiration for this note. Leave empty if note does not expire.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'longDescription',
        'A detailed description of the note',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the note.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'relatedNoteNames',
        'Names of other notes related to this note.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'relatedUrls',
        'URLs associated with this note and related metadata.\nStructure is documented below.',
        () => containeranalysis_NoteRelatedUrl_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'shortDescription',
        'A one sentence description of the note.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
