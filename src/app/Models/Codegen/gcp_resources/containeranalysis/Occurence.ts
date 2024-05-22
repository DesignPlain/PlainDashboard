import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  containeranalysis_OccurenceAttestation,
  containeranalysis_OccurenceAttestation_GetTypes,
} from "../types/containeranalysis_OccurenceAttestation";

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
  attestation?: containeranalysis_OccurenceAttestation;

  /*
The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests.
*/
  noteName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // A description of actions that can be taken to remedy the note.
  remediation?: string;

  /*
Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image.
*/
  resourceUri?: string;
}
export class Occurence extends Resource {
  // The time when the repository was created.
  public createTime?: string;

  /*
The note kind which explicitly denotes which of the occurrence
details are specified. This field can be used as a filter in list
requests.
*/
  public kind?: string;

  /*
The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests.
*/
  public noteName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // A description of actions that can be taken to remedy the note.
  public remediation?: string;

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
  public attestation?: containeranalysis_OccurenceAttestation;

  // The name of the occurrence.
  public name?: string;

  /*
Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image.
*/
  public resourceUri?: string;

  // The time when the repository was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceUri",
        "Required. Immutable. A URI that represents the resource for which\nthe occurrence applies. For example,\nhttps://gcr.io/project/image@sha256:123abc for a Docker image.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "attestation",
        'Occurrence that represents a single "attestation". The authenticity\nof an attestation can be verified using the attached signature.\nIf the verifier trusts the public key of the signer, then verifying\nthe signature is sufficient to establish trust. In this circumstance,\nthe authority to which this attestation is attached is primarily\nuseful for lookup (how to find this attestation if you already\nknow the authority and artifact to be verified) and intent (for\nwhich authority this attestation was intended to sign.\nStructure is documented below.',
        containeranalysis_OccurenceAttestation_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "noteName",
        "The analysis note associated with this occurrence, in the form of\nprojects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a\nfilter in list requests.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "remediation",
        "A description of actions that can be taken to remedy the note.",
        [],
        false,
        false,
      ),
    ];
  }
}
