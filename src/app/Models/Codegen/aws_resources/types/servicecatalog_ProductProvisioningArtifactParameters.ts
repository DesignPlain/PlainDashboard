import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicecatalog_ProductProvisioningArtifactParameters {
  // Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact.
  description?: string;

  // Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid.
  disableTemplateValidation?: boolean;

  // Name of the provisioning artifact (for example, `v1`, `v2beta`). No spaces are allowed.
  name?: string;

  // Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`.
  templatePhysicalId?: string;

  // Template source as URL of the CloudFormation template in Amazon S3.
  templateUrl?: string;

  // Type of provisioning artifact. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisioningArtifactProperties.html) for valid list of values.
  type?: string;
}

export function servicecatalog_ProductProvisioningArtifactParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableTemplateValidation",
      "Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the provisioning artifact (for example, `v1`, `v2beta`). No spaces are allowed.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "templatePhysicalId",
      "Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "templateUrl",
      "Template source as URL of the CloudFormation template in Amazon S3.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of provisioning artifact. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisioningArtifactProperties.html) for valid list of values.",
      [],
      false,
      true,
    ),
  ];
}
