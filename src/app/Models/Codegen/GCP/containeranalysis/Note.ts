import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Containeranalysis_NoteAttestationAuthority,
  Containeranalysis_NoteAttestationAuthority_GetTypes,
} from "../types/Containeranalysis_NoteAttestationAuthority";
import {
  Containeranalysis_NoteRelatedUrl,
  Containeranalysis_NoteRelatedUrl_GetTypes,
} from "../types/Containeranalysis_NoteRelatedUrl";

export interface NoteArgs {
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
  AttestationAuthority?: Containeranalysis_NoteAttestationAuthority;

  // Time of expiration for this note. Leave empty if note does not expire.
  ExpirationTime?: string;

  // A detailed description of the note
  LongDescription?: string;

  // The name of the note.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Names of other notes related to this note.
  RelatedNoteNames?: Array<string>;

  /*
URLs associated with this note and related metadata.
Structure is documented below.
*/
  RelatedUrls?: Array<Containeranalysis_NoteRelatedUrl>;

  // A one sentence description of the note.
  ShortDescription?: string;
}
export class Note extends Resource {
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
  public AttestationAuthority?: Containeranalysis_NoteAttestationAuthority;

  // The type of analysis this note describes
  public Kind?: string;

  // The name of the note.
  public Name?: string;

  // A one sentence description of the note.
  public ShortDescription?: string;

  // The time this note was last updated.
  public UpdateTime?: string;

  /*
URLs associated with this note and related metadata.
Structure is documented below.
*/
  public RelatedUrls?: Array<Containeranalysis_NoteRelatedUrl>;

  // The time this note was created.
  public CreateTime?: string;

  // Time of expiration for this note. Leave empty if note does not expire.
  public ExpirationTime?: string;

  // A detailed description of the note
  public LongDescription?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Names of other notes related to this note.
  public RelatedNoteNames?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "RelatedUrls",
        "URLs associated with this note and related metadata.\nStructure is documented below.",
        Containeranalysis_NoteRelatedUrl_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ShortDescription",
        "A one sentence description of the note.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AttestationAuthority",
        'Note kind that represents a logical attestation "role" or "authority".\nFor example, an organization might have one AttestationAuthority for\n"QA" and one for "build". This Note is intended to act strictly as a\ngrouping mechanism for the attached Occurrences (Attestations). This\ngrouping mechanism also provides a security boundary, since IAM ACLs\ngate the ability for a principle to attach an Occurrence to a given\nNote. It also provides a single point of lookup to find all attached\nAttestation Occurrences, even if they don\'t all live in the same\nproject.\nStructure is documented below.',
        Containeranalysis_NoteAttestationAuthority_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ExpirationTime",
        "Time of expiration for this note. Leave empty if note does not expire.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LongDescription",
        "A detailed description of the note",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the note.",
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
        InputType.Array,
        "RelatedNoteNames",
        "Names of other notes related to this note.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
