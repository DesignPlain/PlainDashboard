import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iam_WorkloadIdentityPoolProviderOidc,
  iam_WorkloadIdentityPoolProviderOidc_GetTypes,
} from "../types/iam_WorkloadIdentityPoolProviderOidc";
import {
  iam_WorkloadIdentityPoolProviderAws,
  iam_WorkloadIdentityPoolProviderAws_GetTypes,
} from "../types/iam_WorkloadIdentityPoolProviderAws";
import {
  iam_WorkloadIdentityPoolProviderSaml,
  iam_WorkloadIdentityPoolProviderSaml_GetTypes,
} from "../types/iam_WorkloadIdentityPoolProviderSaml";

export interface WorkloadIdentityPoolProviderArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An SAML 2.0 identity provider. Not compatible with the property oidc or aws.
Structure is documented below.
*/
  saml?: iam_WorkloadIdentityPoolProviderSaml;

  /*
The ID used for the pool, which is the final component of the pool resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.
*/
  workloadIdentityPoolId?: string;

  /*
[A Common Expression Language](https://opensource.google/projects/cel) expression, in
plain text, to restrict what otherwise valid authentication credentials issued by the
provider should not be accepted.
The expression must output a boolean representing whether to allow the federation.
The following keywords may be referenced in the expressions:
*/
  attributeCondition?: string;

  /*
Maps attributes from authentication credentials issued by an external identity provider
to Google Cloud attributes, such as `subject` and `segment`.
Each key must be a string specifying the Google Cloud IAM attribute to map to.
The following keys are supported:
- `google.subject`: The principal IAM is authenticating. You can reference this value
in IAM bindings. This is also the subject that appears in Cloud Logging logs.
Cannot exceed 127 characters.
- `google.groups`: Groups the external identity belongs to. You can grant groups
access to resources using an IAM `principalSet` binding; access applies to all
members of the group.
You can also provide custom attributes by specifying `attribute.{custom_attribute}`,
where `{custom_attribute}` is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].
You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:
- `google.subject`:
`principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}`
- `google.groups`:
`principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}`
- `attribute.{custom_attribute}`:
`principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}`
Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.
You can use the `assertion` keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.
The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.
For AWS providers, the following rules apply:
- If no attribute mapping is defined, the following default mapping applies:
*/
  attributeMapping?: Map<string, string>;

  // A description for the provider. Cannot exceed 256 characters.
  description?: string;

  /*
Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
However, existing tokens still grant access.
*/
  disabled?: boolean;

  /*
An OpenId Connect 1.0 identity provider. Not compatible with the property aws or saml.
Structure is documented below.
*/
  oidc?: iam_WorkloadIdentityPoolProviderOidc;

  /*
An Amazon Web Services identity provider. Not compatible with the property oidc or saml.
Structure is documented below.
*/
  aws?: iam_WorkloadIdentityPoolProviderAws;

  // A display name for the provider. Cannot exceed 32 characters.
  displayName?: string;

  /*
The ID for the provider, which becomes the final component of the resource name. This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  workloadIdentityPoolProviderId?: string;
}
export class WorkloadIdentityPoolProvider extends Resource {
  /*
The ID used for the pool, which is the final component of the pool resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.
*/
  public workloadIdentityPoolId?: string;

  /*
The ID for the provider, which becomes the final component of the resource name. This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  public workloadIdentityPoolProviderId?: string;

  /*
[A Common Expression Language](https://opensource.google/projects/cel) expression, in
plain text, to restrict what otherwise valid authentication credentials issued by the
provider should not be accepted.
The expression must output a boolean representing whether to allow the federation.
The following keywords may be referenced in the expressions:
*/
  public attributeCondition?: string;

  /*
Maps attributes from authentication credentials issued by an external identity provider
to Google Cloud attributes, such as `subject` and `segment`.
Each key must be a string specifying the Google Cloud IAM attribute to map to.
The following keys are supported:
- `google.subject`: The principal IAM is authenticating. You can reference this value
in IAM bindings. This is also the subject that appears in Cloud Logging logs.
Cannot exceed 127 characters.
- `google.groups`: Groups the external identity belongs to. You can grant groups
access to resources using an IAM `principalSet` binding; access applies to all
members of the group.
You can also provide custom attributes by specifying `attribute.{custom_attribute}`,
where `{custom_attribute}` is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].
You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:
- `google.subject`:
`principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}`
- `google.groups`:
`principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}`
- `attribute.{custom_attribute}`:
`principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}`
Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.
You can use the `assertion` keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.
The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.
For AWS providers, the following rules apply:
- If no attribute mapping is defined, the following default mapping applies:
*/
  public attributeMapping?: Map<string, string>;

  // A display name for the provider. Cannot exceed 32 characters.
  public displayName?: string;

  /*
An OpenId Connect 1.0 identity provider. Not compatible with the property aws or saml.
Structure is documented below.
*/
  public oidc?: iam_WorkloadIdentityPoolProviderOidc;

  /*
An SAML 2.0 identity provider. Not compatible with the property oidc or aws.
Structure is documented below.
*/
  public saml?: iam_WorkloadIdentityPoolProviderSaml;

  /*
The state of the provider.
- STATE_UNSPECIFIED: State unspecified.
- ACTIVE: The provider is active, and may be used to validate authentication credentials.
- DELETED: The provider is soft-deleted. Soft-deleted providers are permanently deleted
after approximately 30 days. You can restore a soft-deleted provider using
UndeleteWorkloadIdentityPoolProvider. You cannot reuse the ID of a soft-deleted provider
until it is permanently deleted.
*/
  public state?: string;

  /*
An Amazon Web Services identity provider. Not compatible with the property oidc or saml.
Structure is documented below.
*/
  public aws?: iam_WorkloadIdentityPoolProviderAws;

  // A description for the provider. Cannot exceed 256 characters.
  public description?: string;

  /*
Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
However, existing tokens still grant access.
*/
  public disabled?: boolean;

  /*
The resource name of the provider as
`projects/{project_number}/locations/global/workloadIdentityPools/{workload_identity_pool_id}/providers/{workload_identity_pool_provider_id}`.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the provider. Cannot exceed 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.\nHowever, existing tokens still grant access.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workloadIdentityPoolProviderId",
        "The ID for the provider, which becomes the final component of the resource name. This\nvalue must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix\n`gcp-` is reserved for use by Google, and may not be specified.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workloadIdentityPoolId",
        "The ID used for the pool, which is the final component of the pool resource name. This\nvalue should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix\n`gcp-` is reserved for use by Google, and may not be specified.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "attributeCondition",
        "[A Common Expression Language](https://opensource.google/projects/cel) expression, in\nplain text, to restrict what otherwise valid authentication credentials issued by the\nprovider should not be accepted.\nThe expression must output a boolean representing whether to allow the federation.\nThe following keywords may be referenced in the expressions:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "attributeMapping",
        "Maps attributes from authentication credentials issued by an external identity provider\nto Google Cloud attributes, such as `subject` and `segment`.\nEach key must be a string specifying the Google Cloud IAM attribute to map to.\nThe following keys are supported:\n* `google.subject`: The principal IAM is authenticating. You can reference this value\nin IAM bindings. This is also the subject that appears in Cloud Logging logs.\nCannot exceed 127 characters.\n* `google.groups`: Groups the external identity belongs to. You can grant groups\naccess to resources using an IAM `principalSet` binding; access applies to all\nmembers of the group.\nYou can also provide custom attributes by specifying `attribute.{custom_attribute}`,\nwhere `{custom_attribute}` is the name of the custom attribute to be mapped. You can\ndefine a maximum of 50 custom attributes. The maximum length of a mapped attribute key\nis 100 characters, and the key may only contain the characters [a-z0-9_].\nYou can reference these attributes in IAM policies to define fine-grained access for a\nworkload to Google Cloud resources. For example:\n* `google.subject`:\n`principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}`\n* `google.groups`:\n`principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}`\n* `attribute.{custom_attribute}`:\n`principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}`\nEach value must be a [Common Expression Language](https://opensource.google/projects/cel)\nfunction that maps an identity provider credential to the normalized attribute specified\nby the corresponding map key.\nYou can use the `assertion` keyword in the expression to access a JSON representation of\nthe authentication credential issued by the provider.\nThe maximum length of an attribute mapping expression is 2048 characters. When evaluated,\nthe total size of all mapped attributes must not exceed 8KB.\nFor AWS providers, the following rules apply:\n- If no attribute mapping is defined, the following default mapping applies:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oidc",
        "An OpenId Connect 1.0 identity provider. Not compatible with the property aws or saml.\nStructure is documented below.",
        iam_WorkloadIdentityPoolProviderOidc_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "aws",
        "An Amazon Web Services identity provider. Not compatible with the property oidc or saml.\nStructure is documented below.",
        iam_WorkloadIdentityPoolProviderAws_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A display name for the provider. Cannot exceed 32 characters.",
        [],
        false,
        false,
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
        InputType.Object,
        "saml",
        "An SAML 2.0 identity provider. Not compatible with the property oidc or aws.\nStructure is documented below.",
        iam_WorkloadIdentityPoolProviderSaml_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
