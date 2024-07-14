import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_WorkforceWorkforceVpcConfig,
  sagemaker_WorkforceWorkforceVpcConfig_GetTypes,
} from "../types/sagemaker_WorkforceWorkforceVpcConfig";
import {
  sagemaker_WorkforceCognitoConfig,
  sagemaker_WorkforceCognitoConfig_GetTypes,
} from "../types/sagemaker_WorkforceCognitoConfig";
import {
  sagemaker_WorkforceOidcConfig,
  sagemaker_WorkforceOidcConfig_GetTypes,
} from "../types/sagemaker_WorkforceOidcConfig";
import {
  sagemaker_WorkforceSourceIpConfig,
  sagemaker_WorkforceSourceIpConfig_GetTypes,
} from "../types/sagemaker_WorkforceSourceIpConfig";

export interface WorkforceArgs {
  // The name of the Workforce (must be unique).
  workforceName?: string;

  // configure a workforce using VPC. see Workforce VPC Config details below.
  workforceVpcConfig?: sagemaker_WorkforceWorkforceVpcConfig;

  // Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Conflicts with `oidc_config`. see Cognito Config details below.
  cognitoConfig?: sagemaker_WorkforceCognitoConfig;

  // Use this parameter to configure a private workforce using your own OIDC Identity Provider. Conflicts with `cognito_config`. see OIDC Config details below.
  oidcConfig?: sagemaker_WorkforceOidcConfig;

  // A list of IP address ranges Used to create an allow list of IP addresses for a private workforce. By default, a workforce isn't restricted to specific IP addresses. see Source Ip Config details below.
  sourceIpConfig?: sagemaker_WorkforceSourceIpConfig;
}
export class Workforce extends Resource {
  /*
The subdomain for your OIDC Identity Provider.
- `workforce_vpc_config.0.vpc_endpoint_id` - The IDs for the VPC service endpoints of your VPC workforce.
*/
  public subdomain?: string;

  // The name of the Workforce (must be unique).
  public workforceName?: string;

  // configure a workforce using VPC. see Workforce VPC Config details below.
  public workforceVpcConfig?: sagemaker_WorkforceWorkforceVpcConfig;

  // The Amazon Resource Name (ARN) assigned by AWS to this Workforce.
  public arn?: string;

  // Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Conflicts with `oidc_config`. see Cognito Config details below.
  public cognitoConfig?: sagemaker_WorkforceCognitoConfig;

  // Use this parameter to configure a private workforce using your own OIDC Identity Provider. Conflicts with `cognito_config`. see OIDC Config details below.
  public oidcConfig?: sagemaker_WorkforceOidcConfig;

  // A list of IP address ranges Used to create an allow list of IP addresses for a private workforce. By default, a workforce isn't restricted to specific IP addresses. see Source Ip Config details below.
  public sourceIpConfig?: sagemaker_WorkforceSourceIpConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "workforceVpcConfig",
        "configure a workforce using VPC. see Workforce VPC Config details below.",
        sagemaker_WorkforceWorkforceVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cognitoConfig",
        "Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Conflicts with `oidc_config`. see Cognito Config details below.",
        sagemaker_WorkforceCognitoConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oidcConfig",
        "Use this parameter to configure a private workforce using your own OIDC Identity Provider. Conflicts with `cognito_config`. see OIDC Config details below.",
        sagemaker_WorkforceOidcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceIpConfig",
        "A list of IP address ranges Used to create an allow list of IP addresses for a private workforce. By default, a workforce isn't restricted to specific IP addresses. see Source Ip Config details below.",
        sagemaker_WorkforceSourceIpConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workforceName",
        "The name of the Workforce (must be unique).",
        [],
        true,
        true,
      ),
    ];
  }
}
