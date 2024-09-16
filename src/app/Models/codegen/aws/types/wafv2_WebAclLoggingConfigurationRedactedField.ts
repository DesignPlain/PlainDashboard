import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclLoggingConfigurationRedactedFieldMethod,
  wafv2_WebAclLoggingConfigurationRedactedFieldMethod_GetTypes,
} from './wafv2_WebAclLoggingConfigurationRedactedFieldMethod';
import {
  wafv2_WebAclLoggingConfigurationRedactedFieldQueryString,
  wafv2_WebAclLoggingConfigurationRedactedFieldQueryString_GetTypes,
} from './wafv2_WebAclLoggingConfigurationRedactedFieldQueryString';
import {
  wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader,
  wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader_GetTypes,
} from './wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader';
import {
  wafv2_WebAclLoggingConfigurationRedactedFieldUriPath,
  wafv2_WebAclLoggingConfigurationRedactedFieldUriPath_GetTypes,
} from './wafv2_WebAclLoggingConfigurationRedactedFieldUriPath';

export interface wafv2_WebAclLoggingConfigurationRedactedField {
  // HTTP method to be redacted. It must be specified as an empty configuration block `{}`. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclLoggingConfigurationRedactedFieldMethod;

  // Whether to redact the query string. It must be specified as an empty configuration block `{}`. The query string is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclLoggingConfigurationRedactedFieldQueryString;

  // "single_header" refers to the redaction of a single header. For more information, please see the details below under Single Header.
  singleHeader?: wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader;

  // Configuration block that redacts the request URI path. It should be specified as an empty configuration block `{}`. The URI path is the part of a web request that identifies a resource, such as `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclLoggingConfigurationRedactedFieldUriPath;
}

export function wafv2_WebAclLoggingConfigurationRedactedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'singleHeader',
      '"single_header" refers to the redaction of a single header. For more information, please see the details below under Single Header.',
      () =>
        wafv2_WebAclLoggingConfigurationRedactedFieldSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'uriPath',
      'Configuration block that redacts the request URI path. It should be specified as an empty configuration block `{}`. The URI path is the part of a web request that identifies a resource, such as `/images/daily-ad.jpg`.',
      () => wafv2_WebAclLoggingConfigurationRedactedFieldUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'method',
      'HTTP method to be redacted. It must be specified as an empty configuration block `{}`. The method indicates the type of operation that the request is asking the origin to perform.',
      () => wafv2_WebAclLoggingConfigurationRedactedFieldMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'queryString',
      'Whether to redact the query string. It must be specified as an empty configuration block `{}`. The query string is the part of a URL that appears after a `?` character, if any.',
      () => wafv2_WebAclLoggingConfigurationRedactedFieldQueryString_GetTypes(),
      false,
      false,
    ),
  ];
}
