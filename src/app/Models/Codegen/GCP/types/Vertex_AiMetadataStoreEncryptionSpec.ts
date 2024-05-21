import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiMetadataStoreEncryptionSpec {
  /*
Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.
*/
  kmsKeyName?: string;
}

export function vertex_AiMetadataStoreEncryptionSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.\nHas the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.",
      [],
      false,
      true,
    ),
  ];
}
