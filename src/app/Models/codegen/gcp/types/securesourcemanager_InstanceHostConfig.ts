import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securesourcemanager_InstanceHostConfig {
  /*
(Output)
HTML hostname.
*/
  html?: string;

  /*
(Output)
API hostname.
*/
  api?: string;

  /*
(Output)
Git HTTP hostname.
*/
  gitHttp?: string;

  /*
(Output)
Git SSH hostname.
*/
  gitSsh?: string;
}

export function securesourcemanager_InstanceHostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'gitSsh',
      '(Output)\nGit SSH hostname.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'html',
      '(Output)\nHTML hostname.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'api',
      '(Output)\nAPI hostname.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'gitHttp',
      '(Output)\nGit HTTP hostname.',
      () => [],
      false,
      false,
    ),
  ];
}
