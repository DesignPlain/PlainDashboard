import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration,
  cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration_GetTypes,
} from "../types/cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration";
import {
  cognito_RiskConfigurationRiskExceptionConfiguration,
  cognito_RiskConfigurationRiskExceptionConfiguration_GetTypes,
} from "../types/cognito_RiskConfigurationRiskExceptionConfiguration";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfiguration,
  cognito_RiskConfigurationAccountTakeoverRiskConfiguration_GetTypes,
} from "../types/cognito_RiskConfigurationAccountTakeoverRiskConfiguration";

export interface RiskConfigurationArgs {
  // The compromised credentials risk configuration. See details below.
  compromisedCredentialsRiskConfiguration?: cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration;

  // The configuration to override the risk decision. See details below.
  riskExceptionConfiguration?: cognito_RiskConfigurationRiskExceptionConfiguration;

  // The user pool ID.
  userPoolId?: string;

  // The account takeover risk configuration. See details below.
  accountTakeoverRiskConfiguration?: cognito_RiskConfigurationAccountTakeoverRiskConfiguration;

  // The app client ID. When the client ID is not provided, the same risk configuration is applied to all the clients in the User Pool.
  clientId?: string;
}
export class RiskConfiguration extends Resource {
  // The account takeover risk configuration. See details below.
  public accountTakeoverRiskConfiguration?: cognito_RiskConfigurationAccountTakeoverRiskConfiguration;

  // The app client ID. When the client ID is not provided, the same risk configuration is applied to all the clients in the User Pool.
  public clientId?: string;

  // The compromised credentials risk configuration. See details below.
  public compromisedCredentialsRiskConfiguration?: cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration;

  // The configuration to override the risk decision. See details below.
  public riskExceptionConfiguration?: cognito_RiskConfigurationRiskExceptionConfiguration;

  // The user pool ID.
  public userPoolId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "compromisedCredentialsRiskConfiguration",
        "The compromised credentials risk configuration. See details below.",
        cognito_RiskConfigurationCompromisedCredentialsRiskConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "riskExceptionConfiguration",
        "The configuration to override the risk decision. See details below.",
        cognito_RiskConfigurationRiskExceptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "The user pool ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accountTakeoverRiskConfiguration",
        "The account takeover risk configuration. See details below.",
        cognito_RiskConfigurationAccountTakeoverRiskConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientId",
        "The app client ID. When the client ID is not provided, the same risk configuration is applied to all the clients in the User Pool.",
        [],
        false,
        true,
      ),
    ];
  }
}
