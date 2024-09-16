import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface firebase_HostingCustomDomainCertVerificationHttp {
  // A text string to serve at the path.
  desired?: string;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  discovered?: string;

  /*
(Output)
The last time Hosting systems checked for the file contents.
*/
  lastCheckTime?: string;

  // The path to the file.
  path?: string;
}

export function firebase_HostingCustomDomainCertVerificationHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'desired',
      'A text string to serve at the path.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'discovered',
      'Whether Hosting was able to find the required file contents on the\nspecified path during its last check.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastCheckTime',
      '(Output)\nThe last time Hosting systems checked for the file contents.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      'The path to the file.',
      () => [],
      false,
      false,
    ),
  ];
}
