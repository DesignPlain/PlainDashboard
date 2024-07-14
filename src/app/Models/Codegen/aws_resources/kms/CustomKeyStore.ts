import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CustomKeyStoreArgs {
  // Password for `kmsuser` on CloudHSM.
  keyStorePassword?: string;

  // Customer certificate used for signing on CloudHSM.
  trustAnchorCertificate?: string;

  // Cluster ID of CloudHSM.
  cloudHsmClusterId?: string;

  // Unique name for Custom Key Store.
  customKeyStoreName?: string;
}
export class CustomKeyStore extends Resource {
  // Unique name for Custom Key Store.
  public customKeyStoreName?: string;

  // Password for `kmsuser` on CloudHSM.
  public keyStorePassword?: string;

  // Customer certificate used for signing on CloudHSM.
  public trustAnchorCertificate?: string;

  // Cluster ID of CloudHSM.
  public cloudHsmClusterId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "keyStorePassword",
        "Password for `kmsuser` on CloudHSM.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "trustAnchorCertificate",
        "Customer certificate used for signing on CloudHSM.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cloudHsmClusterId",
        "Cluster ID of CloudHSM.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customKeyStoreName",
        "Unique name for Custom Key Store.",
        [],
        true,
        false,
      ),
    ];
  }
}
