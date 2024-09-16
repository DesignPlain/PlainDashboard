import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclAssociationConfigRequestBodyAppRunnerService,
  wafv2_WebAclAssociationConfigRequestBodyAppRunnerService_GetTypes,
} from './wafv2_WebAclAssociationConfigRequestBodyAppRunnerService';
import {
  wafv2_WebAclAssociationConfigRequestBodyCloudfront,
  wafv2_WebAclAssociationConfigRequestBodyCloudfront_GetTypes,
} from './wafv2_WebAclAssociationConfigRequestBodyCloudfront';
import {
  wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool,
  wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool_GetTypes,
} from './wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool';
import {
  wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance,
  wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance_GetTypes,
} from './wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance';
import {
  wafv2_WebAclAssociationConfigRequestBodyApiGateway,
  wafv2_WebAclAssociationConfigRequestBodyApiGateway_GetTypes,
} from './wafv2_WebAclAssociationConfigRequestBodyApiGateway';

export interface wafv2_WebAclAssociationConfigRequestBody {
  // Customizes the request body that your protected Amazon CloudFront distributions forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `cloudfront` below for details.
  cloudfronts?: Array<wafv2_WebAclAssociationConfigRequestBodyCloudfront>;

  // Customizes the request body that your protected Amazon Cognito user pools forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `cognito_user_pool` below for details.
  cognitoUserPools?: Array<wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool>;

  // Customizes the request body that your protected AWS Verfied Access instances forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `verified_access_instance` below for details.
  verifiedAccessInstances?: Array<wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance>;

  // Customizes the request body that your protected Amazon API Gateway REST APIs forward to AWS WAF for inspection. Applicable only when `scope` is set to `CLOUDFRONT`. See `api_gateway` below for details.
  apiGateways?: Array<wafv2_WebAclAssociationConfigRequestBodyApiGateway>;

  // Customizes the request body that your protected Amazon App Runner services forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `app_runner_service` below for details.
  appRunnerServices?: Array<wafv2_WebAclAssociationConfigRequestBodyAppRunnerService>;
}

export function wafv2_WebAclAssociationConfigRequestBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'cloudfronts',
      'Customizes the request body that your protected Amazon CloudFront distributions forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `cloudfront` below for details.',
      () => wafv2_WebAclAssociationConfigRequestBodyCloudfront_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'cognitoUserPools',
      'Customizes the request body that your protected Amazon Cognito user pools forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `cognito_user_pool` below for details.',
      () => wafv2_WebAclAssociationConfigRequestBodyCognitoUserPool_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'verifiedAccessInstances',
      'Customizes the request body that your protected AWS Verfied Access instances forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `verified_access_instance` below for details.',
      () =>
        wafv2_WebAclAssociationConfigRequestBodyVerifiedAccessInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'apiGateways',
      'Customizes the request body that your protected Amazon API Gateway REST APIs forward to AWS WAF for inspection. Applicable only when `scope` is set to `CLOUDFRONT`. See `api_gateway` below for details.',
      () => wafv2_WebAclAssociationConfigRequestBodyApiGateway_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'appRunnerServices',
      'Customizes the request body that your protected Amazon App Runner services forward to AWS WAF for inspection. Applicable only when `scope` is set to `REGIONAL`. See `app_runner_service` below for details.',
      () => wafv2_WebAclAssociationConfigRequestBodyAppRunnerService_GetTypes(),
      false,
      false,
    ),
  ];
}
