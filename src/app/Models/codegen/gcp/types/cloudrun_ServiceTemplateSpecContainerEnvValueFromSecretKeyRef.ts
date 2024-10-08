import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef {
  /*
A Cloud Secret Manager secret version. Must be 'latest' for the latest
version or an integer for a specific version.
*/
  key?: string;

  /*
The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form: :projects/{project-id|project-number}/secrets/.
If multiple alias definitions are needed, they must be separated by commas.
The alias definitions must be set on the run.googleapis.com/secrets annotation.
*/
  name?: string;
}

export function cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      "A Cloud Secret Manager secret version. Must be 'latest' for the latest\nversion or an integer for a specific version.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project.\nIf the secret is in another project, you must define an alias.\nAn alias definition has the form: :projects/{project-id|project-number}/secrets/.\nIf multiple alias definitions are needed, they must be separated by commas.\nThe alias definitions must be set on the run.googleapis.com/secrets annotation.',
      () => [],
      true,
      false,
    ),
  ];
}
