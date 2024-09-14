import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ProvisioningArtifactArgs {
  // Information set by the administrator to provide guidance to end users about which provisioning artifacts to use. Valid values are `DEFAULT` and `DEPRECATED`. The default is `DEFAULT`. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.
  guidance?: string;

  // Identifier of the product.
  productId?: string;

  // Whether the product version is active. Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact. Default is `true`.
  active?: boolean;

  // Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact.
  description?: string;

  // Name of the provisioning artifact (for example, `v1`, `v2beta`). No spaces are allowed.
  name?: string;

  // Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`.
  templatePhysicalId?: string;

  /*
Template source as URL of the CloudFormation template in Amazon S3.

The following arguments are optional:
*/
  templateUrl?: string;

  // Type of provisioning artifact. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisioningArtifactProperties.html) for valid list of values.
  type?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). The default value is `en`.
  acceptLanguage?: string;

  // Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid.
  disableTemplateValidation?: boolean;
}
export class ProvisioningArtifact extends DS_Resource {
  // Time when the provisioning artifact was created.
  public createdTime?: string;

  // Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid.
  public disableTemplateValidation?: boolean;

  // Identifier of the product.
  public productId?: string;

  /*
Template source as URL of the CloudFormation template in Amazon S3.

The following arguments are optional:
*/
  public templateUrl?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). The default value is `en`.
  public acceptLanguage?: string;

  // Whether the product version is active. Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact. Default is `true`.
  public active?: boolean;

  // Name of the provisioning artifact (for example, `v1`, `v2beta`). No spaces are allowed.
  public name?: string;

  // Provisioning artifact identifier.
  public provisioningArtifactId?: string;

  // Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`.
  public templatePhysicalId?: string;

  // Type of provisioning artifact. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisioningArtifactProperties.html) for valid list of values.
  public type?: string;

  // Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact.
  public description?: string;

  // Information set by the administrator to provide guidance to end users about which provisioning artifacts to use. Valid values are `DEFAULT` and `DEPRECATED`. The default is `DEFAULT`. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.
  public guidance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "disableTemplateValidation",
        "Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "guidance",
        "Information set by the administrator to provide guidance to end users about which provisioning artifacts to use. Valid values are `DEFAULT` and `DEPRECATED`. The default is `DEFAULT`. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templatePhysicalId",
        "Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). The default value is `en`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the provisioning artifact (for example, `v1`, `v2beta`). No spaces are allowed.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateUrl",
        "Template source as URL of the CloudFormation template in Amazon S3.\n\nThe following arguments are optional:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of provisioning artifact. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisioningArtifactProperties.html) for valid list of values.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "productId",
        "Identifier of the product.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "active",
        "Whether the product version is active. Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact. Default is `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
