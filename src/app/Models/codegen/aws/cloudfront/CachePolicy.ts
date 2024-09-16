import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin_GetTypes,
} from '../types/cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin';

export interface CachePolicyArgs {
  // Unique name used to identify the cache policy.
  name?: string;

  // Configuration for including HTTP headers, cookies, and URL query strings in the cache key. For more information, refer to the Parameters In Cache Key And Forwarded To Origin section.
  parametersInCacheKeyAndForwardedToOrigin?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin;

  // Description for the cache policy.
  comment?: string;

  // Amount of time, in seconds, that objects are allowed to remain in the CloudFront cache before CloudFront sends a new request to the origin server to check if the object has been updated.
  defaultTtl?: number;

  // Maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.
  maxTtl?: number;

  // Minimum amount of time, in seconds, that objects should remain in the CloudFront cache before a new request is sent to the origin to check for updates.
  minTtl?: number;
}
export class CachePolicy extends DS_Resource {
  // Description for the cache policy.
  public comment?: string;

  // Amount of time, in seconds, that objects are allowed to remain in the CloudFront cache before CloudFront sends a new request to the origin server to check if the object has been updated.
  public defaultTtl?: number;

  // Current version of the cache policy.
  public etag?: string;

  // Maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.
  public maxTtl?: number;

  // Minimum amount of time, in seconds, that objects should remain in the CloudFront cache before a new request is sent to the origin to check for updates.
  public minTtl?: number;

  // Unique name used to identify the cache policy.
  public name?: string;

  // Configuration for including HTTP headers, cookies, and URL query strings in the cache key. For more information, refer to the Parameters In Cache Key And Forwarded To Origin section.
  public parametersInCacheKeyAndForwardedToOrigin?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name used to identify the cache policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'parametersInCacheKeyAndForwardedToOrigin',
        'Configuration for including HTTP headers, cookies, and URL query strings in the cache key. For more information, refer to the Parameters In Cache Key And Forwarded To Origin section.',
        () =>
          cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comment',
        'Description for the cache policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'defaultTtl',
        'Amount of time, in seconds, that objects are allowed to remain in the CloudFront cache before CloudFront sends a new request to the origin server to check if the object has been updated.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxTtl',
        'Maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minTtl',
        'Minimum amount of time, in seconds, that objects should remain in the CloudFront cache before a new request is sent to the origin to check for updates.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
