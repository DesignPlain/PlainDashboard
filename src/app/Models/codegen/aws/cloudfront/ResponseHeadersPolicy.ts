import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig,
  cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig_GetTypes,
} from '../types/cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig';
import {
  cloudfront_ResponseHeadersPolicyCorsConfig,
  cloudfront_ResponseHeadersPolicyCorsConfig_GetTypes,
} from '../types/cloudfront_ResponseHeadersPolicyCorsConfig';
import {
  cloudfront_ResponseHeadersPolicyCustomHeadersConfig,
  cloudfront_ResponseHeadersPolicyCustomHeadersConfig_GetTypes,
} from '../types/cloudfront_ResponseHeadersPolicyCustomHeadersConfig';
import {
  cloudfront_ResponseHeadersPolicyRemoveHeadersConfig,
  cloudfront_ResponseHeadersPolicyRemoveHeadersConfig_GetTypes,
} from '../types/cloudfront_ResponseHeadersPolicyRemoveHeadersConfig';
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfig,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfig_GetTypes,
} from '../types/cloudfront_ResponseHeadersPolicySecurityHeadersConfig';

export interface ResponseHeadersPolicyArgs {
  // A configuration for enabling the Server-Timing header in HTTP responses sent from CloudFront. See Server Timing Headers Config for more information.
  serverTimingHeadersConfig?: cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig;

  // A comment to describe the response headers policy. The comment cannot be longer than 128 characters.
  comment?: string;

  // A configuration for a set of HTTP response headers that are used for Cross-Origin Resource Sharing (CORS). See Cors Config for more information.
  corsConfig?: cloudfront_ResponseHeadersPolicyCorsConfig;

  // Object that contains an attribute `items` that contains a list of custom headers. See Custom Header for more information.
  customHeadersConfig?: cloudfront_ResponseHeadersPolicyCustomHeadersConfig;

  // The current version of the response headers policy.
  etag?: string;

  // A unique name to identify the response headers policy.
  name?: string;

  // A configuration for a set of HTTP headers to remove from the HTTP response. Object that contains an attribute `items` that contains a list of headers. See Remove Header for more information.
  removeHeadersConfig?: cloudfront_ResponseHeadersPolicyRemoveHeadersConfig;

  // A configuration for a set of security-related HTTP response headers. See Security Headers Config for more information.
  securityHeadersConfig?: cloudfront_ResponseHeadersPolicySecurityHeadersConfig;
}
export class ResponseHeadersPolicy extends DS_Resource {
  // Object that contains an attribute `items` that contains a list of custom headers. See Custom Header for more information.
  public customHeadersConfig?: cloudfront_ResponseHeadersPolicyCustomHeadersConfig;

  // The current version of the response headers policy.
  public etag?: string;

  // A unique name to identify the response headers policy.
  public name?: string;

  // A configuration for a set of HTTP headers to remove from the HTTP response. Object that contains an attribute `items` that contains a list of headers. See Remove Header for more information.
  public removeHeadersConfig?: cloudfront_ResponseHeadersPolicyRemoveHeadersConfig;

  // A configuration for a set of security-related HTTP response headers. See Security Headers Config for more information.
  public securityHeadersConfig?: cloudfront_ResponseHeadersPolicySecurityHeadersConfig;

  // A configuration for enabling the Server-Timing header in HTTP responses sent from CloudFront. See Server Timing Headers Config for more information.
  public serverTimingHeadersConfig?: cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig;

  // A comment to describe the response headers policy. The comment cannot be longer than 128 characters.
  public comment?: string;

  // A configuration for a set of HTTP response headers that are used for Cross-Origin Resource Sharing (CORS). See Cors Config for more information.
  public corsConfig?: cloudfront_ResponseHeadersPolicyCorsConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'removeHeadersConfig',
        'A configuration for a set of HTTP headers to remove from the HTTP response. Object that contains an attribute `items` that contains a list of headers. See Remove Header for more information.',
        () => cloudfront_ResponseHeadersPolicyRemoveHeadersConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'securityHeadersConfig',
        'A configuration for a set of security-related HTTP response headers. See Security Headers Config for more information.',
        () => cloudfront_ResponseHeadersPolicySecurityHeadersConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverTimingHeadersConfig',
        'A configuration for enabling the Server-Timing header in HTTP responses sent from CloudFront. See Server Timing Headers Config for more information.',
        () =>
          cloudfront_ResponseHeadersPolicyServerTimingHeadersConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comment',
        'A comment to describe the response headers policy. The comment cannot be longer than 128 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'corsConfig',
        'A configuration for a set of HTTP response headers that are used for Cross-Origin Resource Sharing (CORS). See Cors Config for more information.',
        () => cloudfront_ResponseHeadersPolicyCorsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'customHeadersConfig',
        'Object that contains an attribute `items` that contains a list of custom headers. See Custom Header for more information.',
        () => cloudfront_ResponseHeadersPolicyCustomHeadersConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'etag',
        'The current version of the response headers policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A unique name to identify the response headers policy.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
