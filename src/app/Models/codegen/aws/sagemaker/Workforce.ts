import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_WorkforceCognitoConfig,
  sagemaker_WorkforceCognitoConfig_GetTypes,
} from '../types/sagemaker_WorkforceCognitoConfig';
import {
  sagemaker_WorkforceOidcConfig,
  sagemaker_WorkforceOidcConfig_GetTypes,
} from '../types/sagemaker_WorkforceOidcConfig';
import {
  sagemaker_WorkforceSourceIpConfig,
  sagemaker_WorkforceSourceIpConfig_GetTypes,
} from '../types/sagemaker_WorkforceSourceIpConfig';
import {
  sagemaker_WorkforceWorkforceVpcConfig,
  sagemaker_WorkforceWorkforceVpcConfig_GetTypes,
} from '../types/sagemaker_WorkforceWorkforceVpcConfig';

export interface WorkforceArgs {
  // configure a workforce using VPC. see Workforce VPC Config details below.
  workforceVpcConfig?: sagemaker_WorkforceWorkforceVpcConfig;

  // Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Conflicts with `oidc_config`. see Cognito Config details below.
  cognitoConfig?: sagemaker_WorkforceCognitoConfig;

  // Use this parameter to configure a private workforce using your own OIDC Identity Provider. Conflicts with `cognito_config`. see OIDC Config details below.
  oidcConfig?: sagemaker_WorkforceOidcConfig;

  // A list of IP address ranges Used to create an allow list of IP addresses for a private workforce. By default, a workforce isn't restricted to specific IP addresses. see Source Ip Config details below.
  sourceIpConfig?: sagemaker_WorkforceSourceIpConfig;

  // The name of the Workforce (must be unique).
  workforceName?: string;
}
export class Workforce extends DS_Resource {
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

  // The subdomain for your OIDC Identity Provider.
  public subdomain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'workforceName',
        'The name of the Workforce (must be unique).',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'workforceVpcConfig',
        'configure a workforce using VPC. see Workforce VPC Config details below.',
        () => sagemaker_WorkforceWorkforceVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cognitoConfig',
        'Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Conflicts with `oidc_config`. see Cognito Config details below.',
        () => sagemaker_WorkforceCognitoConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'oidcConfig',
        'Use this parameter to configure a private workforce using your own OIDC Identity Provider. Conflicts with `cognito_config`. see OIDC Config details below.',
        () => sagemaker_WorkforceOidcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sourceIpConfig',
        "A list of IP address ranges Used to create an allow list of IP addresses for a private workforce. By default, a workforce isn't restricted to specific IP addresses. see Source Ip Config details below.",
        () => sagemaker_WorkforceSourceIpConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
