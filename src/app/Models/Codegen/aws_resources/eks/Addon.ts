import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AddonArgs {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Name of the EKS add-on. The name must match one of
the names returned by [describe-addon-versions](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-versions.html).
*/
  addonName?: string;

  // Indicates if you want to preserve the created resources when deleting the EKS add-on.
  preserve?: boolean;

  // How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are `NONE`, `OVERWRITE`, and `PRESERVE`. For more details see the [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs.
  resolveConflictsOnUpdate?: string;

  /*
The Amazon Resource Name (ARN) of an
existing IAM role to bind to the add-on's service account. The role must be
assigned the IAM permissions required by the add-on. If you don't specify
an existing IAM role, then the add-on uses the permissions assigned to the node
IAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html)
in the Amazon EKS User Guide.

> --Note:-- To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC)
provider created for your cluster. For more information, [see Enabling IAM roles
for service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)
in the Amazon EKS User Guide.
*/
  serviceAccountRoleArn?: string;

  // How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are `NONE` and `OVERWRITE`. For more details see the [CreateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html) API Docs.
  resolveConflictsOnCreate?: string;

  /*
The version of the EKS add-on. The version must
match one of the versions returned by [describe-addon-versions](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-versions.html).
*/
  addonVersion?: string;

  /*
Name of the EKS Cluster.

The following arguments are optional:
*/
  clusterName?: string;

  // custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from [describe-addon-configuration](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-configuration.html).
  configurationValues?: string;

  // Define how to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on or when applying version updates to the add-on. Valid values are `NONE`, `OVERWRITE` and `PRESERVE`. Note that `PRESERVE` is only valid on addon update, not for initial addon creation. If you need to set this to `PRESERVE`, use the `resolve_conflicts_on_create` and `resolve_conflicts_on_update` attributes instead. For more details check [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs.
  resolveConflicts?: string;
}
export class Addon extends Resource {
  /*
The version of the EKS add-on. The version must
match one of the versions returned by [describe-addon-versions](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-versions.html).
*/
  public addonVersion?: string;

  // Indicates if you want to preserve the created resources when deleting the EKS add-on.
  public preserve?: boolean;

  // How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are `NONE` and `OVERWRITE`. For more details see the [CreateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html) API Docs.
  public resolveConflictsOnCreate?: string;

  /*
The Amazon Resource Name (ARN) of an
existing IAM role to bind to the add-on's service account. The role must be
assigned the IAM permissions required by the add-on. If you don't specify
an existing IAM role, then the add-on uses the permissions assigned to the node
IAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html)
in the Amazon EKS User Guide.

> --Note:-- To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC)
provider created for your cluster. For more information, [see Enabling IAM roles
for service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)
in the Amazon EKS User Guide.
*/
  public serviceAccountRoleArn?: string;

  // Amazon Resource Name (ARN) of the EKS add-on.
  public arn?: string;

  /*
Name of the EKS Cluster.

The following arguments are optional:
*/
  public clusterName?: string;

  // custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from [describe-addon-configuration](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-configuration.html).
  public configurationValues?: string;

  /*
Name of the EKS add-on. The name must match one of
the names returned by [describe-addon-versions](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-versions.html).
*/
  public addonName?: string;

  // Define how to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on or when applying version updates to the add-on. Valid values are `NONE`, `OVERWRITE` and `PRESERVE`. Note that `PRESERVE` is only valid on addon update, not for initial addon creation. If you need to set this to `PRESERVE`, use the `resolve_conflicts_on_create` and `resolve_conflicts_on_update` attributes instead. For more details check [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs.
  public resolveConflicts?: string;

  // How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are `NONE`, `OVERWRITE`, and `PRESERVE`. For more details see the [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs.
  public resolveConflictsOnUpdate?: string;

  // (Optional) Key-value map of resource tags, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the EKS add-on was created.
  public createdAt?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the EKS add-on was updated.
  public modifiedAt?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "addonName",
        "Name of the EKS add-on. The name must match one of\nthe names returned by [describe-addon-versions](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-versions.html).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "preserve",
        "Indicates if you want to preserve the created resources when deleting the EKS add-on.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resolveConflictsOnUpdate",
        "How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are `NONE`, `OVERWRITE`, and `PRESERVE`. For more details see the [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccountRoleArn",
        "The Amazon Resource Name (ARN) of an\nexisting IAM role to bind to the add-on's service account. The role must be\nassigned the IAM permissions required by the add-on. If you don't specify\nan existing IAM role, then the add-on uses the permissions assigned to the node\nIAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html)\nin the Amazon EKS User Guide.\n\n> **Note:** To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC)\nprovider created for your cluster. For more information, [see Enabling IAM roles\nfor service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)\nin the Amazon EKS User Guide.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resolveConflictsOnCreate",
        "How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are `NONE` and `OVERWRITE`. For more details see the [CreateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html) API Docs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "addonVersion",
        "The version of the EKS add-on. The version must\nmatch one of the versions returned by [describe-addon-versions](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-versions.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the EKS Cluster.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationValues",
        "custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from [describe-addon-configuration](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-configuration.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resolveConflicts",
        "Define how to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on or when applying version updates to the add-on. Valid values are `NONE`, `OVERWRITE` and `PRESERVE`. Note that `PRESERVE` is only valid on addon update, not for initial addon creation. If you need to set this to `PRESERVE`, use the `resolve_conflicts_on_create` and `resolve_conflicts_on_update` attributes instead. For more details check [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs.",
        [],
        false,
        false,
      ),
    ];
  }
}
