import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MembershipAuthority } from "../types/MembershipAuthority";
import { MembershipEndpoint } from "../types/MembershipEndpoint";

export interface MembershipArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Authority encodes how Google will recognize identities from this Membership.
See the workload identity documentation for more details:
https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
Structure is documented below.
*/
  Authority?: MembershipAuthority;

  /*
The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.

> --Warning:-- `description` is deprecated and will be removed in a future major release.
*/
  Description?: string;

  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  Endpoint?: MembershipEndpoint;

  /*
Labels to apply to this membership.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Location of the membership.
The default value is `global`.
*/
  Location?: string;

  /*
The client-provided identifier of the membership.


- - -
*/
  MembershipId?: string;
}
export class Membership extends Resource {
  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  public Endpoint?: MembershipEndpoint;

  /*
Labels to apply to this membership.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The unique identifier of the membership.
  public Name?: string;

  /*
Authority encodes how Google will recognize identities from this Membership.
See the workload identity documentation for more details:
https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
Structure is documented below.
*/
  public Authority?: MembershipAuthority;

  /*
The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.

> --Warning:-- `description` is deprecated and will be removed in a future major release.
*/
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Location of the membership.
The default value is `global`.
*/
  public Location?: string;

  /*
The client-provided identifier of the membership.


- - -
*/
  public MembershipId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Authority",
        "Authority encodes how Google will recognize identities from this Membership.\nSee the workload identity documentation for more details:\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.\n\n> **Warning:** `description` is deprecated and will be removed in a future major release.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Endpoint",
        "If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels to apply to this membership.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the membership.\nThe default value is `global`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipId",
        "The client-provided identifier of the membership.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
