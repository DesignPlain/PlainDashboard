import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NoteRelatedUrl } from "../types/NoteRelatedUrl";
import { NoteAttestationAuthority } from "../types/NoteAttestationAuthority";

export interface NoteArgs {
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
  RelatedUrls?: Array<NoteRelatedUrl>;

  // A one sentence description of the note.
  ShortDescription?: string;

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
  AttestationAuthority?: NoteAttestationAuthority;

  // Time of expiration for this note. Leave empty if note does not expire.
  ExpirationTime?: string;
}
export class Note extends Resource {
  // The time this note was created.
  public CreateTime?: string;

  // Time of expiration for this note. Leave empty if note does not expire.
  public ExpirationTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // A one sentence description of the note.
  public ShortDescription?: string;

  // The time this note was last updated.
  public UpdateTime?: string;

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
  public AttestationAuthority?: NoteAttestationAuthority;

  // The type of analysis this note describes
  public Kind?: string;

  // A detailed description of the note
  public LongDescription?: string;

  // The name of the note.
  public Name?: string;

  // Names of other notes related to this note.
  public RelatedNoteNames?: Array<string>;

  /*
URLs associated with this note and related metadata.
Structure is documented below.
*/
  public RelatedUrls?: Array<NoteRelatedUrl>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AttestationAuthority",
        'Note kind that represents a logical attestation "role" or "authority".\nFor example, an organization might have one AttestationAuthority for\n"QA" and one for "build". This Note is intended to act strictly as a\ngrouping mechanism for the attached Occurrences (Attestations). This\ngrouping mechanism also provides a security boundary, since IAM ACLs\ngate the ability for a principle to attach an Occurrence to a given\nNote. It also provides a single point of lookup to find all attached\nAttestation Occurrences, even if they don\'t all live in the same\nproject.\nStructure is documented below.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ExpirationTime",
        "Time of expiration for this note. Leave empty if note does not expire.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LongDescription",
        "A detailed description of the note",
      ),
      new DynamicUIProps(InputType.String, "Name", "The name of the note."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "RelatedNoteNames",
        "Names of other notes related to this note.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "RelatedUrls",
        "URLs associated with this note and related metadata.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShortDescription",
        "A one sentence description of the note.",
      ),
    ];
  }
}
