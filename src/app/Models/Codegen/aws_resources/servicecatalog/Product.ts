import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  servicecatalog_ProductProvisioningArtifactParameters,
  servicecatalog_ProductProvisioningArtifactParameters_GetTypes,
} from "../types/servicecatalog_ProductProvisioningArtifactParameters";

export interface ProductArgs {
  // Description of the product.
  description?: string;

  // Support information about the product.
  supportDescription?: string;

  // Contact email for product support.
  supportEmail?: string;

  // Tags to apply to the product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values.

The following arguments are optional:
*/
  type?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // Distributor (i.e., vendor) of the product.
  distributor?: string;

  // Name of the product.
  name?: string;

  // Owner of the product.
  owner?: string;

  // Configuration block for provisioning artifact (i.e., version) parameters. Detailed below.
  provisioningArtifactParameters?: servicecatalog_ProductProvisioningArtifactParameters;

  // Contact URL for product support.
  supportUrl?: string;
}
export class Product extends Resource {
  // ARN of the product.
  public arn?: string;

  // Description of the product.
  public description?: string;

  // Contact email for product support.
  public supportEmail?: string;

  // Contact URL for product support.
  public supportUrl?: string;

  // Tags to apply to the product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Time when the product was created.
  public createdTime?: string;

  // Whether the product has a default path. If the product does not have a default path, call `ListLaunchPaths` to disambiguate between paths.  Otherwise, `ListLaunchPaths` is not required, and the output of ProductViewSummary can be used directly with `DescribeProvisioningParameters`.
  public hasDefaultPath?: boolean;

  // Name of the product.
  public name?: string;

  // Configuration block for provisioning artifact (i.e., version) parameters. Detailed below.
  public provisioningArtifactParameters?: servicecatalog_ProductProvisioningArtifactParameters;

  /*
Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values.

The following arguments are optional:
*/
  public type?: string;

  // Distributor (i.e., vendor) of the product.
  public distributor?: string;

  // Owner of the product.
  public owner?: string;

  // Status of the product.
  public status?: string;

  // Support information about the product.
  public supportDescription?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the product.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "supportUrl",
        "Contact URL for product support.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the product.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "supportEmail",
        "Contact email for product support.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "distributor",
        "Distributor (i.e., vendor) of the product.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "owner",
        "Owner of the product.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "provisioningArtifactParameters",
        "Configuration block for provisioning artifact (i.e., version) parameters. Detailed below.",
        servicecatalog_ProductProvisioningArtifactParameters_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "supportDescription",
        "Support information about the product.",
        [],
        false,
        false,
      ),
    ];
  }
}
