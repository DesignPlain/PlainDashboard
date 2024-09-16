import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketWebsiteConfigurationV2RoutingRuleRedirect {
  // HTTP redirect code to use on the response.
  httpRedirectCode?: string;

  // Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Valid values: `http`, `https`.
  protocol?: string;

  // Object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a `condition` block with `key_prefix_equals` set to `docs/` and in the `redirect` set `replace_key_prefix_with` to `/documents`.
  replaceKeyPrefixWith?: string;

  // Specific object key to use in the redirect request. For example, redirect request to `error.html`.
  replaceKeyWith?: string;

  // Host name to use in the redirect request.
  hostName?: string;
}

export function s3_BucketWebsiteConfigurationV2RoutingRuleRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'httpRedirectCode',
      'HTTP redirect code to use on the response.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'protocol',
      'Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Valid values: `http`, `https`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'replaceKeyPrefixWith',
      'Object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a `condition` block with `key_prefix_equals` set to `docs/` and in the `redirect` set `replace_key_prefix_with` to `/documents`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'replaceKeyWith',
      'Specific object key to use in the redirect request. For example, redirect request to `error.html`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'hostName',
      'Host name to use in the redirect request.',
      () => [],
      false,
      false,
    ),
  ];
}
