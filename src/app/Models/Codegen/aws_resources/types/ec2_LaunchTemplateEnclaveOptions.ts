import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchTemplateEnclaveOptions {
  /*
If set to `true`, Nitro Enclaves will be enabled on the instance.

For more information, see the documentation on [Nitro Enclaves](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html).
*/
  enabled?: boolean;
}

export function ec2_LaunchTemplateEnclaveOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "If set to `true`, Nitro Enclaves will be enabled on the instance.\n\nFor more information, see the documentation on [Nitro Enclaves](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html).",
      [],
      false,
      false,
    ),
  ];
}
