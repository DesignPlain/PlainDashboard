import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_EventConnectionAuthParametersApiKey,
  cloudwatch_EventConnectionAuthParametersApiKey_GetTypes,
} from './cloudwatch_EventConnectionAuthParametersApiKey';
import {
  cloudwatch_EventConnectionAuthParametersBasic,
  cloudwatch_EventConnectionAuthParametersBasic_GetTypes,
} from './cloudwatch_EventConnectionAuthParametersBasic';
import {
  cloudwatch_EventConnectionAuthParametersInvocationHttpParameters,
  cloudwatch_EventConnectionAuthParametersInvocationHttpParameters_GetTypes,
} from './cloudwatch_EventConnectionAuthParametersInvocationHttpParameters';
import {
  cloudwatch_EventConnectionAuthParametersOauth,
  cloudwatch_EventConnectionAuthParametersOauth_GetTypes,
} from './cloudwatch_EventConnectionAuthParametersOauth';

export interface cloudwatch_EventConnectionAuthParameters {
  // Parameters used for API_KEY authorization. An API key to include in the header for each authentication request. A maximum of 1 are allowed. Conflicts with `basic` and `oauth`. Documented below.
  apiKey?: cloudwatch_EventConnectionAuthParametersApiKey;

  // Parameters used for BASIC authorization. A maximum of 1 are allowed. Conflicts with `api_key` and `oauth`. Documented below.
  basic?: cloudwatch_EventConnectionAuthParametersBasic;

  // Invocation Http Parameters are additional credentials used to sign each Invocation of the ApiDestination created from this Connection. If the ApiDestination Rule Target has additional HttpParameters, the values will be merged together, with the Connection Invocation Http Parameters taking precedence. Secret values are stored and managed by AWS Secrets Manager. A maximum of 1 are allowed. Documented below.
  invocationHttpParameters?: cloudwatch_EventConnectionAuthParametersInvocationHttpParameters;

  // Parameters used for OAUTH_CLIENT_CREDENTIALS authorization. A maximum of 1 are allowed. Conflicts with `basic` and `api_key`. Documented below.
  oauth?: cloudwatch_EventConnectionAuthParametersOauth;
}

export function cloudwatch_EventConnectionAuthParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'apiKey',
      'Parameters used for API_KEY authorization. An API key to include in the header for each authentication request. A maximum of 1 are allowed. Conflicts with `basic` and `oauth`. Documented below.',
      () => cloudwatch_EventConnectionAuthParametersApiKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'basic',
      'Parameters used for BASIC authorization. A maximum of 1 are allowed. Conflicts with `api_key` and `oauth`. Documented below.',
      () => cloudwatch_EventConnectionAuthParametersBasic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'invocationHttpParameters',
      'Invocation Http Parameters are additional credentials used to sign each Invocation of the ApiDestination created from this Connection. If the ApiDestination Rule Target has additional HttpParameters, the values will be merged together, with the Connection Invocation Http Parameters taking precedence. Secret values are stored and managed by AWS Secrets Manager. A maximum of 1 are allowed. Documented below.',
      () =>
        cloudwatch_EventConnectionAuthParametersInvocationHttpParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oauth',
      'Parameters used for OAUTH_CLIENT_CREDENTIALS authorization. A maximum of 1 are allowed. Conflicts with `basic` and `api_key`. Documented below.',
      () => cloudwatch_EventConnectionAuthParametersOauth_GetTypes(),
      false,
      false,
    ),
  ];
}
