import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { WorkforcePoolProviderSaml } from "../types/WorkforcePoolProviderSaml";
import { WorkforcePoolProviderOidc } from "../types/WorkforcePoolProviderOidc";

export interface WorkforcePoolProviderArgs {
  // The location for the resource.
  Location?: string;

  /*
The ID for the provider, which becomes the final component of the resource name.
This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix `gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  ProviderId?: string;

  /*
Represents a SAML identity provider.
Structure is documented below.
*/
  Saml?: WorkforcePoolProviderSaml;

  /*
The ID to use for the pool, which becomes the final component of the resource name.
The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix `gcp-` is reserved for use by Google, and may not be specified.
*/
  WorkforcePoolId?: string;

  /*
A [Common Expression Language](https://opensource.google/projects/cel) expression, in
plain text, to restrict what otherwise valid authentication credentials issued by the
provider should not be accepted.
The expression must output a boolean representing whether to allow the federation.
The following keywords may be referenced in the expressions:
*/
  AttributeCondition?: string;

  /*
Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
However, existing tokens still grant access.
*/
  Disabled?: boolean;

  // A user-specified display name for the provider. Cannot exceed 32 characters.
  DisplayName?: string;

  /*
Represents an OpenId Connect 1.0 identity provider.
Structure is documented below.
*/
  Oidc?: WorkforcePoolProviderOidc;

  /*
Maps attributes from the authentication credentials issued by an external identity provider
to Google Cloud attributes, such as `subject` and `segment`.
Each key must be a string specifying the Google Cloud IAM attribute to map to.
The following keys are supported:
- `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings.
This is also the subject that appears in Cloud Logging logs. This is a required field and
the mapped subject cannot exceed 127 bytes.
- `google.groups`: Groups the authenticating user belongs to. You can grant groups access to
resources using an IAM `principalSet` binding; access applies to all members of the group.
- `google.display_name`: The name of the authenticated user. This is an optional field and
the mapped display name cannot exceed 100 bytes. If not set, `google.subject` will be displayed instead.
This attribute cannot be referenced in IAM bindings.
- `google.profile_photo`: The URL that specifies the authenticated user's thumbnail photo.
This is an optional field. When set, the image will be visible as the user's profile picture.
If not set, a generic user icon will be displayed instead.
This attribute cannot be referenced in IAM bindings.
You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].
You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
- `google.subject`:
`principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}`
- `google.groups`:
`principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}`
- `attribute.{custom_attribute}`:
`principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}`
Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.
You can use the `assertion` keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.
The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.
For OIDC providers, you must supply a custom mapping that includes the `google.subject` attribute.
For example, the following maps the sub claim of the incoming credential to the `subject` attribute
on a Google token:
*/
  AttributeMapping?: Map<string, string>;

  // A user-specified description of the provider. Cannot exceed 256 characters.
  Description?: string;
}
export class WorkforcePoolProvider extends Resource {
  /*
Maps attributes from the authentication credentials issued by an external identity provider
to Google Cloud attributes, such as `subject` and `segment`.
Each key must be a string specifying the Google Cloud IAM attribute to map to.
The following keys are supported:
- `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings.
This is also the subject that appears in Cloud Logging logs. This is a required field and
the mapped subject cannot exceed 127 bytes.
- `google.groups`: Groups the authenticating user belongs to. You can grant groups access to
resources using an IAM `principalSet` binding; access applies to all members of the group.
- `google.display_name`: The name of the authenticated user. This is an optional field and
the mapped display name cannot exceed 100 bytes. If not set, `google.subject` will be displayed instead.
This attribute cannot be referenced in IAM bindings.
- `google.profile_photo`: The URL that specifies the authenticated user's thumbnail photo.
This is an optional field. When set, the image will be visible as the user's profile picture.
If not set, a generic user icon will be displayed instead.
This attribute cannot be referenced in IAM bindings.
You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].
You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
- `google.subject`:
`principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}`
- `google.groups`:
`principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}`
- `attribute.{custom_attribute}`:
`principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}`
Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.
You can use the `assertion` keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.
The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.
For OIDC providers, you must supply a custom mapping that includes the `google.subject` attribute.
For example, the following maps the sub claim of the incoming credential to the `subject` attribute
on a Google token:
*/
  public AttributeMapping?: Map<string, string>;

  /*
Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
However, existing tokens still grant access.
*/
  public Disabled?: boolean;

  // A user-specified display name for the provider. Cannot exceed 32 characters.
  public DisplayName?: string;

  // The location for the resource.
  public Location?: string;

  /*
Output only. The resource name of the provider.
Format: `locations/{location}/workforcePools/{workforcePoolId}/providers/{providerId}`
*/
  public Name?: string;

  /*
The ID for the provider, which becomes the final component of the resource name.
This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix `gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  public ProviderId?: string;

  /*
Represents a SAML identity provider.
Structure is documented below.
*/
  public Saml?: WorkforcePoolProviderSaml;

  /*
A [Common Expression Language](https://opensource.google/projects/cel) expression, in
plain text, to restrict what otherwise valid authentication credentials issued by the
provider should not be accepted.
The expression must output a boolean representing whether to allow the federation.
The following keywords may be referenced in the expressions:
*/
  public AttributeCondition?: string;

  /*
The ID to use for the pool, which becomes the final component of the resource name.
The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix `gcp-` is reserved for use by Google, and may not be specified.
*/
  public WorkforcePoolId?: string;

  /*
Represents an OpenId Connect 1.0 identity provider.
Structure is documented below.
*/
  public Oidc?: WorkforcePoolProviderOidc;

  /*
The current state of the provider.
- STATE_UNSPECIFIED: State unspecified.
- ACTIVE: The provider is active and may be used to validate authentication credentials.
- DELETED: The provider is soft-deleted. Soft-deleted providers are permanently
deleted after approximately 30 days. You can restore a soft-deleted provider using
[providers.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools.providers/undelete#google.iam.admin.v1.WorkforcePools.UndeleteWorkforcePoolProvider).
*/
  public State?: string;

  // A user-specified description of the provider. Cannot exceed 256 characters.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "WorkforcePoolId",
        "The ID to use for the pool, which becomes the final component of the resource name.\nThe IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.\nIt must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.\nHowever, existing tokens still grant access.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AttributeMapping",
        "Maps attributes from the authentication credentials issued by an external identity provider\nto Google Cloud attributes, such as `subject` and `segment`.\nEach key must be a string specifying the Google Cloud IAM attribute to map to.\nThe following keys are supported:\n* `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings.\nThis is also the subject that appears in Cloud Logging logs. This is a required field and\nthe mapped subject cannot exceed 127 bytes.\n* `google.groups`: Groups the authenticating user belongs to. You can grant groups access to\nresources using an IAM `principalSet` binding; access applies to all members of the group.\n* `google.display_name`: The name of the authenticated user. This is an optional field and\nthe mapped display name cannot exceed 100 bytes. If not set, `google.subject` will be displayed instead.\nThis attribute cannot be referenced in IAM bindings.\n* `google.profile_photo`: The URL that specifies the authenticated user's thumbnail photo.\nThis is an optional field. When set, the image will be visible as the user's profile picture.\nIf not set, a generic user icon will be displayed instead.\nThis attribute cannot be referenced in IAM bindings.\nYou can also provide custom attributes by specifying `attribute.{custom_attribute}`, where {custom_attribute}\nis the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.\nThe maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].\nYou can reference these attributes in IAM policies to define fine-grained access for a workforce pool\nto Google Cloud resources. For example:\n* `google.subject`:\n`principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}`\n* `google.groups`:\n`principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}`\n* `attribute.{custom_attribute}`:\n`principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}`\nEach value must be a [Common Expression Language](https://opensource.google/projects/cel)\nfunction that maps an identity provider credential to the normalized attribute specified\nby the corresponding map key.\nYou can use the `assertion` keyword in the expression to access a JSON representation of\nthe authentication credential issued by the provider.\nThe maximum length of an attribute mapping expression is 2048 characters. When evaluated,\nthe total size of all mapped attributes must not exceed 8KB.\nFor OIDC providers, you must supply a custom mapping that includes the `google.subject` attribute.\nFor example, the following maps the sub claim of the incoming credential to the `subject` attribute\non a Google token:",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Saml",
        "Represents a SAML identity provider.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AttributeCondition",
        "A [Common Expression Language](https://opensource.google/projects/cel) expression, in\nplain text, to restrict what otherwise valid authentication credentials issued by the\nprovider should not be accepted.\nThe expression must output a boolean representing whether to allow the federation.\nThe following keywords may be referenced in the expressions:",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-specified display name for the provider. Cannot exceed 32 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Oidc",
        "Represents an OpenId Connect 1.0 identity provider.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A user-specified description of the provider. Cannot exceed 256 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ProviderId",
        "The ID for the provider, which becomes the final component of the resource name.\nThis value must be 4-32 characters, and may contain the characters [a-z0-9-].\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n\n\n- - -",
      ),
    ];
  }
}
