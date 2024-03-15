import { getServiceTemplateSpecVolumeSecretItem } from "./getServiceTemplateSpecVolumeSecretItem";

export interface getServiceTemplateSpecVolumeSecret {
  /*
Mode bits to use on created files by default. Must be a value between 0000
and 0777. Defaults to 0644. Directories within the path are not affected by
this setting. This might be in conflict with other options that affect the
file mode, like fsGroup, and the result can be other mode bits set.
*/
  DefaultMode?: number;

  /*
If unspecified, the volume will expose a file whose name is the
secret_name.
If specified, the key will be used as the version to fetch from Cloud
Secret Manager and the path will be the name of the file exposed in the
volume. When items are defined, they must specify a key and a path.
*/
  Items?: Array<getServiceTemplateSpecVolumeSecretItem>;

  /*
The name of the secret in Cloud Secret Manager. By default, the secret
is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form:
{alias}:projects/{project-id|project-number}/secrets/{secret-name}.
If multiple alias definitions are needed, they must be separated by
commas.
The alias definitions must be set on the run.googleapis.com/secrets
annotation.
*/
  SecretName?: string;
}
