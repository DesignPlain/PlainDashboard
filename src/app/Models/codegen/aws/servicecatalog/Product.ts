import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  servicecatalog_ProductProvisioningArtifactParameters,
  servicecatalog_ProductProvisioningArtifactParameters_GetTypes,
} from "../types/servicecatalog_ProductProvisioningArtifactParameters";

export interface ProductArgs {
  // Contact URL for product support.
  supportUrl?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // Distributor (i.e., vendor) of the product.
  distributor?: string;

  // Owner of the product.
  owner?: string;

  // Configuration block for provisioning artifact (i.e., version) parameters. See `provisioning_artifact_parameters` Block for details.
  provisioningArtifactParameters?: servicecatalog_ProductProvisioningArtifactParameters;

  // Tags to apply to the product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values.

The following arguments are optional:
*/
  type?: string;

  // Description of the product.
  description?: string;

  // Name of the product.
  name?: string;

  // Support information about the product.
  supportDescription?: string;

  // Contact email for product support.
  supportEmail?: string;
}
export class Product extends DS_Resource {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  /*
Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values.

The following arguments are optional:
*/
  public type?: string;

  // ARN of the product.
  public arn?: string;

  // Configuration block for provisioning artifact (i.e., version) parameters. See `provisioning_artifact_parameters` Block for details.
  public provisioningArtifactParameters?: servicecatalog_ProductProvisioningArtifactParameters;

  // Contact email for product support.
  public supportEmail?: string;

  // Contact URL for product support.
  public supportUrl?: string;

  // Tags to apply to the product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Description of the product.
  public description?: string;

  // Whether the product has a default path. If the product does not have a default path, call `ListLaunchPaths` to disambiguate between paths.  Otherwise, `ListLaunchPaths` is not required, and the output of ProductViewSummary can be used directly with `DescribeProvisioningParameters`.
  public hasDefaultPath?: boolean;

  // Owner of the product.
  public owner?: string;

  // Status of the product.
  public status?: string;

  // Support information about the product.
  public supportDescription?: string;

  // Time when the product was created.
  public createdTime?: string;

  // Distributor (i.e., vendor) of the product.
  public distributor?: string;

  // Name of the product.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the product.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the product.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "supportEmail",
        "Contact email for product support.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "distributor",
        "Distributor (i.e., vendor) of the product.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "owner",
        "Owner of the product.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "provisioningArtifactParameters",
        "Configuration block for provisioning artifact (i.e., version) parameters. See `provisioning_artifact_parameters` Block for details.",
        () => servicecatalog_ProductProvisioningArtifactParameters_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "supportUrl",
        "Contact URL for product support.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "supportDescription",
        "Support information about the product.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
