import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { OccurenceAttestation } from "../types/OccurenceAttestation";

export interface OccurenceArgs {
  /*
Occurrence that represents a single "attestation". The authenticity
of an attestation can be verified using the attached signature.
If the verifier trusts the public key of the signer, then verifying
the signature is sufficient to establish trust. In this circumstance,
the authority to which this attestation is attached is primarily
useful for lookup (how to find this attestation if you already
know the authority and artifact to be verified) and intent (for
which authority this attestation was intended to sign.
Structure is documented below.
*/
  Attestation?: OccurenceAttestation;

  /*
The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests.
*/
  NoteName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A description of actions that can be taken to remedy the note.
  Remediation?: string;

  /*
Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image.
*/
  ResourceUri?: string;
}
export class Occurence extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Occurrence that represents a single "attestation". The authenticity
of an attestation can be verified using the attached signature.
If the verifier trusts the public key of the signer, then verifying
the signature is sufficient to establish trust. In this circumstance,
the authority to which this attestation is attached is primarily
useful for lookup (how to find this attestation if you already
know the authority and artifact to be verified) and intent (for
which authority this attestation was intended to sign.
Structure is documented below.
*/
  public Attestation?: OccurenceAttestation;

  // The name of the occurrence.
  public Name?: string;

  /*
The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests.
*/
  public NoteName?: string;

  /*
Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image.
*/
  public ResourceUri?: string;

  // The time when the repository was last updated.
  public UpdateTime?: string;

  // The time when the repository was created.
  public CreateTime?: string;

  /*
The note kind which explicitly denotes which of the occurrence
details are specified. This field can be used as a filter in list
requests.
*/
  public Kind?: string;

  // A description of actions that can be taken to remedy the note.
  public Remediation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Attestation",
        'Occurrence that represents a single "attestation". The authenticity\nof an attestation can be verified using the attached signature.\nIf the verifier trusts the public key of the signer, then verifying\nthe signature is sufficient to establish trust. In this circumstance,\nthe authority to which this attestation is attached is primarily\nuseful for lookup (how to find this attestation if you already\nknow the authority and artifact to be verified) and intent (for\nwhich authority this attestation was intended to sign.\nStructure is documented below.',
      ),
      new DynamicUIProps(
        InputType.String,
        "NoteName",
        "The analysis note associated with this occurrence, in the form of\nprojects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a\nfilter in list requests.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Remediation",
        "A description of actions that can be taken to remedy the note.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceUri",
        "Required. Immutable. A URI that represents the resource for which\nthe occurrence applies. For example,\nhttps://gcr.io/project/image@sha256:123abc for a Docker image.",
      ),
    ];
  }
}
