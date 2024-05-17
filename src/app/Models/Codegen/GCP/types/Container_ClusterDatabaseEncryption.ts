import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterDatabaseEncryption {
  /*
the key to use to encrypt/decrypt secrets.  See the [DatabaseEncryption definition](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#Cluster.DatabaseEncryption) for more information.

<a name="nested_enable_k8s_beta_apis"></a>The `enable_k8s_beta_apis` block supports:
*/
  KeyName?: string;

  // `ENCRYPTED` or `DECRYPTED`
  State?: string;
}

export function Container_ClusterDatabaseEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "`ENCRYPTED` or `DECRYPTED`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KeyName",
      'the key to use to encrypt/decrypt secrets.  See the [DatabaseEncryption definition](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#Cluster.DatabaseEncryption) for more information.\n\n<a name="nested_enable_k8s_beta_apis"></a>The `enable_k8s_beta_apis` block supports:',
      [],
      false,
      false,
    ),
  ];
}
