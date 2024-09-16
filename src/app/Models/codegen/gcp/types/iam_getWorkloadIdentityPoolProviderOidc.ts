import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iam_getWorkloadIdentityPoolProviderOidc {
  // The OIDC issuer URL.
  issuerUri?: string;

  /*
OIDC JWKs in JSON String format. For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:
'''
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
'''
*/
  jwksJson?: string;

  /*
Acceptable values for the 'aud' field (audience) in the OIDC token. Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:
'''
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
'''
*/
  allowedAudiences?: Array<string>;
}

export function iam_getWorkloadIdentityPoolProviderOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'jwksJson',
      'OIDC JWKs in JSON String format. For details on definition of a\nJWK, see https:tools.ietf.org/html/rfc7517. If not set, then we\nuse the \'jwks_uri\' from the discovery document fetched from the\n.well-known path for the \'issuer_uri\'. Currently, RSA and EC asymmetric\nkeys are supported. The JWK must use following format and include only\nthe following fields:\n\'\'\'\n{\n  "keys": [\n    {\n          "kty": "RSA/EC",\n          "alg": "<algorithm>",\n          "use": "sig",\n          "kid": "<key-id>",\n          "n": "",\n          "e": "",\n          "x": "",\n          "y": "",\n          "crv": ""\n    }\n  ]\n}\n\'\'\'',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowedAudiences',
      "Acceptable values for the 'aud' field (audience) in the OIDC token. Token exchange\nrequests are rejected if the token audience does not match one of the configured\nvalues. Each audience may be at most 256 characters. A maximum of 10 audiences may\nbe configured.\n\nIf this list is empty, the OIDC token audience must be equal to the full canonical\nresource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.\nFor example:\n'''\n//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>\nhttps://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>\n'''",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'issuerUri',
      'The OIDC issuer URL.',
      () => [],
      true,
      false,
    ),
  ];
}
