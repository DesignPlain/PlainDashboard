import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkehub_MembershipAuthority,
  gkehub_MembershipAuthority_GetTypes,
} from '../types/gkehub_MembershipAuthority';
import {
  gkehub_MembershipEndpoint,
  gkehub_MembershipEndpoint_GetTypes,
} from '../types/gkehub_MembershipEndpoint';

export interface MembershipArgs {
  /*
Location of the membership.
The default value is `global`.
*/
  location?: string;

  /*
The client-provided identifier of the membership.


- - -
*/
  membershipId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Authority encodes how Google will recognize identities from this Membership.
See the workload identity documentation for more details:
https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
Structure is documented below.
*/
  authority?: gkehub_MembershipAuthority;

  /*
The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.

> --Warning:-- `description` is deprecated and will be removed in a future major release.
*/
  description?: string;

  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  endpoint?: gkehub_MembershipEndpoint;

  /*
Labels to apply to this membership.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;
}
export class Membership extends DS_Resource {
  /*
Authority encodes how Google will recognize identities from this Membership.
See the workload identity documentation for more details:
https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
Structure is documented below.
*/
  public authority?: gkehub_MembershipAuthority;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The client-provided identifier of the membership.


- - -
*/
  public membershipId?: string;

  // The unique identifier of the membership.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.

> --Warning:-- `description` is deprecated and will be removed in a future major release.
*/
  public description?: string;

  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  public endpoint?: gkehub_MembershipEndpoint;

  /*
Labels to apply to this membership.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Location of the membership.
The default value is `global`.
*/
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'location',
        'Location of the membership.\nThe default value is `global`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'membershipId',
        'The client-provided identifier of the membership.\n\n\n- - -',
        () => [],
        true,
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
        InputType.Object,
        'authority',
        'Authority encodes how Google will recognize identities from this Membership.\nSee the workload identity documentation for more details:\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity\nStructure is documented below.',
        () => gkehub_MembershipAuthority_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.\n\n> **Warning:** `description` is deprecated and will be removed in a future major release.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'endpoint',
        'If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.\nStructure is documented below.',
        () => gkehub_MembershipEndpoint_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Labels to apply to this membership.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
