import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  eks_IdentityProviderConfigOidc,
  eks_IdentityProviderConfigOidc_GetTypes,
} from "../types/eks_IdentityProviderConfigOidc";

export interface IdentityProviderConfigArgs {
  // Name of the EKS Cluster.
  clusterName?: string;

  // Nested attribute containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster. Detailed below.
  oidc?: eks_IdentityProviderConfigOidc;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class IdentityProviderConfig extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the EKS Identity Provider Configuration.
  public arn?: string;

  // Name of the EKS Cluster.
  public clusterName?: string;

  // Nested attribute containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster. Detailed below.
  public oidc?: eks_IdentityProviderConfigOidc;

  // Status of the EKS Identity Provider Configuration.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the EKS Cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oidc",
        "Nested attribute containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster. Detailed below.",
        eks_IdentityProviderConfigOidc_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
