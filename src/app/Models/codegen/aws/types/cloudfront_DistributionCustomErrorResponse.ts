import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionCustomErrorResponse {
  // 4xx or 5xx HTTP status code that you want to customize.
  errorCode?: number;

  // HTTP status code that you want CloudFront to return with the custom error page to the viewer.
  responseCode?: number;

  // Path of the custom error page (for example, `/custom_404.html`).
  responsePagePath?: string;

  // Minimum amount of time you want HTTP error codes to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated.
  errorCachingMinTtl?: number;
}

export function cloudfront_DistributionCustomErrorResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'errorCode',
      '4xx or 5xx HTTP status code that you want to customize.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'responseCode',
      'HTTP status code that you want CloudFront to return with the custom error page to the viewer.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'responsePagePath',
      'Path of the custom error page (for example, `/custom_404.html`).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'errorCachingMinTtl',
      'Minimum amount of time you want HTTP error codes to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated.',
      () => [],
      false,
      false,
    ),
  ];
}
